import { useState, useEffect } from 'react'; 
import useSearchStore from '../store/searchStore'; 
// https://api.themoviedb.org/3/genre/movie/popular?language=en-US
// https:API.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc
const API_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US'; 
import type { Movie } from '@/types'; 

const TMDB_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN

export function usePopularMovies() { 
    const [movies, setMovies] = useState<Movie[] | null>(null); 
    const [error, setError] = useState<string | null>(null); 
    const [loading, setLoading] = useState<boolean>(true); 
    const setResults = useSearchStore(state => state.setResults) 
    const setBaseMovies = useSearchStore(state => state.setBaseMovies) 

    useEffect(() => { const fetchTrendingMovies = async () => { 
        try { 
            setLoading(true) 

            const response = await fetch( 
                API_URL, 
                    { 
                        headers: { 
                        'Authorization': `Bearer ${TMDB_TOKEN}` , 
                        'accept': 'application/json' } 
                    } 
                ) 
                const data = await response.json() 

                setMovies(data.results) 
                setBaseMovies(data.results)
                setError('') 
                setResults(data.results) } 
        catch(error) { 
            console.error(error) 
            setError('Fail to fetch trending movies!')  } 
        finally {
            setLoading(false)
        }} 
            fetchTrendingMovies() }, []); 
        return { movies, error, loading}
        } 