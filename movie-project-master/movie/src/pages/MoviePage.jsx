import { useState, useEffect } from "react";
import Navbar from "../compontent/navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function MoviePage() {
  let param = useParams();
  const [movie, setMovie] = useState();

  let headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWVkMzczOGUyOTQ5M2UzZjZlOWIzYmEyMzU4ZTkzNiIsInN1YiI6IjY1MTFhNDE4ZThkMGI0MDE0ZTBmMjM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.47-revhU7dr6gLHGsY_uSOJBvkwVxXWFIPfNexZPUGM",
  };

  let getmovie = async () => {
    let res = await axios(`https://api.themoviedb.org/3/movie/${param.id}`, {
      headers: headers,
    });
    setMovie(res?.data);
  };

  useEffect(() => {
    getmovie();
  }, []);
  console.log(movie);

  return (
    <>
      <Navbar />
      <div
        className="container mt-5 p-1 "
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f9f7f9",
        }}
      >
        <div className="fathimgforinfo">
          <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" className="movieimg"/>
        </div>
        <div className="info col-8">
          <span className="MovieName">MovieName is :{movie?.title} </span>
          <span className="Release Date">
            Release Date is : {movie?.release_date}
          </span>
          <span className="Number of residents">
            Number of residents is : {movie?.vote_average}
          </span>
          <span className="Evaluation">
            Evaluation is :{movie?.vote_count}{" "}
          </span>
        </div>
      </div>
      <div
        className="container my-3 p-5"
        style={{ backgroundColor: "#f9f7f9" }}
      >
        <div className="titleforstory">
          <h1>The Story</h1>
        </div>
        <div className="story">
          <p>{movie?.overview}</p>
        </div>
      </div>
      <div className="footer d-flex align-items-center justify-content-center">
        <button className="downloedbtn mx-3 mb-3">
          <a href={movie?.homepage} className="btn_DownloedIt">Downloed It</a>
        </button>
        <button className="backbtn mb-3">
          <Link to="/" className="link">
            Go To Home Page
          </Link>{" "}
        </button>
      </div>
    </>
  );
}

export default MoviePage;
