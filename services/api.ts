export const TMDB_config ={
    BASE_URL: "https://api.themoviedb.org/3/",
    API_KEY:process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    header:{
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({query}:{query:string}) => {
    const endpont = query ? `${TMDB_config.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:
        `${TMDB_config.BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`

    const respons = await fetch(endpont,{
        method: "GET",
        headers:TMDB_config.header
    })

    if(!respons.ok){
        throw new Error
    }
    const data = await respons.json()
    return data.results
}



