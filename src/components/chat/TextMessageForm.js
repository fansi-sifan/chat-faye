import { useEffect, useState } from 'react';
import styles from "./chat.module.scss";
import {FaPaperPlane} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';


function TextMessageForm({sendMessage, error}) {
  const [message, setMessage] = useState('');
  const [validationError, setValidationError] = useState('');
  const [showHintPrompts, setShowHintPrompts] = useState(false);
  const amountMessages = useSelector((state) => state.chat.messages.length);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) {
      setValidationError("Message cannot be empty");
      return;
    } 
    sendMessage(message);
    setMessage("");
  };

  const handleChange = (e) => {
    setValidationError("");
    setMessage(e.target.value);

    //check for hint message
    if (!showHintPrompts && amountMessages > 1) {
      setShowHintPrompts(true);
      // dispatch(addChat({
      //   message: "May I remind you that this Joseph AI tends to be very forgetful and will not remember what I just said.",
      //   sender: "Joseph",
      //   type: "text",
      //   vectors: null,
      //   timestamp: Date.now(),
      //   hint: true,
      // }));
      // dispatch(setHintMessageSent());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder=""
        value={message}
        style={error ? { borderColor: "red" } : {}}
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.submit}>
        <FaPaperPlane />
      </button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
      {validationError && <div className={styles.error}>{validationError}</div>}
    </form>
  );
}

export default TextMessageForm;
