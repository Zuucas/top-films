import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import  { Home }  from './components/Home/app.tsx';
import  { Movie } from './components/Movie/app.tsx';
import { Search} from './components/Search/app';
import  App from './app.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      
       <BrowserRouter>    
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Route>
         </Routes>          
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
