import Link from 'next/link';
export default async function PokemonPage({ params }: any) {
  // params'ı await ile açıyoruz
  const { id } = await params; 

  const url = `https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`;
  // ... gerisi aynı!
  console.log("İstek atılan adres:", url);

  const res = await fetch(url);
  
  
  if (!res.ok) {
    return <div>Bu Pokémon verisine ulaşılamadı. Lütfen tekrar dene.</div>;
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