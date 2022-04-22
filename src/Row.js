import React,{ useState,useEffect }  from 'react';
import axios  from './axios';
import "./Row.css";

const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {

     const [movies,setMovies]= useState([]);  //empty array of movies

     // A snippet of code which runs based on specific conditional/variable
    useEffect(()=>{
      // if [],run once when the row loads and don't run it again
      async function fetchData()
       {
           const request = await axios.get(fetchUrl); 
           console.log(request.data.results);
           setMovies(request.data.results);
           return request;
        } 

      fetchData();
    
    },[fetchUrl]);

//  console.log(movies);
  
     return (
    <div className="row">
         {/*title*/} 
         <h2>{title}</h2>
        <div className="row__posters">
            {/*poters*/}
            {movies.map(movie =>{
               return <img 
               key={movie.id}
               className={`row__poster ${isLargeRow && "row__posterLarge"}`}
               src={`${base_url}${isLargeRow?movie.poster_path: movie.backdrop_path}`} 
               alt={movie.name}/> 
            })}
        </div>
    </div>
  )
}

export default Row;