import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import MovieCard from '../components/MovieCard';
import type { Movie } from '@/types';
import { test, expect, vi } from 'vitest';
import React from 'react';

const mockMovie: Movie = {
    id: 1,
    title: 'Inception',
    poster_path: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
    overview: 'Hello this is the movie',
    genre_ids: [18, 38],
    release_date: "2017-10-04",
    vote_average: 7.5,
}

vi.mock('@/components/ui/card', () => ({
    Card: (props: any) => {
        return React.createElement('div', props)
    }
}) )

test('render movie poster and is clickable', () => {
    render(<MovieCard movie={mockMovie}/>)
    const imgElement = screen.getByAltText(/Inception/i)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', expect
        .stringContaining(mockMovie.poster_path!))

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

test('renders placeholder image when poster_path is null', () => {
    const movieWithNoPoster: Movie = { ...mockMovie, poster_path: null}
    render(<MovieCard movie={movieWithNoPoster} />)

    const imgElement = screen.getByAltText(/Inception/i)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', '/placeholder.svg')
})

test('renders placeholder image when poster_path is undefined', () => {
    const movieWithNoPoster: Movie = { ...mockMovie, poster_path: undefined}
    render(<MovieCard movie={movieWithNoPoster} />)

    const imgElement = screen.getByAltText(/Inception/i)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', '/placeholder.svg')
})