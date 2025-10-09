import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Volume2, VolumeX } from "lucide-react";

const AMBIENT_AUDIO_SRC =
  "https://cdn.pixabay.com/download/audio/2022/10/07/audio_c90cbdd5f2.mp3?filename=indian-flute-11121.mp3";

export const AmbientAudioToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(AMBIENT_AUDIO_SRC);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }
    const audio = audioRef.current;
    if (!audio) return;

    if (enabled) {
      void audio.play().catch((error) => {
        console.warn("Audio playback was prevented", error);
        setEnabled(false);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [enabled]);

  return (
    <Button
      type="button"
      className={cn(
        "glass-button min-h-[2.5rem] px-4 py-2 text-sm",
        enabled ? "shadow-glow" : "opacity-90 hover:opacity-100",
      )}
      onClick={() => setEnabled((prev) => !prev)}
      aria-pressed={enabled}
    >
      {enabled ? (
        <div className="flex items-center gap-2">
          <Volume2 className="h-4 w-4" />
          <span>Ambient on</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <VolumeX className="h-4 w-4" />
          <span>Ambient off</span>
        </div>
      )}
    </Button>
  );
};
