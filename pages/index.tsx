import Head from 'next/head'
import Logo from '@/components/Logo'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rahm for Congress</title>
        <meta name="description" content="Tayler Rahm for Congress" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <Logo className={styles.logo} />
          <div>Coming Soon...</div>
        </div>
      </main>
    </>
  )
}
