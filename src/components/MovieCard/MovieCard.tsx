import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa'
import {Flex, Image, GridItem,Text } from "@chakra-ui/react";

const imageUrl = import.meta.env.VITE_IMG;


 type Movie = {    
    poster_path: string
    title: string
    vote_average: number
    id: number
    budget:number//acresncentar
    runtime:number//acrescentar
    overview:string //sinopse
    release_date:string//data de lançamento
    genres:[{id:number,name:string}]//generos
}
//tanto  o budget quanto o runtime e mais elementos, irão ser passados já aqui,
//e ficarão em espera até quando forem setados para verdadeiro atraves do showStatus
//para poderem ser exibidos no componente Movie

 export type Props = {
    movie:Movie
    showLink:boolean
    showStatus:boolean
}

export const MovieCard = ({showLink = true, showStatus = false,
                        movie:{ poster_path, title, vote_average, 
                        id,budget,runtime,overview,release_date,genres }}:Props) => {
    
    
    return(
        <GridItem 
        w='100%'
        display={'flex'}
        justifyContent='center'
        >
                <Flex direction='column'
                position='relative'
                align='center'
                bg={showLink ? '#333333' : 'none'}
                p='20px'
                maxW='490px'
                maxH={showStatus ? '100%' : '900px'}
                minH='851px'
                borderRadius='15px'
                >
                    <Image
                        minH='675px'
                        maxW='450px'
                        src={poster_path ? imageUrl + poster_path : 'https://ih1.redbubble.net/image.1893341687.8294/fposter,small,wall_texture,product,750x1000.jpg'} 
                        alt={title}                               
                    />
                
                    <h2>{title}</h2>

                    <Flex
                    align='center' 
                    gap='1px'>
                        <FaStar style={{color: 'yellow', width:'40px',}}/>                    
                            <p>{vote_average}</p>                        
                    </Flex>
                    {showLink &&  
                    <Flex
                        justifyContent='center'
                        position='absolute'
                        bottom='4'
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
                            
                                Detalhes
                            
                        </Link>
                                               

                    </Flex>
                    }
                    {showStatus &&
                    <Flex
                    direction='column'
                    gap={7}>
                        <Text
                        > Orçamento: R$:{budget}
                        </Text>
                        <Text>Gêneros: {genres.map(genre => genre.name).join(', ')}</Text>
                        <Text> Sinopse: {overview}
                        </Text>
                        <Text> Duração: {runtime} minutos
                        </Text>
                        <Text>
                            Lancamento: {release_date}
                        </Text>
                        
                </Flex>}


                </Flex>
        </GridItem>
    )
}