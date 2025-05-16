import { useState, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.muted = false;
      audio.play().then(() => {
        setPlaying(true);
      }).catch((error) => {
        console.error("Playback failed:", error);
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white px-4 py-2 shadow-xl rounded-full z-50">
      <audio ref={audioRef} loop muted src="/music/song.mp3" />
      <button
        onClick={toggleMusic}
        className="text-pink-600 font-semibold hover:underline"
      >
        {playing ? "Pause 🎵" : "Play 🎵"}
      </button>
    </div>
  );
}
