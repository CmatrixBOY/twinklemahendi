import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart, Clock, IndianRupee, MessageCircle, X, ArrowLeft, Filter, Grid, List,Eye,
  Sliders, Search, SortAsc, SortDesc, Star, TrendingUp, RotateCcw, Tag
} from 'lucide-react';
import { Link } from 'react-router';

import MobilePullToRefresh from '../components/MobilePullToRefresh';


const categories = [
  { id: 'all', name: 'All Designs', count: 20 },
  { id: 'bridal', name: 'Bridal', count: 3 },
  { id: 'engagement', name: 'Engagement', count: 1 },
  { id: 'siders', name: 'Siders', count: 7 },
  { id: 'heavysiders', name: 'Heavy Siders', count: 4 },
  { id: 'babyShower', name: 'Baby Shower', count: 2 },
  { id: 'minimalist', name: 'Minimalist', count: 1 },
  { id: 'festival', name: 'Festival', count: 2 }
];

const priceRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: 12000 },
  { id: 'budget', name: '300-800', min: 300, max: 800 },
  { id: 'mid', name: '900-2500', min: 900, max: 2500 },
  { id: 'premium', name: '3000-5000', min: 3000, max: 5000 },
  { id: 'luxury', name: '5000+', min: 5500, max: 12000 }
];

const complexityLevels = [
  { id: 'all', name: 'All Levels' },
  { id: 'low', name: 'Simple' },
  { id: 'medium', name: 'Medium' },
  { id: 'high', name: 'Complex' },
  { id: 'variable', name: 'Variable' }
];

const durationRanges = [
  { id: 'all', name: 'Any Duration' },
  { id: 'quick', name: 'Under 1 hour', max: 60 },
  { id: 'short', name: '1-2 hours', min: 60, max: 120 },
  { id: 'medium', name: '2-4 hours', min: 120, max: 240 },
  { id: 'long', name: '4+ hours', min: 240 }
];

const sortOptions = [
  { id: 'popular', name: 'Most Popular', icon: TrendingUp },
  { id: 'price-low', name: 'Price: Low to High', icon: SortAsc },
  { id: 'price-high', name: 'Price: High to Low', icon: SortDesc },
  { id: 'time-short', name: 'Duration: Short to Long', icon: Clock },
  { id: 'time-long', name: 'Duration: Long to Short', icon: Clock },
  { id: 'newest', name: 'Newest First', icon: Star }
];

const allTags = [
  'Traditional', 'Modern', 'Mandala','Peacock', 'Lotus', 'Roses', 'Butterfly', 'Heavy Work', 'Delicate', 'Bold',
  'Minimal', 'Elegant', 'Romantic', 'Kids', 'Quick', 'Affordable', 'Custom',
  'Personalized', 'Unique', 'Special', 'Festival', 'Engagement', 'Bridal','Human Figure' , 'Baby Shower'
];

const quickFilters = [
  { id: 'trending', name: 'Trending', icon: TrendingUp, filters: { category: 'all', complexity: 'all' } },
  { id: 'budget-friendly', name: 'Budget Friendly', icon: IndianRupee, filters: { priceRange: 'budget' } },
  { id: 'quick-designs', name: 'Quick Designs', icon: Clock, filters: { duration: 'quick' } },
  { id: 'bridal-special', name: 'Bridal Special', icon: Heart, filters: { category: 'bridal' } }
];

import { designs } from '../data/designs';


