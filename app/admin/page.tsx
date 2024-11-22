'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      router.push('/dashboard'); // Navigate to the dashboard if credentials are correct
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="flex p-5">
      <input
        className='p-3 mr-3 btn btn-outline btn-error'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='p-3 mr-3 btn btn-outline btn-error'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
