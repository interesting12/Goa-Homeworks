export default function StudentCard({ student }) {
  return (
    <div className="border p-3 rounded-xl">
      <img
        src={student.image}
        className="w-20 h-20 rounded-full object-cover"
      />
      <h3 className="font-bold">{student.name}</h3>
      <p>Age: {student.age}</p>
    </div>
  );
}