import React, { useState } from 'react';
import bot from '../assets/bot.svg';
import user from '../assets/user.svg';
import send from '../assets/send.svg';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const userMessage = formData.get('prompt');

    // Add user message to messages array
    setMessages((prevMessages) => [...prevMessages, { text: userMessage, sender: 'user' }]);

    // Clear form input
    form.reset();

    // Add loading indicator
    setMessages((prevMessages) => [...prevMessages, { text: '...', sender: 'bot', loading: true }]);

    // Send user message to backend for processing
    try {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from server');
      }

      const data = await response.json();
      const botResponse = data.bot.trim(); // Trim any trailing spaces/newlines

      // Remove loading indicator and add bot response
      setMessages((prevMessages) => [...prevMessages.slice(0, -1), { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      // Display error message
      setMessages((prevMessages) => [...prevMessages, { text: 'Something went wrong', sender: 'bot' }]);
      alert('Something went wrong');
    }
  };

  return (
    <div id="app">
      <div id="chat_container">
        {messages.map((message, index) => (
          <div key={index} className={`wrapper ${message.sender === 'bot' && 'ai'}`}>
            <div className="chat">
              <div className="profile">
                <img src={message.sender === 'bot' ? bot : user} alt={message.sender === 'bot' ? 'bot' : 'user'} />
              </div>
              <div className="message">{message.text}</div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea name="prompt" rows="1" cols="1" placeholder="Ask shem codex..."></textarea>
        <button type="submit">
          <img src={send} alt="send" />
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
