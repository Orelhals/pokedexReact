import { Navbar } from "./components/Navbar";
import "./App.css"
import { Searchbar } from "./components/Searchbar";
import { Pokedex } from "./components/Pokedex";
import { useEffect, useState } from "react";
import { getPokemons } from "./api";

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      // setLoading(true)
      const result = await getPokemons();
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  }

  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  },[])
  

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons.results} loading={loading} />
    </div>
  )
}

export default App
