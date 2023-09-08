import Head from 'next/head'
import Introduction from "../components/Introduction";
import Chat from "../components/chat/Chat";
import Footer from "../components/Footer";
// import SingerDropdown from "@/components/SingerDropdown"; // Import the new component
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>DPR IAN</title>
        <meta name="description" content="Find the perfect song from DPR IAN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeParent}>
        <div className={styles.home}>
          <Introduction />
          {/* <SingerDropdown />  */}
          <div className={styles.homebody}>
            <Chat />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}


