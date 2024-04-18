import React, { useRef } from "react";
import styles from "./Video.module.css";

const Video = ({ src }) => {
  const videoRef = useRef(null);

  // const togglePlay = () => {
  //   const video = videoRef.current;
  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
  // };

  // const toggleFullScreen = () => {
  //   const video = videoRef.current;
  //   if (video.requestFullscreen) {
  //     video.requestFullscreen();
  //   } else if (video.mozRequestFullScreen) {
  //     video.mozRequestFullScreen();
  //   } else if (video.webkitRequestFullscreen) {
  //     video.webkitRequestFullscreen();
  //   } else if (video.msRequestFullscreen) {
  //     video.msRequestFullscreen();
  //   }
  // };

  return (
    <div className={styles.videoContainer}>
      <video ref={videoRef} className={styles.video} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className={styles.controls}>
        <button onClick={togglePlay}>Play/Pause</button>
        <button onClick={toggleFullScreen}>Full Screen</button>
      </div> */}
    </div>
  );
};

export default Video;
