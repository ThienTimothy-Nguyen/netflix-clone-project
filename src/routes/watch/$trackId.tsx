import { createFileRoute } from '@tanstack/react-router';
import { useInfiniteMovies } from '@/lib/useInfiniteMovies';
import { Card } from '@/components/ui/card';
import { genre_list } from '@/components/genre_list';
import { useState } from 'react';
import Video from '@/components/Video';
const TMDB_IMAGES_ASSET_URL = "https://image.tmdb.org/t/p/w500"

export const Route = createFileRoute('/watch/$trackId')({
  component: RouteComponent
})

function RouteComponent() {
  const { trackId } = Route.useParams()
  const decoded_params  = decodeURIComponent(trackId)

  const { data, isLoading, isError, error } = useInfiniteMovies();
  const movies = data?.pages.flatMap(page => page.results) ?? [];

  const movie = movies.find((movie) => movie.title === decoded_params)
  console.log(movie)

  const genre_ids = movie?.genre_ids ?? []
  const genreName = genre_list
    .filter(genre => genre_ids.includes(genre.id))
    .map(genre => genre.name)
    .join(", ")
  
  const [showVideo, setShowVideo] = useState(false)

  if (isLoading) return <div className='flex justify-center items-center'>...Loading</div>
  if (isError) return <div>{error.message}</div>

  return (
    <div className='row mt-[48px] flex justify-center' >
      <div className=' flex gap-[48px] flex-col'>
        <div className=' flex gap-6 sm:gap-8 md:gap-14'>
          <button onClick={() => setShowVideo(!showVideo)}>
            <Card className='min-w-[180px] max-w-[200px] sm:max-w-[296px] md:max-w-[336px] overflow-hidden relative cursor-pointer p-0 rounded-lg'>
                <img className='hover:opacity-[0.8] transition-all ease-in-out duration-250 w-full h-full' src={movie?.poster_path? TMDB_IMAGES_ASSET_URL + movie?.poster_path : '/placeholder.svg'} alt="" />
            </Card>
          </button>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl'>
              {movie?.title}
            </h1>
            <h1 className='text-sm sm:text-lg md:text-xl'>
              Genres: {genreName}
            </h1>
            <h1 className='text-sm sm:text-lg md:text-xl'>
              Release date: {movie?.release_date}
            </h1>
            <h1 className='text-sm sm:text-lg md:text-xl'>
              Rating: {movie?.vote_average?.toFixed(1)}
            </h1>
            <button onClick={() => setShowVideo(!showVideo)} className='min-h-[32px] max-w-[400px] bg-white text-black border rounded-lg'>
              Watch now
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className=' text-2xl md:text-3xl'>Description</h1>
          <p className=' text-md md:text-xl max-w-[800px]'>
            {movie?.overview}
          </p>
        </div>

        {showVideo &&
          <Video showVideo={showVideo} setShowVideo={setShowVideo} />
        }
      </div>
    </div>)
}
