// This function receives an array of queries (configObject with the keys required), the sortBy query ("movies" or "people" for example) and the setState method where the results of the fetch to the movies API are going to be stored.
//This function always saves it data as an array of objects in a state.

export default function createNewLists(arr, setMethod, apikey){
    
    function createLists(arr, target){
        arr.forEach(configObject =>{
            fetchData(configObject.query, configObject.sort, configObject.title, target)
        })
    }
    async function fetchData(query, sort, title, setMethod){

        let listsCreated = []

        try {
            const response = await fetch(`https://api.themoviedb.org/3/${sort}/${query}?api_key=${apikey}`)
            const data = await response.json();
            let dataObject = {key:`${sort}-${query}`, data:data.results, title:`${title}`}
            listsCreated.push(dataObject);
            setMethod(prevState =>([...prevState, dataObject]))
            

        } catch (error) {
            console.error(error)
        }
    }
    createLists(arr, setMethod, apikey)
}