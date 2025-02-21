import { useRef, useState } from "react";
import { MovieList } from "../components/MovieList";
import { Filtre } from "../components/Filtre";
import "../App.css";

function Home( {films, setFilms} ) {
    const [isVisible, setIsVisible] = useState(false);
    const [filteredFilms, setFilteredFilms] = useState(films); //contient les films filtrés pour l'affichage.
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
            setFilteredFilms(prev => [...prev, newMovie]);
            titleRef.current.value = "";
            textareaRef.current.value = "";
            posterRef.current.value = "";
            noteRef.current.value = "";
        } 
    }
    return (
    <>
        <Filtre films={films} setFilteredFilms={setFilteredFilms} setIsVisible={setIsVisible} />
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
            <MovieList movieList={filteredFilms} />
        </div>
    </> 
    );
}

export default Home;
