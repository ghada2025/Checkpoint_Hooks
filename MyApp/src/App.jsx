import { useRef, useState } from 'react';
import './App.css'
import { Filtre } from './components/Filtre';
import { MovieList } from "./components/MovieList";

const initialFilms = [
  {
    id: 1,
    title: "Inception",
    description: "Un voleur utilise la technologie du rêve pour implanter une idée dans l'esprit d'un PDG.",
    posterURL: "Inception.jpg",
    note: 4
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Un groupe d'explorateurs voyage à travers un trou de ver pour sauver l'humanité.",
    posterURL: "Interstellar.jpg",
    note: 4.7
  },
  {
    id: 3,
    title: "Avatar",
    description: "Un soldat paraplégique embarque pour une mission sur la planète Pandora.",
    posterURL: "Avatar.jpg",
    note: 4.5
  },
  {
    id: 4,
    title: "The Dark Knight",
    description: "Batman affronte le Joker, un criminel sadique semant le chaos à Gotham.",
    posterURL: "The Dark Knight.jpg",
    note: 4.9
  },
  {
    id: 5,
    title: "Titanic",
    description: "Une romance tragique à bord du célèbre paquebot coulé en 1912.",
    posterURL: "Titanic.jpg",
    note: 4.6
  }
];


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [films, setFilms] = useState(initialFilms)
  // useRef
  const titleRef = useRef(null);
  const textareaRef = useRef(null);
  const posterRef = useRef(null);
  const noteRef = useRef(null);
  // handleAddMovie()
  function handleAddMovie(event) {
    event.preventDefault();
    const newMovie = {
      id: String(Date.now()),
      title: titleRef.current.value.trim(), // trim() pour éviter les espaces vides
      description: textareaRef.current.value.trim(),
      posterURL: posterRef.current.value.trim(),
      note: parseFloat(noteRef.current.value) || 0, 
    };
  
    if (newMovie.title && newMovie.description && newMovie.posterURL) {
      setFilms((prev) => [...prev, newMovie]); 
      titleRef.current.value = "";
      textareaRef.current.value = "";
      posterRef.current.value = "";
      noteRef.current.value = "";
    } 
  }
  return (
    <>
      <Filtre setFilms={setFilms} setIsVisible={setIsVisible}/>
      <div className="AddMovie">   
          {isVisible &&
            <div className="container">
              <div className="heading">Add New Movie </div>
              <form onSubmit={handleAddMovie} className="form" action="">
                <div className="input-field">
                  <input ref={titleRef} required="" type="text" name="text" id="username"/>
                  <label htmlFor="title">Title</label>
                </div>
                <div className="input-field">
                  <textarea  ref={textareaRef} required="" name="text" id="email"></textarea>
                  <label htmlFor="Description">Description</label>
                </div>
                <div className="input-field">
                  <input ref={posterRef} required="" type="text" name="text" id="username"/>
                  <label htmlFor="poster">Poster</label>
                </div>
                <div className="input-field">
                  <input ref={noteRef} required="" type="text" name="text" id="username"/>
                  <label htmlFor="note">note</label>
                </div>
                <div className="btn-container">
                  <button type="submit"  className="btn">Add</button>
                </div>
              </form>
            </div>
          }
      </div>
      <div className="App">
        <MovieList movieList={films} />
      </div>
    </>
    
  );
}

export default App;
