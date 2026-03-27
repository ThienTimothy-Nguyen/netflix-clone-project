import { useInfiniteQuery } from '@tanstack/react-query';
import type { TMDBResponse } from '@/types';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US';

async function fetchMoviesPage(page: number, token: string): Promise<TMDBResponse> {
    const url = `${API_URL}&page=${page}`
    const res = await fetch(url, {
    
        headers: { 
            'Authorization': `Bearer ${token}` , 
            'accept': 'application/json' 
        },
    })
    if(!res.ok) throw new Error('Falied to fetch movies')
    return (await res.json()) as TMDBResponse
}

export function useInfiniteMovies() {
    const token = import.meta.env.VITE_TMDB_AUTH_TOKEN

    return useInfiniteQuery({
        queryKey: ['infinite-movies'],
        queryFn: async({ pageParam = 1}): Promise<TMDBResponse> => 
            {
                if (!token) return { page: 1, results: [], total_pages: 0, total_results: 0 }
                return fetchMoviesPage(pageParam, token)
            },
        getNextPageParam: (lastPage: TMDBResponse) => {
            if (!lastPage) return undefined
            const next = lastPage.page + 1
            return next <= lastPage.total_pages ? next : undefined 
        },
        initialPageParam: 1
    })
}

console.log(useInfiniteMovies)
console.log(useInfiniteMovies)