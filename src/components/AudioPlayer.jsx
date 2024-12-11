import React, { useState, useRef, useEffect } from "react";
import fluteMp3 from "../assets/flute.mp3"; // Import the MP3 file from the src/assets folder
import "../css/AudioPlayer.css"; // Your CSS file

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Start with unmuted audio

  // Ensure audio plays as soon as the component loads and is not muted
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted; // Set mute state based on `isMuted`
      audioRef.current.play();
    }
  }, [isMuted]); // Re-run the effect when mute state changes

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted); // Toggle the mute state
  };

  return (
    <div className="audio-player">
      {/* Audio element with the imported MP3 file */}
      <audio ref={audioRef} src={fluteMp3} autoPlay loop preload="auto" />
      
      {/* Mute/Unmute button */}
      <button className="mute-button" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"} {/* Correct icon display: 🔇 for mute, 🔊 for unmute */}
      </button>
    </div>
  );
};

export default AudioPlayer;
