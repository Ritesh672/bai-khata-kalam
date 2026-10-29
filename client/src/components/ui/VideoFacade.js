import React, { useState } from 'react';
import { Play } from 'lucide-react';
import styles from './VideoFacade.module.css';

// Shows a YouTube thumbnail and only loads the (heavy) player when clicked.
const VideoFacade = ({ videoId, title }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.frame}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className={styles.poster} onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" width="480" height="360" />
          <span className={styles.play}><Play size={34} fill="currentColor" aria-hidden="true" /></span>
        </button>
      )}
    </div>
  );
};

export default VideoFacade;
