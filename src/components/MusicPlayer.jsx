import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  // Attempt muted autoplay silently on load (this may fail silently, which is okay)
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = true;
      audio.play().catch(() => {
        // Autoplay blocked — will be triggered on button click
      });
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.muted = false; // Unmute on user interaction
      audio.play().catch((err) => {
        console.error("Playback failed:", err);
      });
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-xl rounded-full px-4 py-2 z-50">
      <audio ref={audioRef} loop src="/music/song.mp3" />
      <button
        onClick={toggleMusic}
        className="text-pink-600 font-semibold hover:underline"
      >
        {playing ? "Pause 🎵" : "Play 🎵"}
      </button>
    </div>
  );
}
