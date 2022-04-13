import React from 'react';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import app from './App.css'
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import Latest from "./pages/Latest";
import Section from "./components/Section";
import MovieDe from './pages/MovieDe'
import ActorsBio from "./pages/ActorsBio";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Section/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/top-rated" element={<TopRated/>}/>
                <Route path="/now-playing" element={<NowPlaying/>}/>
                <Route path="/upcoming" element={<Upcoming/>}/>
                <Route path="/latest" element={<Latest/>}/>
                <Route path="/movie/:id" element={<MovieDe/>}/>
                <Route path="/actors/:actorId" element={<ActorsBio/>}/>
                <Route path="/movies/search-results/:movieName" element={<ActorsBio/>}/>
            </Routes>
        </div>
    );
};

export default App;