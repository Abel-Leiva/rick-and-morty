import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "leiva@gmail.com";
  const password = "papu22";
  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  console.log(location);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID.");
        } else {
          alert("No hay personajes con ese ID.");
        }
      });
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    console.log(randomId);
    onSearch(randomId);
  }

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} random={random} />
      )}

      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="detail/:detailID" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
