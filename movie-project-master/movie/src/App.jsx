import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import { BrowserRouter, Routes, Route, Link, Outlet, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/moviePage/:id"  element={<MoviePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
