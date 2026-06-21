import { useState, useEffect } from 'react';
import AuthForm from './components/AuthForm';
import Counter from './components/Counter';
import './style.css'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    
    if (users[username]) {
      if (users[username].password === password) {
        const userData = {
          username,
          counter: users[username].counter,
          loginTime: new Date().toISOString()
        };
        setUser(userData);
        localStorage.setItem('currentUser', JSON.stringify(userData));
        return true;
      }
      return false; 
    } else {
      users[username] = { password, counter: 0 };
      localStorage.setItem('users', JSON.stringify(users));
      
      const userData = {
        username,
        counter: 0,
        loginTime: new Date().toISOString()
      };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return true;
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const updateCounter = (newCount) => {
    if (!user) return;
    
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[user.username]) {
      users[user.username].counter = newCount;
      localStorage.setItem('users', JSON.stringify(users));
      
      setUser(prev => ({
        ...prev,
        counter: newCount
      }));
      localStorage.setItem('currentUser', JSON.stringify({
        ...user,
        counter: newCount
      }));
    }
  };

  return (
    <div className="app">
      <h1>Counter App</h1>
      {!user ? (
        <AuthForm onLogin={handleLogin} />
      ) : (
        <>
          <Counter 
            count={user.counter} 
            onIncrement={() => updateCounter(user.counter + 1)}
            onDecrement={() => updateCounter(user.counter - 1)}
            onReset={() => updateCounter(0)}
          />
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
          <div className="user-info">
            <p>Username: {user.username}</p>
            <p>Count: {user.counter}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;