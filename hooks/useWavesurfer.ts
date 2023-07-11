import { useState, useEffect, RefObject } from 'react';
import WaveSurfer, { WaveSurferOptions } from 'wavesurfer.js';

const useWavesurfer = (containerRef: RefObject<HTMLDivElement>, options: WaveSurferOptions) => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [options, containerRef]);

  return wavesurfer;
};

export default useWavesurfer;
