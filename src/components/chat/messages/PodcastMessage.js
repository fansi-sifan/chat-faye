import styles from "./messages.module.scss";

function PodcastMessage({title, link}) {
    return (
    <div className={styles.podcastmessage}>
        <a href={link} target="_blank" rel="noreferrer">
          <div className={styles.container}>
              <div className={styles.right}>
                  <div className={styles.title}>{title}</div>
                  <div className={styles.link}>{link ? "Listen now" : "No link on Spotify"}</div>
              </div>
          </div>
        </a>
      </div>
    );
  }
  
  export default PodcastMessage;
  