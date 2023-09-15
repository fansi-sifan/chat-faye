import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import TypingIndicator from "./TypingIndicator";
import styles from "./response.module.scss";
import {useSpring, animated} from 'react-spring';

const Response = ({loading, messages}) => {
  const {transform, opacity} = useSpring({
    from: { transform: 'translate3d(0, -40px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    config: { mass: 1, tension: 210, friction: 20 }
  });

  //automatically scroll to bottom when Joseph is typing
  const [counter, setCounter] = useState(0)
  const counterRef = useRef(0);
  const [typingFinished, setTypingFinished] = useState(false)
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: 'nearest' })
  }
  
  const checkTypingFinished = (bool) => {
    setTypingFinished(bool);
  }

  useEffect(() => {
    scrollToBottom()
    
    // reload component while typing is not finished
    if(typingFinished == false) {
      counterRef.current += 1;
      const timer = setTimeout(() => {
        setCounter(counter + 1);
      }, 200);

      return () => clearTimeout(timer);

    } 
    
  }, [messages, loading, typingFinished, counter]);
  
  return (
    <div className={styles.responseContainer}>
      {messages.map((message, index) => 
        <div key={index}>
          <Message
            message={message.message}
            link={message.link}
            sender={message.sender}
            timestamp={message.timestamp}
            type={message.type}
            checkTypingFinished={checkTypingFinished}
          />
        </div>
      )}

      {loading && <TypingIndicator
        sender="coldplay"
       />}
       <div ref={messagesEndRef} />
       
    </div>
  );
};

export default Response;
