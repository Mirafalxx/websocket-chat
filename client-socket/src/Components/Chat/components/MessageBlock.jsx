import { useState } from 'react';

const MessageBlock = ({ socket }) => {
  const [message, setMessage] = useState('');
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('user')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('user'),
        id: `${socket.id}`,
        sockedID: socket.id,
      });
    }

    setMessage('');
  };
  return (
    <div className="message-block">
      <form onSubmit={handleSendMessage}>
        <input name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">отправить</button>
      </form>
    </div>
  );
};

export default MessageBlock;
