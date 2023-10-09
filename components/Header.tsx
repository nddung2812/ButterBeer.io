import Image from "next/image";
import Link from "next/link";
import { FaPaperPlane } from 'react-icons/fa';
import logoWhitetext from '../styles/assets/logoWhitetext.png'

export default function Header() {
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          alt="header text"
          src={logoWhitetext}
          className="sm:w-10 sm:h-10 w-12 h-12"
          width={2000}
          height={2000}
        />
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          ButterBeer.io
        </h1>
      </Link>
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
        href="/connect"
        rel="noopener noreferrer"
      >
        <FaPaperPlane />
        <p>Connect Now</p>
      </a>
    </header>
  );
}
