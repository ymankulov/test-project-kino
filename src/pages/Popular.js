import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {apikey} from "../privete";
import FilmCard from "../components/FilmCard";
import Loader from "../components/Loader/Loader";
import SecondLoader from "../components/Loader/SecondLoader";

const Popular = () => {

    const [popularMovie, setPopularMovie] = useState([])
    const [currentPage, setCurrentPage] = useState(1)


    const pages = []
    for(let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    function displayFilms(el){
        setCurrentPage(el)
    }
    useEffect(() => {
axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=ru-RU&page=${currentPage}`)
    .then(({data}) => {
        console.log(data)
        setPopularMovie(data.results)
    })
        window.scroll(0,0)
    }, [currentPage])

    console.log(popularMovie)
    return (
        <div className="container p-5 bg-blue-300">
            <h1 className='text-5xl text-center text-blue-900 mb-5 hover:scale-110 hover:transition hover:text-gray-50'>Popular Movies:</h1>
            {
                popularMovie.length === 0 ? <SecondLoader/> : <div className=" flex flex-row flex-wrap ">

                    {
                        popularMovie.map(el => (
                            <FilmCard el={el} key={el.id}/>
                        ))
                    }
                    <div className='pt-6 m-auto'>
                        {
                            pages.map(el => (
                                <button  key={el} type="button"
                                         onClick={() => displayFilms(el)}
                                         className={`mx-2 text-white  ${el === currentPage?' bg-black bg-gradient-to-g from-green-300 via-green-400 to-green-500':
                                             'bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500'
                                         } hover:scale-105 hover:transition hover:bg-gradient-to-g focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-red-800 shadow-lg shadow-black dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>

                                    {el}</button>
                            ))
                        }
                    </div>
                </div>

            }
        </div>
    );
};

export default Popular;