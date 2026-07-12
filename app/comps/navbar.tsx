import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>PokeWorld🧿</h1>
      </div>
      {}
      <Link href="/">Home</Link>
      <Link href="/about1">About</Link>
      <Link href="/ninjas">Poke Listing</Link>
    </nav>
  );
};

export default Navbar;