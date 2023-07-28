import { useState, useEffect } from 'react';
import styles from "./response.module.scss";
import UserIcon from './UserIcon';

function TypingIndicator({sender}) {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dotCount === 3) {
        setDotCount(0);
      } else {
        setDotCount(dotCount + 1);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [dotCount]);

  return (
    <div className={styles.typingIndicator}>
        <UserIcon user={sender} />
        <div className={styles.textcontainer}>
            <p>{sender} is typing</p>
            <p>
                {dotCount === 0 && '.'}
                {dotCount === 1 && '..'}
                {dotCount === 2 && '...'}
            </p>
        </div>
    </div>
  );
}

export default TypingIndicator;
