import React, {useState, useEffect} from 'react'
import createNewLists from '../../functional/createLists'
import {configMovies} from '../../configurationObjects/configurationObjects'
import MoviesList from '../../components/MoviesList/MoviesList'

export default function MovieListContainer() {
    
    
    const apikey = 'b2bba76d4e0303cf985ab505e0fc2ad8'

    //hooks
    const [moviesLists, setMoviesLists] = useState([])
    useEffect(()=>{
        createNewLists(configMovies, setMoviesLists, apikey);
    }, [])

    return (
        <React.Fragment>
            {moviesLists.map(list =>{
            return(
                <div>
                    <MoviesList key={list.key} dataList={list}/>
                </div>
            )  
            })}
        </React.Fragment>
    )
}
