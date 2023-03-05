import React from 'react'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import { Movie } from '@/typings'
import { baseUrl } from '@/constants/movie'
import{FaPlay} from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import {useRecoilState} from 'recoil'
import { movieState } from '@/atoms/modalAtom'
import { modalState } from '@/atoms/modalAtom'

interface Props{
    netflixOriginals:Movie[]
}

export default function Banner({netflixOriginals}:Props) {
  const [movie,setMovie]=useState<Movie|null>(null)
  const [showModal,setShowModal]=useRecoilState(modalState)
  const [currentMovie,setCurrentMovie]=useRecoilState(movieState)
  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random()*netflixOriginals.length)])
  }, [netflixOriginals])
  
    return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] lg:justify-end lg:pb-12'>
        <div className='absolute -z-10 top-0 left-0 h-[95vh] w-screen '>
            <Image alt='' fill priority className='object-cover' src={`https://image.tmdb.org/t/p/original${movie?.poster_path||movie?.backdrop_path}`}></Image> 
            
        </div>
        <h1 className='text-2xl md:mt-auto md:text-4xl font-bold lg:text-7xl'>{movie?.title||movie?.original_name|| movie?.name}</h1>
        <p className=' text-shadow-md text-xs md:text-lg lg:text-2xl max-w-xs md:max-w-lg lg:max-w-2xl'>{movie?.overview}</p>
        <div className='flex space-x-3'>
            <button className='bannerBtn bg-white text-black'><FaPlay className='h-4 w-4 md:h-7 md:w-7' /> Play</button><button onClick={()=>{
              setShowModal(true)
              setCurrentMovie(movie)}} className='bannerBtn bg-[gray]/70'><InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/> More Info</button>
        </div>
    </div>
  )
}
