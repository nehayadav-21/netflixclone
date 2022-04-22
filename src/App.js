// import logo from './logo.svg'; 
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import NavBar from './Navbar';


function App() {
  return (
    <div className="app">
      
       <NavBar/>
       <Banner/>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
    />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries}/>

    </div>
  );
}

export default App;


//API KEYS
//5fb3b47a5f082a0f4efb2debcced97da
//https://api.themoviedb.org/3/movie/550?api_key=5fb3b47a5f082a0f4efb2debcced97da
