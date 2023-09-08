import styles from "../styles/Home.module.scss";

function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.header}>
          <p className={styles.title}>DPR IAN</p>
          <video width="320" height="320" controls style={{objectFit: "cover", objectPosition: "top"}}>
            <source src="/img/dprian.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.subtitle}>Happy Birthday Bevy!</p>
      </div>
      {/* <div className={styles.explanation}>
        <p>Describe your current mood, feelings, and find the perfect lyrics.</p>
      </div> */}
    </div>
  );
}
  
export default Introduction;
  