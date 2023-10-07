import imageRickMorthy from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  /* Se utiliza para pasar el state con los datos */
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    /* Se llama la url de la api utilizando el fetch */
    const api = await fetch("https://rickandmortyapi.com/api/character/");
    const characterApi =
      await api.json(); /* Se hace referencia a la información que hay en esa api */

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morthy</h1>
        {characters ? (
          <Characters
            characters={characters}
            setCharacters={setCharacters}
          /> /* Se pasa la información mediente props */
        ) : (
          <>
            <img
              src={imageRickMorthy}
              alt="Rick & Morthy"
              className="img-home"
            />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
