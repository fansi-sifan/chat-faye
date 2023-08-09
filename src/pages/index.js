import Head from 'next/head'
import Introduction from "@/components/Introduction";
import Chat from "@/components/chat/Chat";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatColdPlay</title>
        <meta name="description" content="Find the perfect ColdPlay song" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeParent}>
        <div className={styles.home}>
          <Introduction />

          <div className={styles.homebody}>
            <Chat />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

