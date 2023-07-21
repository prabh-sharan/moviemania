import React from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import { MOVIE_API_KEY } from "./api";
import searchIcon from "./search.svg"

console.log(MOVIE_API_KEY)
const API_URL=`http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&`


const App= ()=>{

    const [movies, setMovies]=React.useState([])
    const [searchTerm, setSearchTerm]=React.useState("")

    const searchMovie= async (title)=>{
        const response= await fetch(` ${API_URL}&s=${title}`)
        const data= await response.json()

        setMovies(data.Search)
    }

    // React.useEffect( ()=>{
    //     searchMovie("Godfather")

    // }, [])

    return(
        <div className="app">
            <h1>Movie Mania</h1>
            <div className="search">
                <input
                  placeholder="Search movie here"  
                  value={searchTerm}
                  onChange={(event)=> setSearchTerm(event.target.value)}
                />

                <img
                  src={searchIcon}
                  alt="Search Icon"
                  onClick={ ()=> searchMovie(searchTerm)}

                />    
            </div> 
            {
                movies?.length>0
                ?(

                    <div className="container">
                      {  movies.map((movie)=>(
                           <MovieCard movie={movie} /> 
                        
                      ))}
                    </div>   
                )
                :(
                    <div className="empty">
                        <h2>No movie found.</h2>
                    </div>
                ) 
            }
        </div>
    )
}

export default App;