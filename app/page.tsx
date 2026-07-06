import Link from "next/link";

// 1. Veriyi direkt Server Component içinde async/await ile çekiyoruz
export default async function NinjasPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas = await res.json();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "2rem", fontWeight: "bold" }}>
        All Ninjas
      </h1>
      
      {/* 2. Hocanın ninjas.map döngüsüyle aynı mantık */}
      {ninjas.map((ninja: any) => (
        <div key={ninja.id}>
          {/* Dinamik rotaya yönlendirme: /ninjas/1, /ninjas/2 vb. */}
          <Link 
            href={`/ninjas/${ninja.id}`}
            style={{
              display: "block",
              background: "#fff",
              padding: "16px",
              margin: "12px 0",
              borderRadius: "4px",
              borderLeft: "8px solid #4979ff", // Hocanın sol taraftaki o mavi çizgisi!
              textDecoration: "none",
              color: "#333",
              fontWeight: "600",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease"
            }}
          >
            <h3>{ninja.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}