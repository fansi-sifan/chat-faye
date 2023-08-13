import styles from "./messages.module.scss";

function SpotifyPlayer({uri}) {
  console.log(uri);
  return (
    <iframe src={`https://open.spotify.com/embed/track/${uri}`} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  );
}

function PodcastMessage({title, link}) {
  console.log(link);
  return (
    <div className={styles.spotifymessage}>
      <div className={styles.container}>
        <div className={styles.right}>
          {/* <div className={styles.title}>{title}</div> */}
          <div className={styles.player}>
            <SpotifyPlayer uri={link} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastMessage;