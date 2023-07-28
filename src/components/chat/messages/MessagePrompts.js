import styles from "./messages.module.scss";
import {useSpring, animated} from 'react-spring';

const MessagePrompt = ({sendMessage}) => {
    const { opacity } = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 200 }
      });

    const prompts = [
        // {
        //     buttonText: "歌词全文",
        //     // prompt: "Can you give me the sources for your previous message?"
        // },
        {
            buttonText: "Play on Spotify",
            // prompt: "Can you recommend a podcast based on my last question?"
        }
    ];

    return (
        <animated.div style={{ opacity }}>
            <div className={styles.messagePromptContainer}>
                {prompts.map((prompt, index) => (
                    <p 
                        className={styles.messagePrompt}
                        key={index}
                        // onClick={() => sendMessage(prompt.prompt)}
                        onClick={() => window.location.href = "https://open.spotify.com/track/1NspRmG3eqyCjsiwmt59Ut"}
                        >{prompt.buttonText}</p>
                ))}
            </div>
        </animated.div>
    );
}

export default MessagePrompt;
