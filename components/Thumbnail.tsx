
import { Movie } from "@/typings"
import Image from "next/image"

interface Props{
    movie:Movie//|DocumentData,
}

function Thumbnail({movie}:Props) {
  return (
    <div className="relative h-28 min-w-[180px] md:min-w-[260px] transition duration-200 ease-out md:hover:scale-105 md:h-36">
        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path||movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        fill alt=""
        />
    </div>
  )
}

export default Thumbnail