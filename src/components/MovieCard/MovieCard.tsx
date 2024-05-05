import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa'
import { Box, Flex, Grid, GridItem, Image, Link as ChakraLink } from "@chakra-ui/react";

const imageUrl = import.meta.env.VITE_IMG;


export const MovieCard = ({movie, showLink = true }) => {
    
    return(
        <Flex>
            <Flex
            bg='#333333'
            p='10px'
            mb='50px'
            border='1px solid red'
            maxW='500px'
            >
                <Flex direction='column'
                align='center'>
                <Image
                    maxW='400px'
                    src={imageUrl + movie.poster_path}
                    alt={movie.title}                               
                />
                
                    <h2 style={{color: 'white', fontSize:'1.5rem', width:'100%'}}>{movie.title}</h2>
                    <Flex
                    w='100%'>
                        <Flex 
                        align='center' 
                        gap='1px' 
                        border='1px solid red'
                        color='white'
                        >

                            <FaStar
                            style={{color: 'yellow', width:'40px',}}
                            />                    
                                <p>
                                    {movie.vote_average}
                                </p>


                        </Flex>
                    </Flex>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        bg='#f4d03f '
                        borderRadius='10px'
                        mt='20px'
                        w='100%'
                        h='70px'
                        fontSize='2rem'
                        textAlign='center'
                        _hover={{
                            bg:'none', color:'#f4d03f', border:'3px solid #f4d03f'}}
                        >

                        {showLink ? 
                        <Link
                        style={{width:'100%', border:'1px solid red',}}
                        to={`/movie/${movie.id}`}>
                            <ChakraLink
                            _hover={{textDecor:'none'}}                    
                            > 
                                Detalhes
                            </ChakraLink>
                        </Link> 
                        : null}

                    </Box>

                </Flex>
            </Flex>
        </Flex>
    )
}