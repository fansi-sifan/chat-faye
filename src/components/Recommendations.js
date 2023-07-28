import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from "@/styles/Home.module.scss";

function Recommendations() {
  const podcastTitle = useSelector((state) => state.chat.podcasttitle);

    return (
      <div className={styles.recommendations}>
          <p className={styles.title}>Podcast recommendation</p>
          <p className={styles.body}>{podcastTitle ? "Based on your last question, you might find this podcast useful." : "Once you've asked ChatJoseph a question, a recommendation will be shown."}</p>

        {podcastTitle &&
          <a href="https://app.wakingup.com/theory/series/the-path-of-insight" target="_blank" rel="noreferrer">
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.podcastImg}></div>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{podcastTitle}</div>
                    <div className={styles.subtitle}>Waking Up &gt; Theory &gt; The Path of Insight</div>
                    <div className={styles.link}>Listen now</div>
                </div>
            </div>
          </a>
        }
      </div>
    );
  }
  
  export default Recommendations;
  