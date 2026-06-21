export default function Avatar({ image }) {
  return (
    <img
      src={image}
      alt="avatar"
      className="w-24 h-24 rounded-full object-cover"
    />
  );
}