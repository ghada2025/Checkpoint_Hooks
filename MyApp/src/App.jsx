import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import { View } from './pages/View';
import { useState } from 'react';
const  initialFilms = [
  {
      id: 1,
      title: "Inception",
      description: "Un voleur utilise la technologie du rêve pour implanter une idée dans l'esprit d'un PDG.",
      posterURL: "Inception.jpg",
      note: 4,
      trailerURL: "https://www.youtube.com/watch?v=fBFgg_OYcR4"
  },
  {
      id: 2,
      title: "Interstellar",
      description: "Un groupe d'explorateurs voyage à travers un trou de ver pour sauver l'humanité.",
      posterURL: "Interstellar.jpg",
      note: 4.7,
      trailerURL: "https://www.youtube.com/watch?v=YF1eYbfbH5k"
  },
  {
      id: 3,
      title: "Avatar",
      description: "Un soldat paraplégique embarque pour une mission sur la planète Pandora.",
      posterURL: "Avatar.jpg",
      note: 4.5,
      trailerURL: "https://www.youtube.com/watch?v=RNj2cH5yjNA"
  },
  {
      id: 4,
      title: "The Dark Knight",
      description: "Batman affronte le Joker, un criminel sadique semant le chaos à Gotham.",
      posterURL: "The Dark Knight.jpg",
      note: 4.9,
      trailerURL: "https://www.youtube.com/watch?v=xoQAvxO57Og"
  },
  {
      id: 5,
      title: "Titanic",
      description: "Une romance tragique à bord du célèbre paquebot coulé en 1997.",
      posterURL: "Titanic.jpg",
      note: 4.6,
      trailerURL: "https://www.youtube.com/watch?v=iPz9sBWE2Y8"
  }
];

function App() {
  const [films, setFilms] = useState(initialFilms)
  return (
    <>
    <Routes>
      <Route path="/" element={<Home films={films} setFilms={setFilms}/>} />
      <Route path="/view/:id" element={<View films={films} />} />
    </Routes>
      
    </>
    
  );
}

export default App;
