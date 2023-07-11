import React, { FC } from 'react';
import Image from 'next/image';
import { Slider } from '@/components/ui/slider';
import styles from './MusicPlayerBar.module.css';

type TProps = {
  searchText: string;
};

const MusicPlayerBar: FC<TProps> = ({ searchText }) => {
  return (
    <div className='h-[120px] w-full bg-[#1A181E] fixed bottom-0 z-10'>
      <div className='flex text-white items-center my-[30px] mx-[8.75%]'>
        <Image src='/assets/images/pause_big_icon.png' alt='puase' width={60} height={60} />
        <div className='ml-4 w-[243px] truncate'>{searchText}</div>
        <div className={styles.gradientWave}></div>
        <div className={styles.currentTime}>0:10</div>
        <Image
          src='/assets/images/download_icon_select.png'
          alt='download'
          width={24}
          height={24}
          className='ml-[15%]'
        />
        <Image
          src='/assets/images/sound_icon_select.png'
          alt='mute-icon'
          width={24}
          height={24}
          className='ml-[1.25%]'
        />
        <Slider
          defaultValue={[33]}
          max={100}
          step={1}
          className='w-[110px] ml-[0.52%] bg-[#5F5E62] rounded-b-[30px] rounded-t-[30px]'
        />
      </div>
    </div>
  );
};
export default MusicPlayerBar;
