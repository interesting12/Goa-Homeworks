import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* HEADER */}
      <header className="bg-black text-white p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <p className="text-gray-300">React Developer</p>
      </header>

      {/* MAIN */}
      <main className="flex-1 p-10 flex flex-col items-center text-center gap-6">

        <h2 className="text-3xl font-bold">About Me</h2>

        <div className="bg-white p-6 rounded-xl shadow-lg w-96">
          <p className="text-gray-700">
            👋 Hello! I am Giorgi, a beginner React developer.
          </p>

          <p className="mt-2 text-gray-600">
            📍 I live in Tbilisi, Vazisubani (fictional address: Mars Street 12)
          </p>

          <p className="mt-2 text-gray-600">
            💼 I work as a frontend developer intern
          </p>

          <p className="mt-2 text-gray-600">
            🚀 Interests: React, JavaScript, UI Design, Games
          </p>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white p-5">
        <div className="flex justify-center gap-6 text-2xl">

          <a href="#" className="hover:text-blue-400">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-blue-500">
            <FaLinkedin />
          </a>

          <a href="#" className="hover:text-pink-500">
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-red-400">
            <FaEnvelope />
          </a>

          <a href="#" className="hover:text-sky-400">
            <FaTwitter />
          </a>

        </div>

        <p className="text-center text-gray-400 mt-3 text-sm">
          © 2026 My Portfolio
        </p>
      </footer>

    </div>
  );
}