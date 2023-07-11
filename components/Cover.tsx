import Image from 'next/image';

export default function Cover() {
  return (
    <div className='mx-auto'>
      <div className='relative'>
        <div className='mx-[13.54%]'>
          <Image
            src={'/assets/images/sound_wave_img.png'}
            alt='Sound Wave'
            width={1400}
            height={300}
            className='object-contain'
          />
          <div className='absolute text-white text-6xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div id='centralWavvTextContainer'>
              <h1 id='centralWavvText'>wavv</h1>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
