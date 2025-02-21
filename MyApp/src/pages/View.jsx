import { Link, useParams } from "react-router";

export function View({films}) {
    const { id } = useParams();
    const movie = films.find((movie) => movie.id === parseInt(id));
    // Extraire l'ID de la vidéo YouTube
    const getYouTubeEmbedURL = (url) => {
        if (!url) return "";
        const videoId = url.split("v=")[1]?.split("&")[0]; // Extraction de l'ID
        return `https://www.youtube.com/embed/${videoId}`;
    };
    return (
        <>
            <div className="flex justify-center gap-4 items-center h-screen p-8" >   
                <div className="w-[20%] h-[500px] bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-2 rounded-lg shadow-md">
                    <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                        <h1>{movie.title}</h1>
                    </div>
                    <div className="col-span-2 rounded-md">
                        <img  src={`/${movie.posterURL}`} alt={movie.title || "Movie Poster"} onError={() => console.log("Image not found:", movie.posterURL)} />
                        <p> {movie.description}</p>
                    </div>
                    <div className="col-span-1  rounded-md">
                        <Link to="/" className="block rounded-md bg-slate-300 w-full hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
                            <img src="/retour.png" alt="retour" className="w-[20px]" />
                        </Link>
                    </div>

                </div>
                <div className="w-[70%] h-[500px] bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 justify-center p-4 gap-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold mb-4">Regarder le trailer :</p>
                    <iframe 
                        width="900" 
                        height="400" 
                        src={getYouTubeEmbedURL(movie.trailerURL)} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        className="rounded-lg shadow-md"
                    ></iframe>
                </div> 
            </div>
        </>
    );
}