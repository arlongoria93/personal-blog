import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GiAncientSword } from "react-icons/gi";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Angelo Longoria</title>
        <meta
          name="description"
          content="Angelo Longoria personal website and blog"
        />
        <link rel="icon" href="/sword-in-stone.png" />
      </Head>
    </div>
  );
};

export default Home;
