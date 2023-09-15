import Head from 'next/head'
import Introduction from "../components/Introduction";
import Chat from "../components/chat/Chat";
import Footer from "../components/Footer";
import SingerDropdown from "../components/SingerDropdown"; // Import the new component
import styles from "../styles/Home.module.scss";
import { useState } from "react";

export default function Home() {
  const [selectedSinger, setSelectedSinger] = useState('');

  return (
    <>
      <Head>
        <title> Lyrics Echo</title>
        <meta name="description" content="Find the perfect song" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeParent}>
        <div className={styles.home}>
          <Introduction />
          <div className={styles.singerDropdownContainer}>
            <SingerDropdown selectedSinger={selectedSinger} setSelectedSinger={setSelectedSinger} />
          </div>
          <div className={styles.homebody}>
            {selectedSinger && <Chat key={selectedSinger} selectedSinger={selectedSinger} />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}


