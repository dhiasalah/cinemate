import { Route,Routes } from "react-router-dom";

import { MovieList,MovieDetail,Search,PageNotFound } from "../pages";
import React from 'react'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800" >
        <Routes>
            <Route path="/" element={<MovieList title="Home" apiPath="movie/now_playing"/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}/>
            <Route path="movies/popular" element={<MovieList title="Popular" apiPath="movie/popular"/>}/>
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>}/>
            <Route path="search" element={<Search title="playing now" apiPath="search/movie"/>}/>
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="playing now"/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}
