import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <ProfileCard
        name="Giorgi"
        surname="Shavadze"
        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43"
        description="Beginner React Developer. I enjoy building websites with JavaScript, React and Tailwind CSS."
      />
    </div>
  );
}

export default App;