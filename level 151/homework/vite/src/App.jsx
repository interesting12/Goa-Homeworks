import ProfileCard from "./components/profile/ProfileCard";
import ProductList from "./components/products/ProductList";
import UserStatus from "./components/user/UserStatus";
import Task from "./components/task/Task";
import StudentList from "./components/students/StudentList";

export default function App() {
  const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Phone", price: 800, inStock: false },
  ];

  const students = [
    { id: 1, name: "Giorgi", age: 20, image: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Ana", age: 22, image: "https://i.pravatar.cc/150?img=2" },
  ];

  return (
    <div className="p-6 flex flex-col gap-6 items-center">

      <ProfileCard
        name="Giorgi Shavadze"
        description="React Developer in training"
        image="https://i.pravatar.cc/150?img=3"
      />

      <ProductList products={products} />

      <UserStatus loggedIn={true} />

      <Task name="Learn React" time="18:00" />

      <StudentList students={students} />

    </div>
  );
}