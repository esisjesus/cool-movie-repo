import React, {useState, useEffect} from 'react'
import MoviesList from '../../components/MoviesList/MoviesList'

export default function MovieListContainer() {
    
    const apikey = 'b2bba76d4e0303cf985ab505e0fc2ad8'
    const mainFilterQueries = ['popular']
    const [moviesLists, setMoviesLists] = useState([])
    
    
    useEffect(()=>{
        createLists(mainFilterQueries, 'movie', setMoviesLists, moviesLists)
        //createMovieList();

        console.log(moviesLists)
    }, [])

    
    async function fetchData(query, sort, setMethod, state){

        let listsCreated = []

        try {
            const response = await fetch(`https://api.themoviedb.org/3/${sort}/${query}?api_key=${apikey}`)
            const data = await response.json();
            let dataObject = {key:`${sort}-${query}`, data:data.results}
            listsCreated.push(dataObject);
            setMethod([...state, dataObject])
        } catch (error) {
            console.error(error)
        }
    }
    function createLists(arr, sort, target, state){
        arr.forEach(query =>{
            fetchData(query, sort, target, state)
        })
    }
    


    

    


    return (
        <div>
            <MoviesList dataList={moviesLists[0]}/>
        </div>
    )
}
