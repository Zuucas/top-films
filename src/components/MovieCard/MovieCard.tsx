import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa'
import { Box, Flex, Image, Link as ChakraLink, GridItem } from "@chakra-ui/react";

const imageUrl = import.meta.env.VITE_IMG;


type Movie = {    
    poster_path: string
    title: string
    vote_average: number
    id: number
}


type Props = {
    movie:Movie
}

export const MovieCard = ({movie:{ poster_path, title, vote_average, id }}:Props) => {
    
    
    return(
        <GridItem>
                <Flex direction='column'
                align='center'
                bg='#333333'
                p='20px'
                maxW='490px'
                maxH='900px'
                minH='851px'
                borderRadius='15px'
                >
                    <Image
                        maxW='450px'
                        src={imageUrl + poster_path}
                        alt={title}                               
                    />
                
                    <h2>{title}</h2>

                    <Flex
                    align='center' 
                    gap='1px'>
                        <FaStar style={{color: 'yellow', width:'40px',}}/>                    
                            <p>{vote_average}</p>                        
                    </Flex>

                    <Flex
                        justifyContent='center'
                        alignItems='center'
                        bg='#f4d03f '
                        borderRadius='20px'
                        w='400px'
                        h='70px'
                        fontSize='2rem'
                        textAlign='center'
                        _hover={{
                            bg:'none', color:'#f4d03f', border:'3px solid #f4d03f'}}
                        >                         
                        <Link
                        style={{width:'100%'}}
                        to={`/movie/${id}`}>
                            <ChakraLink
                            _hover={{textDecor:'none'}}                    
                            > 
                                Detalhes
                            </ChakraLink>
                        </Link> 
                        

                    </Flex>

                </Flex>
        </GridItem>
    )
}