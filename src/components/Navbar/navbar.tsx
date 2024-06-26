import { Flex, Button, FormControl, Input, Box } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie } from 'react-icons/bi'
import { SearchIcon } from "@chakra-ui/icons"
import { useState } from "react"

export const NavBar = () => {

    const [search, setSearch] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('você buscou por: ',search);
        
        if(!search) return;

        navigate(`/search?q=${search}`);
        setSearch('');
        
    }
    return(
        <Flex as='nav'
        p='1rem 1rem'
        fontSize='2rem'
        justifyContent='space-between'
        bg='#191919'
        w='100%'
        direction={{base: 'column', md: 'row'}}
        >

            <Flex
             ml={{base:'0', md:'50px'}}
             mb={{base:'20px', md:'0'}}
             color='red.300'
             fontWeight='bold'
             align='center'
             gap='8px'
             transition='.2s'
             _hover={{color: 'red.500'}}
             justify={{base:'center'}}
             >

                <BiCameraMovie cursor={'pointer'} />
                <Link to="/">
                    
                        TopFilms
                    
                </Link> 
            </Flex>

            <Box 
            mr={{base:'0', md:'50px'}}
            
            >
                <FormControl>
                    <form style={{display: 'flex', gap: '15px'}}
                    onSubmit={handleSubmit}>                
                        <Input 
                        // w='300px'
                        bg='white'
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
)

}

