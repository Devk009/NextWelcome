import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Next.js Hello World</title>
        <meta name="description" content="Hello World Next.js application - Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, World!
        </h1>

        <p className={styles.description}>
          Welcome to the Home page
        </p>

        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn more about us and our services.</p>
          </Link>

          <Link href="/contact" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Get in touch with our team.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Next.js Hello World</p>
      </footer>
    </div>
  );
}