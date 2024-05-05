import { Flex, Link as ChakraLink, Button, FormControl, Input, Box } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie } from 'react-icons/bi'
import { SearchIcon } from "@chakra-ui/icons"
import { useState } from "react"

export const NavBar = () => {

    const [search, setSearch] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(search);
        
        if(!search) return;

        navigate(`/search?q=${search}`);
        setSearch('');
        
    }
    return(
    <>
        <Flex as='nav'
        p='1rem 2rem'
        fontSize='1.5rem'
        justifyContent='space-between'
        align='center'
        border='1px solid green'
        bg='#191919'
        >

            <Flex ml='50px'
             color='red.300'
             fontWeight='bold'
             align='center'
             gap='8px'
             transition='.2s'
             _hover={{color: 'red.500'}}
             >

                <BiCameraMovie cursor={'pointer'} />
                <Link to="/">
                    <ChakraLink 
                    _hover={{textDecor:'none'}}>
                        TopFilms
                    </ChakraLink>
                </Link> 
            </Flex>

            <Box mr='50px'>
                <FormControl>
                    <form style={{display: 'flex', gap: '15px'}}
                    onSubmit={handleSubmit}>                
                        <Input 
                        w='300px'
                        color='#fff'
                        placeholder="Busque um filme"
                        _placeholder={{ color: 'red.500'}}
                        variant='flushed'
                        focusBorderColor="red.400"
                        borderColor='red.500'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        />
                        <Button type="submit">
                            <SearchIcon color='red.500' />
                        </Button>
                    </form>
                </FormControl>
            </Box>

        </Flex>
    </>)

}

