import styles from "./response.module.scss";
import UserIcon from "./UserIcon";
import TextMessage from "./messages/TextMessage";
import PodcastMessage from "./messages/PodcastMessage";
import {useSpring, animated} from 'react-spring';

const Message = ({message, sender, timestamp, checkTypingFinished, type, link}) => {
    const date = new Date(timestamp);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleTimeString('en-US', options);

    return (
      <div className={`${sender === "user" && styles.messageContainerUser} ${styles.messageContainer}`}>

        <div className={styles.senderIcon}>
            <UserIcon user={sender} />
        </div>
        <div className={styles.textcontainer}>
            {type == "text" && 
                <div className={styles.textbg}>
                    <TextMessage 
                        message={message}
                        sender={sender}
                        checkTypingFinished={checkTypingFinished}
                    />
                </div>
            }
            {type == "podcast" &&
                <div className={styles.podcastbg}>
                    <PodcastMessage 
                        sender={sender}
                        title={message}
                        link={link}
                    />
                </div>
            }
            <p className={styles.timestamp}>
                {formattedTime}
            </p>
        </div>
      </div>
    );
}

export default Message;
