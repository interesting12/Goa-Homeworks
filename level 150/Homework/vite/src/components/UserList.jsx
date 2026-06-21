export default function UserList({ users }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Users List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold text-gray-800">
              {user.name}
            </h2>

            <p className="text-gray-600">Age: {user.age}</p>
            <p className="text-gray-600">Job: {user.job}</p>

            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}