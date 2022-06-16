import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/system";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import TV from "./pages/TV/TV";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" index element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
