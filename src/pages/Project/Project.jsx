import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Project.css";

const playlist = [
  { id: 1, title: "Fetah", videoId: "hgH7Nbki7p4" },
  { id: 2, title: "Shinigami", videoId: "ogbfG75V8pQ" },
  { id: 3, title: "SHR", videoId: "a6wL-TM-W-w" },
  { id: 4, title: "Natori", videoId: "VDdLF1YubI0" },
  { id: 5, title: "Yuta Kakizaki", videoId: "Zan4FR2t8Vs" },
  { id: 6, title: "Siinamota", videoId: "AqI97zHMoQw" },
  { id: 7, title: "Mons", videoId: "ynn1uif8MGM" },
];

export default function Project() {
  const [currentVideo, setCurrentVideo] = useState(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [apiReady, setApiReady] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState("none");

  const playerRef = useRef(null);
  const canvasRef = useRef(null);
  const progressInterval = useRef(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => setApiReady(true);
    } else {
      setApiReady(true);
    }
  }, []);

  useEffect(() => {
    if (apiReady && !playerRef.current) {
      playerRef.current = new window.YT.Player("youtube-player", {
        height: "0", width: "0",
        events: {
          onReady: (e) => e.target.setVolume(volume * 100),
          onStateChange: (e) => {
            if (e.data === 1) { setIsPlaying(true); setDuration(e.target.getDuration()); startTimer(); }
            else { setIsPlaying(false); stopTimer(); }
            if (e.data === 0) playNext();
          }
        }
      });
    }
  }, [apiReady]);

  useEffect(() => {
    if (playerRef.current && currentVideo) {
      playerRef.current.loadVideoById(currentVideo.videoId);
    }
  }, [currentVideo]);

  const startTimer = () => {
    progressInterval.current = setInterval(() => {
      if (playerRef.current?.getCurrentTime) setCurrentTime(playerRef.current.getCurrentTime());
    }, 1000);
  };
  const stopTimer = () => clearInterval(progressInterval.current);

  const playNext = useCallback(() => {
    let index = playlist.findIndex(v => v.id === currentVideo.id);
    let next = shuffle ? Math.floor(Math.random() * playlist.length) : (index + 1) % playlist.length;
    setCurrentVideo(playlist[next]);
  }, [currentVideo, shuffle]);

  const playPrev = () => {
    let index = playlist.findIndex(v => v.id === currentVideo.id);
    let prev = (index - 1 + playlist.length) % playlist.length;
    setCurrentVideo(playlist[prev]);
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const secs = Math.floor(s % 60);
    return `${m}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section className="project" id="projects">
      <div className="project-bg-overlay"></div>
      
      <div className="title-wrapper">
        <h2 className="title">Some <span className="accent">Shit</span></h2>
        <div className="title-line"></div>
      </div>

      <div id="youtube-player"></div>

      <div className="player-container">
        <div className="glass-card main-player">
          <div className={`art-work ${isPlaying ? "playing" : ""}`}>
            <img src={`https://img.youtube.com/vi/${currentVideo.videoId}/maxresdefault.jpg`} alt="cover" />
            <div className="vinyl-overlay"></div>
            {isPlaying && <div className="music-pulse"></div>}
          </div>

          <div className="controls-section">
            <div className="info">
              <h2>{currentVideo.title}</h2>
              <p className="accent">Lmasi7 Digital</p>
            </div>

            <div className="progress-area">
              <input 
                type="range" min="0" max={duration} value={currentTime} 
                onChange={(e) => playerRef.current.seekTo(e.target.value)} 
                className="progress-bar" 
              />
              <div className="time-stamps">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="buttons">
              <button onClick={() => setShuffle(!shuffle)} className={`icon-btn ${shuffle ? "active" : ""}`}>🔀</button>
              <button onClick={playPrev} className="icon-btn">⏮</button>
              <button className="play-main" onClick={() => isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo()}>
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button onClick={playNext} className="icon-btn">⏭</button>
              <button onClick={() => setIsMuted(!isMuted)} className="icon-btn">{isMuted ? "🔇" : "🔊"}</button>
            </div>
          </div>
        </div>

        <div className="playlist-sidebar">
          <h3>My Playlist</h3>
          <div className="list-container">
            {playlist.map((track) => (
              <div key={track.id} className={`list-item ${currentVideo.id === track.id ? "active" : ""}`} onClick={() => setCurrentVideo(track)}>
                <img src={`https://img.youtube.com/vi/${track.videoId}/default.jpg`} alt="" />
                <span>{track.title}</span>
                {currentVideo.id === track.id && isPlaying && <div className="wave-icon"><span></span><span></span><span></span></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}