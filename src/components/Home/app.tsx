import { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import { Center, Grid } from "@chakra-ui/react";
import { MovieCard } from "../MovieCard/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



export const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    
    const getTopRatedMovies = useCallback(async () => {
        
        axios.get(`${moviesURL}top_rated?${apiKey}`)
        .then((response) => {

            setTopMovies(response.data.results);
        })

    },[])
    
    
        useEffect(() => {         
            getTopRatedMovies()
        }, [getTopRatedMovies]);



    return (
        <>
            <Center 
            color='red.500'
            mb='20px'>
                <h1>Filmes mais bem avaliados</h1>
            </Center>

            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}}
             gap={5}
            mx='80px'
            >
                {topMovies.length === 0 && 
                <p>Carregando...</p>}
                
                {topMovies.length > 0 && topMovies
                .map((movie: any) => 
                    (<MovieCard 
                    showLink={true}
                    showStatus={false}
                    movie={movie}
                    key={movie.id}
                    />) )}
            </Grid>
        </>
    )
}