import styles from "@/styles/Home.module.scss";

function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.header}>
          <p className={styles.title}>LyricsEcho</p>
          <p className={styles.subtitle}>a song makes you feel a thought</p>
      </div>
      {/* <div className={styles.explanation}>
        <p>Describe your current mood, feelings, and find the perfect lyrics.</p>
      </div> */}
    </div>
  );
}
  
export default Introduction;
  