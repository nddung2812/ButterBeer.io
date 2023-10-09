import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-200 sm:text-7xl">
          Empowering Business with {" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">ButterBeer.io</span>
          </span>{" "}
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-400 leading-7">
          Allow us to assist in transforming every business challenge into digital opportunities.
        </h2>
        <Link
          className="bg-purple-600 rounded-full text-white font-medium px-6 py-3 sm:mt-10 mt-8 hover:bg-purple-500 transition"
          href="/register"
        >
          Register now
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Instant and Effective</h2>
                <Image
                  alt="Original photo of a room with roomGPT.io"
                  src="/global.jpg"
                  className="w-full object-contain h-96 rounded-2xl"
                  width={400}
                  height={500}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Reliable Communication</h2>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={500}
                  src="/reliable.jpg"
                  className="w-full object-contain h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Digital Solutions</h2>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={500}
                  src="/solution.jpg"
                  className="w-full object-contain h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
