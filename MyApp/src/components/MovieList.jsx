import { MovieCard } from "./MovieCard"

export function MovieList({movieList}) {
    return (
        movieList.map((movie) => {
            return <MovieCard key = {movie.id}  movie={movie} />
        })
    ) 
}