import Hero from './components/Hero'; 
import TrendingNow from './components/TrendingNow'; 
import { usePopularMovies } from './lib/usePopularMovies'; 

function App() { 
  
  const { movies, error, loading } = usePopularMovies(); 
  if (loading) return <div className='flex justify-center items center'>...loading</div> 
  if (error) return <div>Error: {error}</div> 
  if (!movies) return <div>No movies found.</div> 
  return ( 
    <main> 
      <div className='min-h-screen bg-background text-foreground transition-colors duration-300'> 
        <> 
          <Hero /> 
          <TrendingNow /> 
        </> 
      </div> 
    </main> ) } 
export default App