import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', user);
    navigate('/chat');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Вход в чат</h2>
      <input name="user" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Введите имя" />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Home;
