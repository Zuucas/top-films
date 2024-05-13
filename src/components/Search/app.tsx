import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../MovieCard/MovieCard";
import { Center, Grid } from "@chakra-ui/react";
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
            setTopMovies(response.data.results);
        })
    }
        useEffect(() => { 
            getSearchedMovies()
            
        }, [query]);
        
    return (
        <>
            <Center 
            color='red.500'
            mb='20px'>
                <h1>Resultados para: {query}</h1>
            </Center>

            <Grid templateColumns='repeat(3, 1fr)' gap={5}
            mx='80px'>
                {topMovies.length === 0 && 
                <p>
                    Carregando...
                </p>
                }

                {topMovies.length > 0 && topMovies
                .map((movie: any) => 
                <MovieCard
                showStatus={false}
                showLink={true}
                key={movie.id}
                movie={movie} 
                /> )}
            </Grid> 
        </>
    )
}