import { useState, useRef } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-lg">
      <audio ref={audioRef} loop src="NidhinRoy/retto-rossyy-wedding-site/public/music/Elvis Presley - Can't Help Falling in Love (Lyrics).mp3" />
      <button onClick={toggleMusic} className="text-pink-600 font-semibold">
        {playing ? "Pause 🎵" : "Play 🎵"}
      </button>
    </div>
  );
}
