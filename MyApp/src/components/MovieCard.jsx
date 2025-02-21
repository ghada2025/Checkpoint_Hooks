import { Link } from "react-router";
import "../App.css";

export function MovieCard({ movie }) {
    return (
        <Link to={`/view/${movie.id}`} className="card">
            <div className="card-img">
                <img src={movie.posterURL} alt={movie.title || "Movie Poster"} className="img" />
            </div>
            <div className="card-title">{movie.title}</div>
            <div className="card-subtitle">{movie.description}</div>
            <div className="card-divider"></div>
            <div className="card-footer">
                <div className="card-note">
                    <p>{movie.note ?? "N/A"}</p>
                    <img src="/Star.png" alt="star"></img>
                </div>
                <button className="card-btn"><img src="/heart.png" alt="heart"></img></button>
            </div>
        </Link>
    );
}
