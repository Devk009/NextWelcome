import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Next.js Hello World</title>
        <meta name="description" content="Hello World Next.js application - Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact Us
        </h1>

        <p className={styles.description}>
          Get in touch with our team
        </p>

        <div className={styles.content}>
          <p className={styles.contactInfo}>
            Email: hello@example.com<br />
            Phone: (123) 456-7890<br />
            Address: 123 Next.js Ave, React City, 12345
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <Link href="/" className={styles.button}>
            Back to Home
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Next.js Hello World</p>
      </footer>
    </div>
  );
}