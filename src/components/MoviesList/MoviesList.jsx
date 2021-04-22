import React, {useState, useEffect} from 'react'


export default function MoviesList() {
    
    const sort = 'top_rated'
    const [data, setData] = useState({results: []})
    
    useEffect(()=>{
        fetchMovies()
        
    }, [])

    
    async function fetchMovies(){
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=b2bba76d4e0303cf985ab505e0fc2ad8`)
            const data = await response.json();
            setData(data)
            
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div style={{position: 'relative', top: 200}}>
            <ul>
                {data.results.map(movie =>{
                return(
                    <li>
                        {movie.title}
                    </li>
                    ) 
            })}
            </ul>
        </div>
    )
}
