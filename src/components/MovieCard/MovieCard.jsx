import React from 'react'

export default function MovieCard({movie}) {
    return (
        <React.Fragment>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title}`}/>
        </React.Fragment>
    )
}
