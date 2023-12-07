import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import './style.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Di sini bisa dilakukan validasi username dan password
    // Contoh sederhana hanya untuk tujuan demonstrasi
    // Misalnya, username dan password yang diizinkan adalah 'user' dan 'password'
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path='/' element={<Home />} />
              <Route path="/create" element={<Add />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
            </>
          ) : (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Logout = ({ onLogout }) => {
  // Di sini bisa dilakukan proses logout yang diperlukan sebelum mengarahkan ke halaman login
  onLogout();
  return <Navigate to="/" />;
};

export default App;
