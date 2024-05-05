import { useState, useEffect } from "react";
import axios from 'axios';
import { Center, Flex } from "@chakra-ui/react";
import { MovieCard } from "../MovieCard/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



export const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    
    const getTopRatedMovies = async () => {
        
        axios.get(`${moviesURL}top_rated?${apiKey}`)
        .then((response) => {
            console.log(response.data.results);

            setTopMovies(response.data.results);
        })

    }
    
    
        useEffect(() => {
            const TopRatedUrl = getTopRatedMovies;
    
            // console.log(TopRatedUrl);
            getTopRatedMovies(TopRatedUrl)
        }, []);



    return (
        <>
            <Center 
            fontSize='1.5rem'
            color='red.500'>
                <h1>Melhores Filmes:</h1>
            </Center>

            <Flex 
            as='section'
            mt='50px'
            mx='30px'
            border='5px solid green'
            flexWrap='wrap'
            justify='space-around'
            >
                {topMovies.length === 0 && <p>Carregando...</p>}

                {topMovies.length > 0 && topMovies
                .map((movie: any) => 
                <MovieCard 
                key={movie.id}
                movie={movie} 
                /> )}
            </Flex>
        </>
    )
}