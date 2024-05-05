import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../MovieCard/MovieCard";
import { Center, Flex } from "@chakra-ui/react";
import axios from "axios";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export const Search = () => {

    const [searchParams] = useSearchParams();

    const [topMovies, setTopMovies] = useState([]);

    const query = searchParams.get('q');

    const getSearchedMovies = async () => {
        
        axios.get(`${searchURL}?${apiKey}&query=${query}`)
        .then((response) => {
            console.log(response.data.results);

            setTopMovies(response.data.results);
        })
    }
        useEffect(() => {
            const searchWithQueryURL = getSearchedMovies;
    
           
            getSearchedMovies(searchWithQueryURL)
        }, [query]);
        
    return (
        <>
            <Center 
            fontSize='1.5rem'
            color='red.500'>
                <h1>Resultados para: {query}</h1>
            </Center>

            <Flex 
            as='section'
            mt='50px'
            mx='30px'
            border='5px solid green'
            flexWrap='wrap'
            justify='space-around'
            >
                {topMovies.length === 0 && 
                <p>
                    Carregando...
                </p>
                }

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