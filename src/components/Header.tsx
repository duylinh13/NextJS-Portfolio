import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Huynh Le Duy Linh</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
