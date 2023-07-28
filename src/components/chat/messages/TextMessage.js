import styles from "./messages.module.scss";
import Typewriter from "typewriter-effect";

const TextMessage = ({message, sender, checkTypingFinished}) => {

    return (
        <div className={styles.text}>{sender === "王菲" ? 
            <Typewriter 
                onInit={(typewriter) => {
                    typewriter.callFunction(() => checkTypingFinished(false))
                    .typeString(message)
                    .callFunction(() => checkTypingFinished(true))
                    .start();
                }}
                options={{
                    delay: 15,
                    cursor: "",
                }}
            /> : <>{message}</>}
        </div>
    );
}

export default TextMessage;
