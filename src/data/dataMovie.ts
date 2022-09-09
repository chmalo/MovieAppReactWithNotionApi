export interface ArrayData {
    id: string,
    name: string,
    color: string
}

export interface Movie {
    id: string,
    generoMovie: ArrayData[],
    anioMovie: number,
    puntuacionMovie: number,
    idiomaMovie: ArrayData[],
    duracionMovie: number,
    descripcionMovie: string,
    tituloMovie: string
}

export const dataMovie: Movie= {
    id: '',
    generoMovie: [],
    anioMovie: 0,
    puntuacionMovie: 0,
    idiomaMovie: [],
    duracionMovie: 0,
    descripcionMovie: '',
    tituloMovie: ''
}