import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';
import Character from './components/Character';

//Importamos el hook y llamamos dos veces a los diferentes URLs.


function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/6';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const { data: pokemon, loading: loadingPokemon, error: errorPokemon } = useFetchCharacters(urlPokemon);
  const { data: rick, loading: loadingRick, error: errorRick } = useFetchCharacters(urlRick);

  return (
    <div>
      <h1>Personajes API</h1>

      <h2>Personaje Pokémon</h2>
      <Character 
        name={pokemon?.name} 
        image={pokemon?.sprites.front_default} 
        loading={loadingPokemon} 
        error={errorPokemon} 
      />

      <h2>Personaje Rick and Morty</h2>
      <Character 
        name={rick?.name} 
        image={rick?.image} 
        loading={loadingRick} 
        error={errorRick} 
      />
    </div>
  );
}

export default App;

// con este componente Character está todo mejor organizado y clean.