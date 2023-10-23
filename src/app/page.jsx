import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="text-center p-px">
        <div className="bg-white text-black m-4 rounded-full">
          <Link className="m-4" href="/">
            Inicio
          </Link>
          <Link className="m-4" href="/">
            Sobre Mi
          </Link>
          <a className="m-4" href="/">
            Contactame
          </a>
          <a className="m-4" href="/">
            Proyectos
          </a>
          <a className="m-4" href="/">
            Discord
          </a>
        </div>
      </nav>
    </main>
  );
}
