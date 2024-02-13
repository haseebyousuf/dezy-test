'use client';
import Card from '@/components/Card';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState<any>();
  useEffect(() => {
    const debounceFn = setTimeout(() => {
      if (inputValue) {
        const searchApi = async () => {
          try {
            const res = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${inputValue}`
            );
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            const resData = await res.json();
            console.log(resData);
            setData({ ...resData });
          } catch (error) {
            toast.error('No card found');
          }
        };
        searchApi();
      }
    }, 500);
    return () => clearTimeout(debounceFn);
  }, [inputValue]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <input
        className='text-black px-4 py-2 rounded-md bg-gray-200'
        type='text'
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value.toLowerCase());
        }}
        placeholder='Card Name'
      />

      {data && (
        <Card
          name={data.name}
          height={data.height}
          baseExperience={data.base_experience}
          img={data.sprites.back_default}
        />
      )}
    </main>
  );
}
