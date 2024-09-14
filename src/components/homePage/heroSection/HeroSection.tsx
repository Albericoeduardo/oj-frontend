import React from 'react'

import Image from 'next/image';

const HeroSection = () => {
  const personImage = '/personImage.png';
  const heroSectionImg = '/heroSectionImg.png';

  return (
    <section>
        <div
            className='absolute inset-0 h-full w-full bg-fixed bg-cover bg-center'
            style={{
            backgroundImage: `url(${heroSectionImg})`,
            backgroundAttachment: 'fixed'
            }}
        >
            <div className='absolute inset-0 bg-blue-900 opacity-60'></div>

            <div className='relative z-10 flex flex-col md:flex-row items-center justify-center h-full space-y-28 text-center text-white'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-5xl tracking-widest -translate-x-24'>OBSERVATÓRIO DA</h1>
                    <h2 className='text-7xl font-bold border-b-4'>JUVENTUDE</h2>
                </div>

                <div className='relative z-20 mt-4 md:mt-0'>
                    <Image 
                        src={personImage} 
                        alt={'Person Image'}
                        width={500}
                        height={500}
                        className='w-auto h-[700px] object-cover z-20'                     
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection  