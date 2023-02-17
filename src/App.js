import "./App.css";
import { Main } from "./pages/Main";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CharacterDescription } from "./pages/characterDescription";
import { Comics } from "./pages/comics";
import { ComicsDescription } from "./pages/comicsDescription";

function App() {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div className="App">
        <header className="App-header">
          <div className="App-header-left">
            <p className="red-p">Marvel</p>
            <p>information portal</p>
          </div>
          <div className="App-header-right">
            <p onClick={() => navigate("/")} className="header-p">
              Characters
            </p>
            /
            <p onClick={() => navigate("comics")} className="header-p">
              comics
            </p>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<CharacterDescription />} />
          <Route path="/:id/comics" element={<ComicsDescription />} />
          <Route path="comics" element={<Comics />} />
        </Routes>

        <footer className="App-main"></footer>
      </div>
    </>
  );
}

export default App;
