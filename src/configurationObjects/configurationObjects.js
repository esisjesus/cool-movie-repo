// In this file are stored the config objects that are going to be used as parameters to fetch and retrieve information to components. This is made for organization and readability.

export const configMovies = [
    //Necesary data for fetch and render;
    {
        query: 'popular',
        title:'Popular',
        sort: "movie"
    },
    {
        query: 'top_rated',
        title:'Top Rated',
        sort: "movie"
    },
    {
        query: 'now_playing',
        title:'Now in theaters',
        sort: "movie"
    },
    {
        query: 'upcoming',
        title:'Upcoming',
        sort: "movie"
    }

]