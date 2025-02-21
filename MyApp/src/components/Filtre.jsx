import { useState } from "react";
import "../App.css";

export function Filtre({ films, setFilteredFilms, setIsVisible }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [minRating, setMinRating] = useState(0);

    function toggleVisibility() {
        setIsVisible(prev => !prev);
    }

    function handleSearchChange(e) { // Récupère la valeur tapéee par l'utilisateur
        setSearchTerm(e.target.value.toLowerCase());// Met à jour "searchTerm" avec la nouvelle valeur
        applyFilters(e.target.value.toLowerCase(), minRating);//Appelle applyFilters() pour filtrer avec la note actuelle
    }

    function handleRangeChange(e) {
        const rating = parseFloat(e.target.value);
        setMinRating(rating);
        applyFilters(searchTerm, rating);
    }
    // Mon filtre de recherche et de note
    function applyFilters(search, rating) {
        const filtered = films.filter(movie =>
            movie.title.toLowerCase().startsWith(search) && movie.note >= rating
        );
        setFilteredFilms(filtered);
    }

    return (
        <div className="filtre">
            <div className="input-container">
                <input onChange={handleSearchChange} type="text" className="input" placeholder="Search..."/>
                <span className="icon"><img src="/search.png" alt="search"/></span>
            </div> 
            <div className="stars">
                <img src="/star(1).png" alt="star"/>
                <input className="input-range" type="range" min="0" max="5" step="0.1" onChange={handleRangeChange} />
                <img src="/star(2).png" alt="star"/>
            </div>  
            <button onClick={toggleVisibility} className="cta">
                <span className="hover-underline-animation"> Add New Movie </span>
            </button>
        </div>              
    );
}
