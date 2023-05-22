import Animes from "@pages/Animes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My blog Anime</h1>
        <Routes>
          <Route path="/" element={<Animes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
