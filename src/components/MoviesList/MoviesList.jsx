import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function MoviesList({dataList}) {
    
    console.log(dataList)

    const responsive = {
            superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
            },
            mobile: {
            breakpoint: { max: 464, min: 375 },
            items: 2
            },
            mini: {
                breakpoint: {max: 375, min: 0},
                items: 1.50
            }
        };

    return (
        <React.Fragment>
            <div className="text-light">
                
                <h3 className="text-left my-3 mx-3">{dataList.title}</h3>
                <Carousel 
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={10000}
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType= {["mobile", "mini"]}
                    keyBoardControl={true}>

                    {dataList && dataList.data.map(movie =>{
                        return(
                            <MovieCard movie={movie} key={movie.id} />
                        ) 
                    })}
                </Carousel>
            </div>
        </React.Fragment>
    )
}
