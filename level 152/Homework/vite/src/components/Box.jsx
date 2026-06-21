export default function Box({ number, color }) {
  return (
    <div
      className="w-24 h-24 flex items-center justify-center text-white font-bold rounded-lg"
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
}