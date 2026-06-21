export function register(username, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(u => u.username === username);
    if (exists) return alert("User already exists!");
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully!");
  }
  
  export function login(username, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return alert("Invalid credentials");
    localStorage.setItem("loggedInUser", username);
    return true;
  }
  