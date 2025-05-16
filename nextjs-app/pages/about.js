import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Next.js Hello World</title>
        <meta name="description" content="About our Next.js Hello World application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About Us
        </h1>

        <p className={styles.description}>
          Learn more about our Next.js application
        </p>

        <div className={styles.content}>
          <p>
            This is a simple Hello World application built with Next.js. It demonstrates basic 
            routing and page creation in a Next.js project.
          </p>
          <p>
            Next.js provides an excellent framework for building both static and server-rendered 
            React applications with features like file-based routing, API routes, and built-in CSS support.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <Link href="/" className={styles.button}>
            Back to Home
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Next.js Hello World</p>
      </footer>
    </div>
  )
}