import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoriteBooks from './components/pages/favoriteBooks';
import About from './components/pages/aboutPage';
import AllBooks from './components/pages/allBooks';
import Navbar from './components/Navbar';
import { FavoritesProvider } from './components/FavoritesContext';

export default function App() {

  //   let name = "Pankaj Kapoor"
  //   let data = {
  //     age: 40,
  //     location:"Noida"
  //   }

  // const htmlcode = (
  //   <ul>
  //     <li>HTML5</li>
  //     <li>Css3</li>
  //     <li>JavaScript</li>
  //     <li>MongoDB</li>
  //     <li>ReactJS</li>
  //   </ul>
  // );

  // let CountryNames = [" INDIA" , "USA" , "UAE" , "UK","RUSSIA" ]

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/favorites" element={<FavoriteBooks />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
    </FavoritesProvider>
  );
}