import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const goBack = useNavigate();

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>This page does not exist</p>
      <button onClick={() => goBack("/")}>Return to main page</button>
    </div>
  );
}