import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

interface PullToRefreshProps {
  children: React.ReactNode;
  onRefresh: () => Promise<void>;
  refreshThreshold?: number;
  className?: string;
}

export default function MobilePullToRefresh({
  children,
  onRefresh,
  refreshThreshold = 80,
  className = ''
}: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const container = containerRef.current;
    if (container && container.scrollTop === 0) {
      setStartY(e.touches[0].clientY);
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isRefreshing) return;
    
    const container = containerRef.current;
    if (!container || container.scrollTop > 0 || startY === 0) return;

    const currentY = e.touches[0].clientY;
    const distance = Math.max(0, currentY - startY);
    
    if (distance > 0) {
      e.preventDefault();
      setPullDistance(Math.min(distance, refreshThreshold * 1.5));
    }
  }, [startY, isRefreshing, refreshThreshold]);

  const handleTouchEnd = useCallback(async () => {
    if (pullDistance >= refreshThreshold && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh failed:', error);
      } finally {
        setIsRefreshing(false);
      }
    }
    
    setPullDistance(0);
    setStartY(0);
  }, [pullDistance, refreshThreshold, isRefreshing, onRefresh]);

  const refreshProgress = Math.min(pullDistance / refreshThreshold, 1);
  const shouldTrigger = pullDistance >= refreshThreshold;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-auto ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ height: '100%', touchAction: 'pan-y' }}
    >
      {/* Pull to Refresh Indicator */}
      <AnimatePresence>
        {(pullDistance > 0 || isRefreshing) && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: isRefreshing ? 1 : refreshProgress
            }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 glass rounded-full p-3 mt-4"
            style={{
              transform: `translateX(-50%) translateY(${Math.min(pullDistance - 20, refreshThreshold)}px)`
            }}
          >
            <motion.div
              animate={isRefreshing ? { rotate: 360 } : { rotate: refreshProgress * 360 }}
              transition={isRefreshing ? { 
                duration: 1, 
                repeat: Infinity, 
                ease: "linear" 
              } : { duration: 0.1 }}
              className={`flex items-center justify-center ${
                shouldTrigger || isRefreshing ? 'text-pistachio-deep' : 'text-olive/60'
              }`}
            >
              <RotateCcw size={20} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <motion.div
        animate={{
          y: isRefreshing ? 60 : Math.min(pullDistance * 0.5, 30)
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
