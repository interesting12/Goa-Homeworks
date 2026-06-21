export default function UserStatus({ loggedIn }) {
  return (
    <div className="p-4 border rounded-xl w-80 text-center">
      {loggedIn ? "Welcome back!" : "Please Register"}
    </div>
  );
}