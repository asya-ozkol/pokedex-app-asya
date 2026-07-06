import Link from 'next/link';

export default function PokemonPage() {
  // Şimdilik test etmek için elimizle 3 tane pokemon yazıyoruz
  const pokemonList = [
    { id: 1, name: 'Bulbasaur' },
    { id: 4, name: 'Charmander' },
    { id: 7, name: 'Squirtle' }
  ];

  return (
    <div className="content" style={{ padding: '20px' }}>
      <h1>Masaüstü Pokedex Projem</h1>
      <p>İlk Pokemon listemi başarıyla oluşturdum!</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {pokemonList.map((poke) => (
          <div key={poke.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
            {/* Pokemon resmini resmi kaynaktan çekiyoruz */}
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} 
              alt={poke.name} 
            />
            <h3>{poke.name}</h3>
            {/* Tıklayınca ileride detay sayfasına gidecek olan link */}
            <Link href={`/pokemon/${poke.id}`} style={{ color: '#0070f3', textDecoration: 'underline' }}>
              Detayları Gör
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}