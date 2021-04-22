import React, {useState, useEffect} from 'react'


export default function MoviesList({dataList}) {
    
    


    return (
        <React.Fragment>
            <div className="text-light">
                <ul>
                    {dataList && dataList.data.map(movie =>{
                    return(
                        <li key={movie.id}>
                            {movie.title}
                        </li>
                        ) 
                })}
                </ul>
            </div>
        </React.Fragment>
    )
}
