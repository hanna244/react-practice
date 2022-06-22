import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = ({ options, themeName = 'sea' }) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  // const  = props;

  React.useEffect(() => {
    const player = playerRef.current;

    // Make sure Video.js player is only initialized once
    if (!player) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options);

      // const player = (playerRef.current = videojs(videoElement, options, () => {
      //   videojs.log('player is ready');
      //   onReady && onReady(player);
      // }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className={`video-js vjs-big-play-centered vjs-theme-${themeName}`}
      />
    </div>
  );
};

export default VideoJS;
