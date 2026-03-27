import { create } from 'zustand'; 
import type { Movie } from '@/types'; 
import performSearch from '../lib/performSearch';

type SearchState = { 
    query: string 
    results: Movie[] 
    baseMovies: Movie[]
    setQuery: (q: string) => void 
    setBaseMovies: (movie: Movie[]) => void
    setResults: (r: Movie[]) => void 
    performSearch: (q: string) => void } 
export const useSearchStore = 
create<SearchState>((set, get) => ({ 
    query: '', 
    results: [] as Movie[],
    baseMovies: [] as Movie[],
    setBaseMovies: (movies) => set({ baseMovies: movies }), 
    setQuery: (q: string) => set({ query: q }), 
    setResults: (r: Movie[]) => set({ results: r }), 
    performSearch: (q: string) => { 
        const { data } = performSearch(
            q,
            get().baseMovies
        );
        
        set({ 
            query: q, 
            results : data})},
}))
export default useSearchStore