import MovieList from "./MovieList";

const TrendingNow = (  ) => {
  return (
  <div className="row mt-6">
      <h1 className="font-bold text-lg">Trending Now</h1>

      <div>
          <MovieList /> 
      </div>
  </div>
  )
}

export default TrendingNow