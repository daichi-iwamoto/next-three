import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadate: Metadata = {
  title: "Next Three",
};

export default function Index() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <Image src="/next-three.svg" alt="logo" fill />
      </div>
      <h1 className={styles.title}>Next Three</h1>
      <p className={styles.description}>
        React 上でお手軽に Three.js を使用できる
        <br />
        <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">
          react-three-fiber
        </a>
        <br className={styles.sm} />を Next.js 上で試してみたデモページです。
      </p>

      <div className={styles.demoList}>
        <Link href="/demo/geometry">
          <div className={styles.demo}>
            <h2>Geometry Demos</h2>
            <p>
              描画するオブジェクトの形を指定する
              ジオメトリをいくつか試したデモページ
            </p>
          </div>
        </Link>

        <Link href="/demo/material">
          <div className={styles.demo}>
            <h2>material Demos</h2>
            <p>
              描画するオブジェクトの材質を指定する
              マテリアルをいくつか試したデモページ
            </p>
          </div>
        </Link>

        <Link href="/demo/light">
          <div className={styles.demo}>
            <h2>Light Demos</h2>
            <p>描画したオブジェクトを照らすライトをいくつか試したデモページ</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
