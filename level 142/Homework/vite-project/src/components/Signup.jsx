export default function Signup() {
  return (
    <div className="p-10 bg-red-100 rounded-xl shadow hover:-translate-y-1 transition duration-300">
      <h1 className="text-2xl font-bold text-center">Signup</h1>
      <input className="block w-full mt-4 p-2 border rounded" placeholder="Name" />
      <input className="block w-full mt-2 p-2 border rounded" placeholder="Email" />
      <input className="block w-full mt-2 p-2 border rounded" placeholder="Password" type="password" />
      <button className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300">
        Create Account
      </button>
    </div>
  );
}