import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {apikey} from "../privete";
import ActorsPage from "./ActorsPage";

const MovieDe = () => {
    const [movie, setMovie] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`)
            .then(({data}) => setMovie(data))
    }, [])
    console.log(movie)
    const  {
        poster_path,
        backdrop_path,
        title,
        status,
        overview,
        runtime
    } = movie
    const time = Math.floor(runtime / 60) + 'h' + ' ' + runtime % 60 + ' min'
    return (
        <div className='container p-6'
        style={{
            background:  `linear-gradient(to right, rgba(211, 211, 211, 0.38) 150px, rgba(211, 211, 211, 0.38) 100%), url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}')`,
            height: '100vh'
        }}>
            <div className=" flex flex-row flex-wrap px-6">
                <div className='basis-1/2 hover:scale-105 hover:transition'>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt=""/>
                </div>
                <div className='basis-1/2  text-gray-500   hover:text-white hover:transition hover:scale-110'>
                    <h1 className='text-4xl'>{title}</h1>
                    <h3 className='text-2xl text-left my-5'>{overview}</h3>
                    <h1 className='text-xl '>Time:{time}</h1>
                </div>
            </div>
            <ActorsPage/>
        </div>
    );
};

export default MovieDe;