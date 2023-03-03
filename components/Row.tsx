
import { Movie } from "@/typings"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { useRef, useState } from "react"
import Thumbnail from "./Thumbnail"
interface Props{
    movies:Movie[]//|DocumentData[],
    title:string
}

function Row({title,movies}:Props) {

    const rowRef=useRef<HTMLDivElement>(null)
    const [isMoved,setIsMoved]=useState(false)

    const handleClick=(direction:string)=>{
        setIsMoved(true);
        if(rowRef.current){
            const {scrollLeft,clientWidth}=rowRef.current
            const scrollTo=direction=='left'?scrollLeft-clientWidth:scrollLeft+clientWidth
        
            rowRef.current.scrollTo({left:scrollTo,behavior:"smooth"})
        }
    }

  return (
    <div className="space-y-0.5 md:space-y-3 h-16 md:h-36">
     <h2 className=" w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
     <div className="relative group md:-ml-2">
        {isMoved &&<ChevronLeftIcon onClick={()=>{handleClick("left")}} className="top-0 bottom-0 absolute left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100"/>}
        <div ref={rowRef} className="flex items-center space-x-1 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide">
            {movies.map((movie)=>{return(
                <Thumbnail key={movie.id} movie={movie} />
            )})}            
        </div>
        <ChevronRightIcon onClick={()=>{handleClick("right")}} className="top-0 bottom-0 absolute right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100"/>
    </div>   
    </div>
  )
}

export default Row