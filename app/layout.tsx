import { ReactNode } from "react";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import "./global.css";

export const metadata = {
  title: 'Ninja List | Home',
  description: 'Next.js öğreniyorum, harika bir Pokedex ve Ninja projesi.',
  keywords: 'ninjas, pokemon, nextjs'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}