export default function Login() {
  return (
    <div className="p-10 bg-yellow-100 rounded-xl shadow hover:rotate-1 transition duration-300">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <input className="block w-full mt-4 p-2 border rounded" placeholder="Email" />
      <input className="block w-full mt-2 p-2 border rounded" placeholder="Password" type="password" />
      <button className="w-full mt-4 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300">
        Login
      </button>
    </div>
  );
}