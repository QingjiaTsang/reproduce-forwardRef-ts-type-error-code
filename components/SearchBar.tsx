'use client';
import { FC } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import styles from './SearchBar.module.css';

type TProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};
const SearchBar: FC<TProps> = ({ searchText, setSearchText }) => {
  return (
    <div className='flex text-white mt-[3.7%] mx-[22.71%]'>
      <Input
        type='text'
        className={styles.searchBar}
        placeholder='Type anything in English'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button className={styles.searchBtn} style={{ opacity: searchText && 1 }}>
        Generate Track
      </Button>
    </div>
  );
};
export default SearchBar;
