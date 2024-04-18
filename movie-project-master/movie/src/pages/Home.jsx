import { useState, useEffect } from "react";
import MyCard from "../compontent/card";
import Navbar from "../compontent/navbar";
import axios from "axios";
import Pagenation from "../compontent/Pagenation";

function Home() {
  const [Movies, setMovies] = useState([]);
  const [pagescount, setpagescount] = useState();
  let headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWVkMzczOGUyOTQ5M2UzZjZlOWIzYmEyMzU4ZTkzNiIsInN1YiI6IjY1MTFhNDE4ZThkMGI0MDE0ZTBmMjM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.47-revhU7dr6gLHGsY_uSOJBvkwVxXWFIPfNexZPUGM",
  };
  async function search(word) {
    console.log(word);
    const response = await axios(
      `https://api.themoviedb.org/3/search/movie?query="${word}"`,
      {
        headers: headers,
      }
    );
    if (word == "") {
      getmovies();
    } else {
      setMovies(response.data.results);
    setpagescount(response.data.total_pages);

    }
  }

  let getmovies = async () => {
    let res = await axios(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=2&api_key=21ed3738e29493e3f6e9b3ba2358e936"
    );
    setMovies(res?.data.results);
    setpagescount(res.data.total_pages);
  };

  useEffect(() => {
    getmovies();
  }, []);
  useEffect(() => {
    console.log(Movies);
  }, [Movies]);

  let getpage = async (page) => {
    console.log(page);
    let res = await axios(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}&api_key=21ed3738e29493e3f6e9b3ba2358e936`
    );
    setMovies(res?.data.results);
    setpagescount(res.data.total_pages);

  };

  return (
    <>
      <Navbar search={search} />
      <MyCard Movies={Movies} setMovies={setMovies} />
      <Pagenation getpage={getpage} pagescount={pagescount} />
    </>
  );
}

export default Home;
