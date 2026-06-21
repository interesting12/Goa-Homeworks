import UserList from "./UserList";

export default function Users() {
  const users = [
    { id: 1, name: "Giorgi", age: 20, job: "Developer" },
    { id: 2, name: "Ana", age: 22, job: "Designer" },
    { id: 3, name: "Nika", age: 25, job: "Engineer" },
    { id: 4, name: "Elene", age: 21, job: "Student" },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}