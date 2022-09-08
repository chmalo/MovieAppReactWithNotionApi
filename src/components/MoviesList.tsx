import {MovieCard} from "./MovieCard";

const movies = [
    {
        id: '1',
        generoMovie: '',
        anioMovie: '',
        puntuacionMovie: '',
        idiomaMovie: '',
        duracionMovie: '',
        tituloMovie: 'Dragon Ball Super: Super Hero'
    },
    {
        id: '2',
        generoMovie: '',
        anioMovie: '',
        puntuacionMovie: '',
        idiomaMovie: '',
        duracionMovie: '',
        tituloMovie: 'Spider-Man: Un nuevo universo'
    }
]



export const MoviesList = () => {
    return (
        <div>
            <h1>Movies list</h1>

            <div className="row rows-cols-1 rows-cols-md-2 g-3">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                ))
                }
            </div>

        </div>
    );
};