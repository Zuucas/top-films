import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { BsGraphUp, BsWallet2, BsHourglassSplit } from "react-icons/bs";
import { MovieCard } from "../MovieCard/MovieCard";
import axios from "axios";
import { Center, } from "@chakra-ui/react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {

        axios.get(`${moviesURL}${id}?${apiKey}`)
        .then((response) => {
            setMovie(response.data);
        })
    }

    useEffect(() => {
        getMovie();
        // console.log(movie.title);
        
    },[])


    return (
        <div>
            {movie && (
                <Center
                >
                    <MovieCard 
                    movie={movie}
                    showLink={false}
                    showStatus={true}
                    />           
          
                </Center>
            )}          
        




        </div>
    )
}