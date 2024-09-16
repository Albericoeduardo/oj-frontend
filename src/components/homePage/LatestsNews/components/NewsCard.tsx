import React from 'react'

import Image from 'next/image'

type NewsCardProps = {
  imageUrl: string;
  description: string;
  alt: string;
};

const NewsCard = ({imageUrl, description, alt}: NewsCardProps) => {
  return (
    <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
            <Image 
                src={imageUrl}
                alt={alt}
                layout='fill'
                objectFit='cover'
            />
            <p>{description}</p>
        </div>
    </div>
  )
}

export default NewsCard