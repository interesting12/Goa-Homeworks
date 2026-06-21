function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24">
      <img
        src="https://via.placeholder.com/200"
        alt="profile"
        className="w-52 h-52 rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 duration-300"
      />

      <h1 className="text-5xl font-bold mt-6">
        Hello, I'm Giorgi
      </h1>

      <p className="text-slate-400 mt-4 text-xl">
        Future Full Stack Developer
      </p>

      <button className="mt-8 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 duration-300">
        View My Work
      </button>
    </section>
  );
}

export default Hero;