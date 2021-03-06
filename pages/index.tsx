import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js × Three.js Demos</title>
        <meta name="description" content="Next.js × Three.js Demos Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js × Three.js Demos
        </h1>
        <p>
          React上でお手軽にThree.jsを使用できる<a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">react-three-fiber</a>をNext.jsで試してみたデモページです。
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href='/demo/geometry'>
              <a>
                <h2>Geometry Demos &rarr;</h2>
                <p>
                  描画するオブジェクトの形（丸、四角など）を指定する<br />
                  ジオメトリの種類をいくつか試したデモページです
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href='/demo/material'>
              <a>
                <h2>material Demos &rarr;</h2>
                <p>
                  描画するオブジェクトの材質を指定する<br />
                  マテリアルの種類をいくつか試したデモページです
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href='/demo/light'>
              <a>
                <h2>Light Demos &rarr;</h2>
                <p>
                  描画したオブジェクトを照らす<br />
                  ライトの種類をいくつか試したデモページです
                </p>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
