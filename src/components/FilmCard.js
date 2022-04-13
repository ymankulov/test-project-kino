import React from 'react';
import {Link} from "react-router-dom";

const FilmCard = ({el}) => {
    return (
        <div   className='basis-1/4 hover:scale-105 hover:transition ' key={el.id} >
            <Link to={`/movie/${el.id}`}>
                    <img style={{
                        borderRadius: "50px"
                    }} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="" className="m-4"/>



            </Link>
            <h4 className='text-xl text-center text-gray-700 hover:scale-105 hover:transition hover:gray-400 hover:text-3xl '>{el.original_title}</h4>
        </div>
    );
};

export default FilmCard;