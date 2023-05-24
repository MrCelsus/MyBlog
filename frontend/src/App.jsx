import Animes from "@pages/Animes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OneAnime from "@pages/OneAnime";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>My blog Anime</h1>
        </header>
        <Routes>
          <Route path="/" element={<Animes />} />
          <Route path="/animes/:id" element={<OneAnime />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
