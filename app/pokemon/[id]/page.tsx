import Link from 'next/link';
export default async function PokemonPage({ params }: any) {
  
  const { id } = await params; 

  const url = `https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`;
  
  console.log("İstek atılan adres:", url);

  const res = await fetch(url);
  
  
  if (!res.ok) {
    return <div>This Pokémon data could not be accessed. Please try again later.</div>;
  }

  const pokemon = await res.json();

  return (
    <div>
      <h1>Pokémon İsmi: {pokemon.name}</h1>
      {pokemon.sprites && (
         <img src={pokemon.sprites.front_default} alt={pokemon.name} width={200} />
      )}
      <p>Boy: {pokemon.height}</p>
      <p>kilo: {pokemon.weight}</p>
      <p>name: {pokemon.base_experience}</p>
    </div>
  );
}
