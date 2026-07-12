'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pokemons } from '../data';

export default function PokedexPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokedex-page">
      <h1>Pokedex</h1>

      <input
        className="pokemon-search"
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredPokemons.length === 0 && <p>We couldn't find any Pokémon.</p>}

      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon) => (
          <Link
            key={pokemon.id}
            href={`/pokemon/${pokemon.id}`}
            className="pokemon-card"
            style={{ backgroundColor: pokemon.color }}
          >
            <div className="pokemon-card-top">
              <h2>{pokemon.name.toLowerCase()}</h2>
            </div>

            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="pokemon-card-image"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}