import Image from 'next/image';
import React from 'react';

const Card = ({ name, height, baseExperience, img }: any) => {
  return (
    <div className='flex flex-col border-black border-2 rounded-md px-4 pb-4 bg-gray-200'>
      <Image
        className='object-contain'
        src={img}
        alt='front_default'
        width={250}
        height={250}
      />
      <h3 className='text-2xl font-bold'>{name}</h3>
      <p>Height: {height}</p>
      <p>Base Experience: {baseExperience}</p>
    </div>
  );
};

export default Card;
