import "../App.css";
export function Filtre({setFilms, setIsVisible}) {
    function toggleVisibility() {
        setIsVisible(prev => !prev);
    }
    

    function handleSearchChange(e) {
        setFilms((prev) => prev.filter((movie) => movie.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    function handleRatingChange(e) {
        const selectedRating = parseFloat(e.target.value);
        setFilms(prev => prev.filter(movie => movie.note >= selectedRating));
    }

    return (
        <div className="filtre">
                <div className="input-container">
                    <input onChange={handleSearchChange} type="text"  name="text" className="input" placeholder="search..."></input>
                    <span className="icon">
                        <img src="/search.png" alt="search"></img>
                    </span>      
                </div> 
                <div className="rating">
                    <input onChange={handleRatingChange} value="5" name="rate" id="star5" type="radio"></input>
                    <label title="text" htmlFor="star5"></label>
                    <input onChange={handleRatingChange} value="4" name="rate" id="star4" type="radio"></input>
                    <label title="text" htmlFor="star4"></label>
                    <input onChange={handleRatingChange} value="3" name="rate" id="star3" type="radio" ></input>
                    <label title="text" htmlFor="star3"></label>
                    <input onChange={handleRatingChange} value="2" name="rate" id="star2" type="radio"></input>
                    <label title="text" htmlFor="star2"></label>
                    <input onChange={handleRatingChange} value="1" name="rate" id="star1" type="radio"></input>
                    <label title="text" htmlFor="star1"></label>
                </div>  
                <button onClick={toggleVisibility} className="cta">
                    <span className="hover-underline-animation"> Add New Movie </span>
                    <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="10"
                        viewBox="0 0 46 16"
                    >
                        <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        transform="translate(30)"
                        ></path>
                    </svg>
                </button> 
        </div>              
    );
}