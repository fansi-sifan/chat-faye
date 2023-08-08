import styles from "@/styles/Home.module.scss";

function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.header}>
          <p className={styles.title}>Coldplay GPT</p>
          <p className={styles.subtitle}>An AI powered bot that finds the prefect Coldplay song</p>
      </div>
      {/* <div className={styles.explanation}>
        <p>Describe your current mood, feelings, and find the perfect lyrics.</p>
      </div> */}
    </div>
  );
}
  
export default Introduction;
  