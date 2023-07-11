import React, { FC, useRef, useState, useEffect, useCallback, forwardRef } from 'react';
import { WaveSurferOptions } from 'wavesurfer.js';
import useWavesurfer from '@/hooks/useWavesurfer';

type WaveSurferPlayerProps = {
  container: string;
  height: number;
  waveColor: string;
  progressColor: string;
  barWidth: number;
  barGap: number;
  barRadius: number;
  url: string;
};

// const WaveSurferPlayer: FC<WaveSurferPlayerProps> = (props, ref) => {
// const WaveSurferPlayer = forwardRef<HTMLDivElement, {}>((props, ref) => {
const WaveSurferPlayer: FC<WaveSurferPlayerProps> = forwardRef<
  HTMLDivElement,
  WaveSurferPlayerProps
>((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const wavesurfer = useWavesurfer(ref, props);
  // const wavesurfer = useWavesurfer(containerRef, props);

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
      <div id='waveform' ref={ref} />
      {/* <div id='waveform' ref={containerRef} /> */}

      {/* <button onClick={onPlayClick} style={{ marginTop: '1em' }}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <p>Seconds played: {currentTime}</p> */}
    </>
  );
});

WaveSurferPlayer.displayName = 'WaveSurferPlayer';

export default WaveSurferPlayer;
