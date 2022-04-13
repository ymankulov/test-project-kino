import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apikey} from "../privete";

const Latest = () => {
    const [latest, setLatest] = useState(null)
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/latest?api_key=${apikey}&language=en-US`)
            .then(({data}) => setLatest(data))
    }, [])
    console.log(latest)
    return (
        <div className="container p-5 bg-blue-300">
            <h1 className='text-5xl text-center text-blue-900 mb-5 hover:scale-110 hover:transition hover:text-gray-50'>Latest Movies:</h1>
            <div className=" flex flex-row flex-wrap">
                {/*{*/}
                {/*    latest.map(el => (*/}
                {/*        <FilmCard el={el} key={el.name}/>*/}
                {/*    ))*/}
                {/*}*/}
                <div className='basis-1/2'>
                    <h1 className='text-4xl hover:scale-110 hover:transition hover:text-gray-50 text-center'>{latest?.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Latest;