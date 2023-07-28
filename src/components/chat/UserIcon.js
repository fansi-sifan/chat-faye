import { FaUser } from 'react-icons/fa';
import styles from "./response.module.scss";

function UserIcon({user}) {
    return (
        <div className={styles.userIcon}>
            {user === "user" ? 
                <FaUser className={styles.senderUser} /> : <div className={styles.senderJoseph}></div>
            }
        </div>
    
    );
  }
  
  export default UserIcon;
  