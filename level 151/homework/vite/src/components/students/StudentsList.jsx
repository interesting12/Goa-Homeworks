import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {students.map((s) => (
        <StudentCard key={s.id} student={s} />
      ))}
    </div>
  );
}