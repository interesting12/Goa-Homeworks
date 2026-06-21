function App() {
  const equipment = [
    {
      name: "Dumbbells",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      description: "Perfect for strength training."
    },
    {
      name: "Barbell",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
      description: "Essential for compound exercises."
    },
    {
      name: "Treadmill",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      description: "Great for cardio workouts."
    },
    {
      name: "Exercise Bike",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
      description: "Low impact cardio equipment."
    },
    {
      name: "Kettlebell",
      image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=500",
      description: "Excellent for functional fitness."
    },
    {
      name: "Bench Press",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
      description: "Build chest and upper body strength."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="bg-black p-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center text-red-500">
          Gym Inventory
        </h1>
      </header>

      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">
          Professional Gym Equipment
        </h2>
        <p className="text-gray-400 mt-3">
          Explore our collection of fitness equipment.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 p-8">
        {equipment.map((item) => (
          <div
            key={item.name}
            className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold mb-2">
                {item.name}
              </h3>

              <p className="text-gray-300">
                {item.description}
              </p>

              <button className="mt-4 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>

      <footer className="bg-black text-center p-5 mt-10">
        <p>© 2026 Gym Inventory</p>
      </footer>
    </div>
  );
}

export default App;