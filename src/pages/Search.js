import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {apikey} from "../privete";
//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=
const Search = () => {
    const {movieName} = useParams()
    const [result, setResult] = useState([])

    useEffect(() => {
       axios(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${movieName}`)
           .then(({data}) => setResult(data))
    }, [movieName])
    console.log(result)
    return (
        <div>
            
        </div>
    );
};

export default Search;