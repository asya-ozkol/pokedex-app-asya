import Link from "next/link";

export default async function NinjasPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas = await res.json();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "2rem", fontWeight: "bold" }}>
        All Ninjas
      </h1>
      
      {ninjas.map((ninja: any) => (
        <div key={ninja.id}>
          <Link 
            href={`/ninjas/${ninja.id}`}
            style={{
              display: "block",
              background: "#fff",
              padding: "16px",
              margin: "12px 0",
              borderRadius: "4px",
              borderLeft: "8px solid #4979ff", // İşte hocanın o sol taraftaki şık mavi şeriti!
              textDecoration: "none",
              color: "#333",
              fontWeight: "600",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}
          >
            <h3>{ninja.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}