export default function GalleryPage() {
  

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  
  const [likedDesigns, setLikedDesigns] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const filteredAndSortedDesigns = useMemo(() => {
    let filtered = designs.filter(design => {
      // Category filter
      const categoryMatch = selectedCategory === 'all' || design.category === selectedCategory;

      // Price range filter
      const priceRange = priceRanges.find(range => range.id === selectedPriceRange);
      const priceMatch = !priceRange || priceRange.id === 'all' ||
        (design.priceMin >= priceRange.min && design.priceMax <= priceRange.max) ||
        (design.priceMin <= priceRange.max && design.priceMax >= priceRange.min);

      // Complexity filter
      const complexityMatch = selectedComplexity === 'all' ||
        design.complexity.toLowerCase() === selectedComplexity;

      // Duration filter
      const durationRange = durationRanges.find(range => range.id === selectedDuration);
      const durationMatch = !durationRange || durationRange.id === 'all' ||
        (durationRange.min !== undefined && durationRange.max !== undefined &&
          design.timeMinutes >= durationRange.min && design.timeMinutes <= durationRange.max) ||
        (durationRange.max !== undefined && durationRange.min === undefined && design.timeMinutes <= durationRange.max) ||
        (durationRange.min !== undefined && durationRange.max === undefined && design.timeMinutes >= durationRange.min);

      // Tags filter
      const tagsMatch = selectedTags.length === 0 ||
        selectedTags.some(tag => design.tags.includes(tag));

      // Search filter
      const searchMatch = searchQuery === '' ||
        design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return categoryMatch && priceMatch && complexityMatch && durationMatch && tagsMatch && searchMatch;
    });

    // Sort designs
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.priceMin - b.priceMin);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.priceMax - a.priceMax);
        break;
      case 'time-short':
        filtered.sort((a, b) => a.timeMinutes - b.timeMinutes);
        break;
      case 'time-long':
        filtered.sort((a, b) => b.timeMinutes - a.timeMinutes);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, selectedComplexity, selectedDuration, selectedTags, searchQuery, sortBy]);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedPriceRange !== 'all') count++;
    if (selectedComplexity !== 'all') count++;
    if (selectedDuration !== 'all') count++;
    if (selectedTags.length > 0) count++;
    if (searchQuery !== '') count++;
    return count;
  }, [selectedCategory, selectedPriceRange, selectedComplexity, selectedDuration, selectedTags, searchQuery]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedComplexity('all');
    setSelectedDuration('all');
    setSelectedTags([]);
    setSearchQuery('');
    setSortBy('popular');
  };

  const applyQuickFilter = (filterId: string) => {
    const quickFilter = quickFilters.find(f => f.id === filterId);
    if (quickFilter) {
      clearAllFilters();
      if (quickFilter.filters.category) setSelectedCategory(quickFilter.filters.category);
      if (quickFilter.filters.priceRange) setSelectedPriceRange(quickFilter.filters.priceRange);
      if (quickFilter.filters.complexity) setSelectedComplexity(quickFilter.filters.complexity);
      if (quickFilter.filters.duration) setSelectedDuration(quickFilter.filters.duration);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const toggleLike = (designId: string) => {
    setLikedDesigns(prev =>
      prev.includes(designId)
        ? prev.filter(id => id !== designId)
        : [...prev, designId]
    );
  };

  const handleBookDesign = (design: typeof designs[0]) => {
    const message = encodeURIComponent(`Hello Twinkle! I loved your ${design.title}. Could you share booking details for this design?`);
    const phoneNumber = "917041634002";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleRefresh = async () => {
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real app, this would refetch data
    clearAllFilters();
  };

  

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <MobilePullToRefresh onRefresh={handleRefresh} className="min-h-screen">
      <div className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-8 px-3 md:px-4 lg:px-6 mobile-safe">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <Link to="/" className="glass glass-hover p-2 md:p-3 rounded-full inline-flex items-center text-olive mobile-tap">
                <ArrowLeft size={18} />
              </Link>
              <h1 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-olive text-center px-2">
                Design Gallery
              </h1>
              <div className="flex space-x-1 md:space-x-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`glass glass-hover p-2 md:p-3 rounded-full relative mobile-tap ${showFilters ? 'bg-pistachio-deep' : ''}`}
                >
                  <Filter size={16} className="text-olive" />
                  {activeFiltersCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {activeFiltersCount > 9 ? '9+' : activeFiltersCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="glass glass-hover p-2 md:p-3 rounded-full mobile-tap hidden sm:block"
                >
                  {viewMode === 'grid' ? <List size={16} className="text-olive" /> : <Grid size={16} className="text-olive" />}
                </button>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-olive/80 text-center max-w-2xl mx-auto px-2 md:px-4">
              Explore our complete collection of Mehndi designs crafted with love and precision for every occasion
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-3 md:p-4 mb-4 md:mb-6"
          >
            <div className="relative">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-olive/60" size={18} />
              <input
                type="text"
                placeholder="Search designs, styles, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 md:pl-12 pr-10 md:pr-12 py-3 bg-transparent border-none outline-none text-olive placeholder-olive/60 text-sm md:text-base mobile-tap"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-olive/60 hover:text-olive mobile-tap"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Quick Filters */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-4 mb-6"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-olive text-sm">Quick Filters</h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center space-x-1 text-xs text-olive/70 hover:text-olive"
                >
                  <RotateCcw size={14} />
                  <span>Clear All</span>
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {quickFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => applyQuickFilter(filter.id)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-full glass glass-hover text-olive text-xs"
                >
                  <filter.icon size={14} />
                  <span>{filter.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-4 md:p-6 mb-6 md:mb-8 overflow-hidden"
              >
                <div className="space-y-6">
                  {/* Sort Options */}
                  <div>
                    <h3 className="font-semibold text-olive mb-3 flex items-center">
                      <SortAsc size={16} className="mr-2" />
                      Sort By
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {sortOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setSortBy(option.id)}
                          className={`px-3 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 text-xs md:text-sm ${sortBy === option.id
                              ? 'bg-pistachio-deep text-olive shadow-lg'
                              : 'glass glass-hover text-olive'
                            }`}
                        >
                          <option.icon size={14} />
                          <span>{option.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold text-olive mb-3 flex items-center">
                      <Filter size={16} className="mr-2" />
                      Category
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-3 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 text-xs md:text-sm ${selectedCategory === category.id
                              ? 'bg-pistachio-deep text-olive shadow-lg'
                              : 'glass glass-hover text-olive'
                            }`}
                        >
                          <span>{category.name}</span>
                          <span className="bg-olive/20 text-olive text-xs px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <h3 className="font-semibold text-olive mb-3 flex items-center">
                      <IndianRupee size={16} className="mr-2" />
                      Price Range
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => setSelectedPriceRange(range.id)}
                          className={`px-3 py-2 rounded-full font-medium transition-all duration-300 text-xs md:text-sm ${selectedPriceRange === range.id
                              ? 'bg-pistachio-deep text-olive shadow-lg'
                              : 'glass glass-hover text-olive'
                            }`}
                        >
                          {range.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Advanced Filters Toggle */}
                  <button
                    onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                    className="flex items-center space-x-2 text-olive/70 hover:text-olive text-sm"
                  >
                    <Sliders size={16} />
                    <span>{showAdvancedFilters ? 'Hide' : 'Show'} Advanced Filters</span>
                  </button>

                  {/* Advanced Filters */}
                  <AnimatePresence>
                    {showAdvancedFilters && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-6 border-t border-olive/20 pt-6"
                      >
                        {/* Complexity Filter */}
                        <div>
                          <h3 className="font-semibold text-olive mb-3 flex items-center">
                            <Star size={16} className="mr-2" />
                            Complexity Level
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {complexityLevels.map((level) => (
                              <button
                                key={level.id}
                                onClick={() => setSelectedComplexity(level.id)}
                                className={`px-3 py-2 rounded-full font-medium transition-all duration-300 text-xs md:text-sm ${selectedComplexity === level.id
                                    ? 'bg-pistachio-deep text-olive shadow-lg'
                                    : 'glass glass-hover text-olive'
                                  }`}
                              >
                                {level.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Duration Filter */}
                        <div>
                          <h3 className="font-semibold text-olive mb-3 flex items-center">
                            <Clock size={16} className="mr-2" />
                            Duration
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {durationRanges.map((range) => (
                              <button
                                key={range.id}
                                onClick={() => setSelectedDuration(range.id)}
                                className={`px-3 py-2 rounded-full font-medium transition-all duration-300 text-xs md:text-sm ${selectedDuration === range.id
                                    ? 'bg-pistachio-deep text-olive shadow-lg'
                                    : 'glass glass-hover text-olive'
                                  }`}
                              >
                                {range.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Tags Filter */}
                        <div className='pb-6'>
                          <h3 className="font-semibold text-olive mb-3 flex items-center">
                            <Tag size={16} className="mr-2" />
                            Tags ({selectedTags.length} selected)
                          </h3>
                          <div className="flex flex-wrap gap-2 p-7">
                            {allTags.map((tag) => (
                              <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-3 py-2 rounded-full font-medium transition-all duration-300 text-xs ${selectedTags.includes(tag)
                                    ? 'bg-pistachio-deep text-olive shadow-md'
                                    : 'glass glass-hover text-olive'
                                  }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Filters Summary */}
          {activeFiltersCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-4 mb-6"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== 'all' && (
                    <span className="bg-pistachio-light text-olive px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                      <span>Category: {categories.find(c => c.id === selectedCategory)?.name}</span>
                      <button onClick={() => setSelectedCategory('all')}><X size={12} /></button>
                    </span>
                  )}
                  {selectedPriceRange !== 'all' && (
                    <span className="bg-pistachio-light text-olive px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                      <span>Price: {priceRanges.find(r => r.id === selectedPriceRange)?.name}</span>
                      <button onClick={() => setSelectedPriceRange('all')}><X size={12} /></button>
                    </span>
                  )}
                  {selectedComplexity !== 'all' && (
                    <span className="bg-pistachio-light text-olive px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                      <span>Complexity: {complexityLevels.find(c => c.id === selectedComplexity)?.name}</span>
                      <button onClick={() => setSelectedComplexity('all')}><X size={12} /></button>
                    </span>
                  )}
                  {selectedDuration !== 'all' && (
                    <span className="bg-pistachio-light text-olive px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                      <span>Duration: {durationRanges.find(d => d.id === selectedDuration)?.name}</span>
                      <button onClick={() => setSelectedDuration('all')}><X size={12} /></button>
                    </span>
                  )}
                  {selectedTags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-pistachio-light text-olive px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                      <span>{tag}</span>
                      <button onClick={() => toggleTag(tag)}><X size={12} /></button>
                    </span>
                  ))}
                  {selectedTags.length > 3 && (
                    <span className="bg-pistachio-light text-olive px-3 py-1 rounded-full text-xs">
                      +{selectedTags.length - 3} more tags
                    </span>
                  )}
                </div>
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-olive/70 hover:text-olive flex items-center space-x-1"
                >
                  <RotateCcw size={12} />
                  <span>Clear All</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 md:mb-6"
          >
            <p className="text-olive/70 text-center text-sm md:text-base">
              Showing {filteredAndSortedDesigns.length} of {designs.length} designs
              {sortBy !== 'popular' && ` • Sorted by ${sortOptions.find(s => s.id === sortBy)?.name}`}
            </p>
          </motion.div>

          {/* Design Grid/List */}
          <motion.div
            layout
            className={viewMode === 'grid'
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
              : "space-y-3 md:space-y-4 lg:space-y-6"
            }
          >
            <AnimatePresence>
              {filteredAndSortedDesigns.map((design, index) => (
                <motion.div
                  key={design.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={viewMode === 'grid'
                    ? "glass rounded-2xl overflow-hidden glass-hover group mobile-tap"
                    : "glass rounded-2xl overflow-hidden glass-hover group flex flex-col sm:flex-row mobile-tap"
                  }
                >
                  <div className={viewMode === 'grid'
                    ? "relative aspect-square overflow-hidden"
                    : "relative w-full sm:w-48 aspect-square overflow-hidden flex-shrink-0"
                  }>
                    <Link to={`/design/${design.id}`}>
                    <img
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>

                    {/* Watermark */}
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white font-dancing text-lg md:text-xl font-bold opacity-50">
                        Twinkle Batliwala
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-2 md:top-3 lg:top-4 right-2 md:right-3 lg:right-4 flex flex-col gap-1 md:gap-2">
                      <button
                        onClick={() => toggleLike(design.id)}
                        className={`w-7 md:w-8 h-7 md:h-8 rounded-full glass flex items-center justify-center transition-colors mobile-tap ${likedDesigns.includes(design.id) ? 'text-red-500' : 'text-olive'
                          }`}
                      >
                        <Heart size={14} fill={likedDesigns.includes(design.id) ? 'currentColor' : 'none'} />
                      </button>

                      <Link to={`/design/${design.id}`}>
                        <button
                          className="w-7 md:w-8 h-7 md:h-8 rounded-full glass flex items-center justify-center text-olive hover:text-pistachio-deep transition-colors mobile-tap"
                        >
                          <Eye size={14} />
                        </button>
                      </Link>
                    </div>

                    {/* Complexity Badge */}
                    <div className="absolute top-3 md:top-4 left-3 md:left-4">
                      <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(design.complexity)}`}>
                        {design.complexity}
                      </span>
                    </div>

                    {/* Popularity Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                      <Star size={10} fill="currentColor" />
                      <span>{design.popularity}%</span>
                    </div>
                  </div>

                  <div className={viewMode === 'grid' ? "p-3 md:p-4 lg:p-6" :  "text-pistachio-deep p-3 md:p-4 lg:p-6 flex-1"}>
                    <h3 className="font-playfair text-base md:text-lg lg:text-xl font-semibold text-olive mb-1 md:mb-2 line-clamp-2">
                      {design.title}
                    </h3>
                    <p className="text-olive/70 text-xs md:text-sm mb-2 md:mb-3 lg:mb-4 line-clamp-2">{design.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                      {design.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-pistachio-light text-olive text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {design.tags.length > 3 && (
                        <span className="bg-olive/10 text-olive text-xs px-2 py-1 rounded-full">
                          +{design.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs md:text-sm text-olive/80 mb-3 md:mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{design.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <IndianRupee size={12} />
                        <span>{design.price}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookDesign(design)}
                      className="w-full bg-pistachio-deep hover:bg-pistachio-soft transition-colors py-2 md:py-3 rounded-lg font-medium text-olive flex items-center justify-center space-x-2 text-sm md:text-base mobile-tap"
                    >
                      <MessageCircle size={16} />
                      <span>Book Now</span>
                    </button>
                    <Link to={`/design/${design.id}`} className="w-full">
                      <button
                        className="w-full mt-2 bg-gray-200 hover:bg-gray-300 transition-colors py-2 md:py-3 rounded-lg font-medium text-gray-700 flex items-center justify-center space-x-2 text-sm md:text-base mobile-tap"
                      >
                        <Eye size={16} />
                        <span>See More details</span>
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredAndSortedDesigns.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="glass rounded-2xl p-8">
                <Search size={48} className="text-olive/30 mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-olive mb-2">No designs found</h3>
                <p className="text-olive/70 mb-4">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearAllFilters}
                  className="bg-pistachio-deep hover:bg-pistachio-soft transition-colors px-6 py-3 rounded-lg font-medium text-olive"
                >
                  Clear All Filters
                </button>
              </div>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredAndSortedDesigns.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-8 md:mt-12"
            >
              <button className="glass glass-hover px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold text-olive text-sm md:text-base">
                Load More Designs
              </button>
            </motion.div>
          )}

          
        </div>
      </div>
    </MobilePullToRefresh>
  );
}