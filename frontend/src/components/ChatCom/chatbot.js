import React, { useState } from 'react';
import './chatbot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';


const steps = [
  {
    question: ["Hi", "Hey", "How are you", "Is anyone there?", "Hello", "Good day"],
    answer: ["Hey, Welcome to Virtual Lab", "Hi there, what can I do for you?", "Hi there, how can I help?"]
  },
  {
    question: ["What are the subjects you have?", "How many subjects do you have?", "How can I select subjects?"],
    answer: ["You can select a stream when you are registering. Subjects will appear based on the stream you select when you register."]
  },
  {
    question: ["Thanks", "Thank you", "That's helpful", "Thanks a lot!"],
    answer: ["Happy to help!", "Any time!", "My pleasure"]
  },
  {
    question: ["What are the practicals I can learn?", "What kinds of practicals are there?", "What do you have?"],
    answer: ["You can learn practicals based on the stream you choosen"]
  },
  {
    question: ["Do you take quizzes?", "How Can I attempt quizzes?", "Can do quiz?", "How can I do quizzes?"],
    answer: ["You have quiz for each practicals", "In quiz you can get instant question and percentage for whole subject"]
  },
  {
    question: ["How to complete practical", "Tell me about practicals"],
    answer: ["You can get theory part of the practical, steps for complete practicals, images will be generated for each steps"]
  },
  {
    question: ["Is this practical difficult?", "How hard is this practical?", "Difficulty level of this practical?"],
    answer: ["The difficulty level varies depending on the practical. Some are easy to follow, while others may require more effort."]
  },
  {
    question: ["I need help", "Can you assist me?", "Help me with this practical"],
    answer: ["Sure, I'm here to help! What do you need assistance with?"]
  },
  {
    question: ["Are there any additional resources?", "Where can I find more information?", "Any recommended readings?"],
    answer: ["Yes, we provide additional resources such as articles, videos, and reference materials to enhance your learning experience."]
  },
  {
    question: ["How can I track my progress?", "Is there a way to monitor my performance?", "Can I see my progress?"],
    answer: ["You can track your progress through our dashboard, where you'll find statistics, quizzes scores, and completion status for each practical."]
  },
  {
    question: ["Can I provide feedback?", "How can I give my opinion?", "Do you accept suggestions?"],
    answer: ["Absolutely! We value your feedback. You can provide your opinions and suggestions through our feedback form or directly contact our support team."]
  },
  {
    question: ["What do you do", "What do you have", "What I can do here"],
    answer: ["You can get practicals with generated image, quizzes, and get feedback"]
  },
  {
    question: ["Bye", "Goodbye", "See you later", "I'm leaving"],
    answer: ["See you later, keep learning", "Have a nice day", "Bye! Come back again soon."]
  }
];

const Chatbot = () => {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { type: 'user', text: input };
    const botMessage = getBotResponse(input);

    setChat([...chat, userMessage, botMessage]);
    setInput('');
  };

  const getBotResponse = (userInput) => {
    const step = steps.find(step =>
      step.question.some(q => q.toLowerCase() === userInput.toLowerCase())
    );
    if (step) {
      const randomAnswer = step.answer[Math.floor(Math.random() * step.answer.length)];
      return { type: 'bot', text: randomAnswer };
    }
    return { type: 'bot', text: "Sorry, I didn't understand that. Can you rephrase?" };
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
      <img src="/pictures/chatprofile.jpg" className='chatRobot'/>
        <h2>Virtual Lab Chatbot</h2>
        <button className="close-button" onClick={() => document.querySelector('.chatbot-container').style.display = 'none'}>×</button>
      </div>
      <div className="chatbot-messages">
        {chat.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.type}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && handleSend()} 
          placeholder="Enter your question"
        />
        <button onClick={handleSend}><FontAwesomeIcon icon={faTelegram} className=' text-3xl' />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
