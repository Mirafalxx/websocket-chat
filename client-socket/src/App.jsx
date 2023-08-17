import { Route, Routes } from 'react-router-dom';
import socketIO from 'socket.io-client';
import Home from './Components/Home/Home';
import Chat from './Components/Chat/Chat';
const socket = socketIO.connect('http://localhost:5000');

const App = () => {
  return (
    <div className="application-wrapper">
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/chat" element={<Chat socket={socket} />} />
      </Routes>
    </div>
  );
};

export default App;
