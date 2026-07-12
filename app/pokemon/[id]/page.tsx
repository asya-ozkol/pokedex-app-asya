import Link from 'next/link';

export default async function PokemonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!res.ok) {
    return <p>Pokemon not found.</p>;
  }

  const pokemon = await res.json();

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Link
        href="/pokemon"
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          color: '#333',
          textDecoration: 'none',
        }}
      >
        Back to Pokedex
      </Link>

      <h1>{pokemon.name.toUpperCase()}</h1>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{
          width: '180px',
          height: '180px',
        }}
      />

      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '20px',
        }}
      >
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
        <p>Ability: {pokemon.abilities[0].ability.name}</p>
      </div>
    </div>
  );
}