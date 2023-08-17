import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ChatBody = ({ messages }) => {
  const navigate = useNavigate();
  const [myId, setMyId] = useState(null);

  const handleLeave = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    setMyId(localStorage.getItem('user'));
  }, []);
  return (
    <>
      <header className="header">
        <button className="quit__chat-btn" onClick={handleLeave}>
          Покинуть чат
        </button>
      </header>
      <div className="chat-container">
        {messages.map((message, idx) => {
          console.log(message);
          return (
            <div key={idx} className={message.name === myId ? 'sender-message' : 'receiver-message'}>
              <p>{message.name}</p>
              <div className="message-item">
                <p>{message.text}</p>
              </div>
            </div>
          );
        })}
        {/* <div className="sender-message">
          <p>Вы</p>
          <div className="message-item">
            <p>Hello</p>
          </div>
        </div>
        <div className="receiver-message">
          <p>Вы</p>
          <div className="message-item">
            <p>Hello</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ChatBody;
