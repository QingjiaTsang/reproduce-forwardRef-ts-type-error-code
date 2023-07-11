'use client';
import React, { useState, useCallback } from 'react';
import Cover from '@/components/Cover';
import SearchBar from '@/components/SearchBar';
import MusicPlayerBar from '@/components/MusicPlayerBar';
import WaveSurferPlayer from '@/components/WaveSurferPlayer';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const searchBarProps = {
    searchText,
    setSearchText,
  };
  const musicPlayerBarProps = { searchText };

  const urls = [
    'https://api.twilio.com//2010-04-01/Accounts/AC25aa00521bfac6d667f13fec086072df/Recordings/RE6d44bc34911342ce03d6ad290b66580c.mp3',
    'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3',
  ];
  const [audioUrl, setAudioUrl] = useState(urls[0]);

  const onUrlChange = useCallback(() => {
    urls.reverse();
    setAudioUrl(urls[0]);
  }, []);

  return (
    <main>
      <Cover />
      <SearchBar {...searchBarProps} />
      <div className='bg-white'>
        <WaveSurferPlayer
          container='#waveform'
          height={100}
          waveColor='rgb(200, 0, 200)'
          progressColor='rgb(100, 0, 100)'
          url={audioUrl}
        />
        <button onClick={onUrlChange}>Change audio</button>
      </div>
      <MusicPlayerBar {...musicPlayerBarProps} />
    </main>
  );
}
