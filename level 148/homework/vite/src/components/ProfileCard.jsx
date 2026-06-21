function ProfileCard({ name, surname, image, description }) {
  return (
    <div className="bg-white w-96 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          {name} {surname}
        </h1>

        <p className="text-gray-600 mt-4">
          {description}
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;