import styles from "@/styles/Home.module.scss";

function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.header}>
          <p className={styles.title}>芃芃的菲姐</p>
          <p className={styles.subtitle}>Happy Birthday 芃芃!!!</p>
      </div>
      {/* <div className={styles.explanation}>
        <p>Describe your current mood, feelings, and find the perfect lyrics.</p>
      </div> */}
    </div>
  );
}
  
export default Introduction;
  