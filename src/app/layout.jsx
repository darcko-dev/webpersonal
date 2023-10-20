import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio - Ronald Tellez",
  description:
    "Aqui encontraras todo mi avanze en mi camino a convertirme en desarrollador fullstack. tendras acceso directo a demos y templates de mis proyectos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
