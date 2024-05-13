import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa'
import {Flex, Image, GridItem,Text } from "@chakra-ui/react";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineDescription, MdAccessTime,MdInfoOutline  } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";

const imageUrl = import.meta.env.VITE_IMG;


 type Movie = {    
    poster_path: string
    title: string
    vote_average: number
    id: number
    budget:number
    runtime:number
    overview:string 
    release_date:number
    genres:[{id:number,name:string}]
}

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
        display='flex'
        justifyContent='center'
        >
                <Flex direction='column'
                position='relative'
                align='center'
                bg={showLink ? '#333333' : 'none'}
                p='20px'
                borderRadius='15px'
                >
                    <Image
                        src={poster_path ? imageUrl + poster_path : 'https://ih1.redbubble.net/image.1893341687.8294/fposter,small,wall_texture,product,750x1000.jpg'} 
                        alt={title}                               
                    />
                
                    <h2>{title}</h2>

                    <Flex
                    align='center' 
                    gap='1px'
                    mb='50px'>
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
                        w='80%'
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
                    color='yelow'
                    align='start'
                    gap={7}>
                        <Flex gap={1}
                        align={'center'}
                        >
                            <IoWalletOutline style={{color:'yellow', fontSize:'1.7rem'}}/>
                            <Text> Orçamento: {budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                        </Flex>

                        <Flex gap={1}
                        align={'center'}
                        >
                            <MdInfoOutline style={{color:'yellow', fontSize:'1.7rem'}}/>
                            <Text>Gêneros: {genres.map(genre => genre.name).join(', ')}</Text>
                        </Flex>

                        <Flex 
                        gap={1} 
                        align={'start'}
                        maxW='100%'
                        >
                            <MdOutlineDescription style={{color:'yellow',fontSize:'1.7rem'}}/>
                            <Text w='80%' > Sinopse: {overview}</Text>
                        </Flex>

                        <Flex 
                        gap={1} 
                        align={'center'}
                        >
                            <MdAccessTime style={{color:'yellow', fontSize:'1.7rem'}}/>
                            <Text> Duração: {runtime} minutos</Text>
                        </Flex>

                        <Flex 
                        gap={1} 
                        align={'center'}
                        >
                            <IoMdCalendar style={{color:'yellow', fontSize:'1.7rem'}}/>
                            <Text>Lançamento: {new Date(release_date).toLocaleDateString('pt-BR')}  </Text>
                        </Flex>
                </Flex>}


                </Flex>
        </GridItem>
    )
}