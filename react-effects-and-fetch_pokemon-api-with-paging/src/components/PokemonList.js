import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0); // Keep track of the page
  const [hasPreviousPage, setHasPreviousPage] = useState(false); // Keep track of previous page

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}` // Use the page in the URLand we shoul replace "" with ``
        );
        const data = await response.json();
        setPokemon(data.results);
        setHasPreviousPage(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]); //nclude page in the dependency array
  const nextPage = () => {
    setPage(page + 20); // Update offset to fetch the next page
  };
  const previousPage = () => {
    setPage(page - 20);
  };

  return (
    <main>
      {hasPreviousPage && (
        <button type="button" onClick={previousPage}>
          Previous Page
        </button>
      )}
      <button type="button" onClick={nextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
