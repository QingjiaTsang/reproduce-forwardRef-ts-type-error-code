import React, { FC, useRef, useState, useEffect, useCallback } from 'react';
import { WaveSurferOptions } from 'wavesurfer.js';
import useWavesurfer from '@/hooks/useWavesurfer';

const WaveSurferPlayer: FC<WaveSurferOptions> = (props) => {
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const wavesurfer = useWavesurfer(containerRef, props);

  const onPlayClick = useCallback(() => {
    wavesurfer?.isPlaying() ? wavesurfer.pause() : wavesurfer?.play();
  }, [wavesurfer]);

  useEffect(() => {
    if (!wavesurfer) return;

    setCurrentTime(0);
    setIsPlaying(false);

    const subscriptions = [
      wavesurfer.on('play', () => setIsPlaying(true)),
      wavesurfer.on('pause', () => setIsPlaying(false)),
      wavesurfer.on('timeupdate', (currentTime) => setCurrentTime(currentTime)),
    ];

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [wavesurfer]);

  return (
    <>
      <div id='waveform' ref={containerRef} style={{ minHeight: '120px' }} />

      <button onClick={onPlayClick} style={{ marginTop: '1em' }}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <p>Seconds played: {currentTime}</p>
    </>
  );
};

export default WaveSurferPlayer;
