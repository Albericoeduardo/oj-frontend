import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PersonCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
  lattesUrl: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ image, name, role, description, lattesUrl }) => {
  return (
    <div className='flex flex-col'>
      <Image 
        src={image} 
        alt={'image of ' + name}
        width={200}
        height={200}
      />
      <Link href={lattesUrl}>{name}</Link>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  );
};

export default PersonCard;
