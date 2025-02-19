import "../App.css";
export function Filtre({setFilms, setIsVisible}) {
    function toggleVisibility() {
        setIsVisible(prev => !prev);
    }
    

    function handleSearchChange(e) {
        setFilms((prev) => prev.filter((movie) => movie.title.toLowerCase().startsWith(e.target.value.toLowerCase())))
    }

    function handleRangeChange(e) {
        setFilms(prev => prev.filter(movie => movie.note >= e.target.value));
    }

    return (
        <div className="filtre">
                <div className="input-container">
                    <input onChange={handleSearchChange} type="text"  name="text" className="input" placeholder="search..."></input>
                    <span className="icon">
                        <img src="/search.png" alt="search"></img>
                    </span>      
                </div> 
                <div className="stars">
                    <img src="/star(1).png" alt="star"></img>
                    <input className="input-range" type="range" min="0" max="5" step="0.1" onChange={handleRangeChange} />
                    <img src="/star(2).png" alt="star"></img>

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