import React, { useState, useEffect } from "react";
import BotMessage from "../Chat components/BotMessage";
import UserMessage from "../Chat components/UserMessage";
import Messages from "../Chat components/Messages";
import Input from "../Chat components/Input";
import { Header } from '../Basics/Header'
import Header1 from "../Chat components/Header"
import API from "../Chat components/ChatbotAPI";

import "../../css/chat.css"

export default function Chatbot() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };

  return (
      <>
      <Header/>
    <div className="chatbot">
      <Header1 />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
    </>
  );
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<Chatbot />, rootElement);
