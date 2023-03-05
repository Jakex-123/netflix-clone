
import { Movie } from "@/typings"
import Image from "next/image"
import { useRecoilState } from 'recoil'
import { movieState } from '@/atoms/modalAtom'
import { modalState } from '@/atoms/modalAtom'
interface Props {
  movie: Movie//|DocumentData,
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div onClick={() => {
      setShowModal(true)
      setCurrentMovie(movie)
    }} className="relative h-28 min-w-[180px] md:min-w-[260px] transition duration-200 ease-out md:hover:scale-105 md:h-36">
      <Image width={260} height={144} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        alt=""
      />
    </div>
  )
}

export default Thumbnail