import React, {useEffect, useState} from 'react';
import axios from "axios";
import {apikey} from "../privete";
import {useParams} from "react-router-dom";
import Slider from "react-slick";
import ActorsBio from "./ActorsBio";
import ActorCard from "../components/ActorCard";

const ActorsPage = () => {
    const [actors, setActors] =useState(null)
    const {id: movieId} = useParams()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apikey}&language=en-US`)
            .then(({data}) => setActors(data.cast))
    }, [])
    console.log(actors)

    const settings = {
        className: "center",
        // centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 7,
        speed: 800,
        autoplay: true
    };

    return (
        <div className='p-5 container' >


            <Slider {...settings}>

                {
                    actors?.map(el => (
                        <ActorCard el={el}/>
                        // <div>
                        //     <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/>
                        //      <h1 className='text-2xl'>{el.name}</h1>
                        //
                        // </div>

                    ))
                }
            </Slider>
            <ActorsBio/>
        </div>
    );
};

export default ActorsPage;