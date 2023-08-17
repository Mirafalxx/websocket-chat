import Sidebar from './components/Sidebar';
import ChatBody from './components/ChatBody';
import MessageBlock from './components/MessageBlock';
import './styles.scss';
import { useEffect, useState } from 'react';
const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('response', (data) => {
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  return (
    <div className="chat-wrapper">
      <Sidebar />
      <main className="main-chat">
        <ChatBody messages={messages} />
        <MessageBlock socket={socket} />
      </main>
    </div>
  );
};

export default Chat;
