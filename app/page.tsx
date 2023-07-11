'use client';
import React, { useState } from 'react';
import Cover from '@/components/Cover';
import SearchBar from '@/components/SearchBar';
import MusicPlayerBar from '@/components/MusicPlayerBar';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const searchBarProps = {
    searchText,
    setSearchText,
  };
  const musicPlayerBarProps = { searchText };

  return (
    <main>
      <Cover />
      <SearchBar {...searchBarProps} />
      <MusicPlayerBar {...musicPlayerBarProps} />
    </main>
  );
}
