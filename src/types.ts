export type Movie = {
    id: number;
    title?: string ;
    poster_path?: string | null;
    overview: string;
    genre_ids: number[];
    release_date: string;
    vote_average: number
};

export type MovieListProps = {
    movies: Movie[];
};

export type MovieListTest = {
    id: number;
    title?: string;
    poster_path?: string | null;
    movies?: Movie[];
}[]

export type MovieSingle = {
    movie: Movie;
}

export type TMDBResponse = {
    results: Movie[];
    page: number;
    total_pages: number;
    total_results: number;
}

export type ShowVideo = {
    showVideo: boolean;
    setShowVideo: React.Dispatch<React.SetStateAction<boolean>>
}
