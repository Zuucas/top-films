import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit } from "react-icons/bs";
import { MovieCard } from "../MovieCard/MovieCard";
import axios from "axios";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    // const getMovie = async (url) => {

    //     axios.get(`${moviesURL}top_rated?${apiKey}`)
    //     .then((response) => {

    //         setMovie(response.data);
    //     })
    // }

    useEffect(() => {
        const movieURL = `${moviesURL}${id}?${apiKey}`;
        // getMovie(movieURL);
        console.log(id);
        
    },[])


    return (
        <div>
            {movie && (
                <>
                {movie.title}
                </>
            )}
        </div>
    )
}