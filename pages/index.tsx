import type { NextPage } from "next";
import Head from "next/head";

export const getServerSideProps = async () => {};

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Angelo Longoria</title>
        <meta
          name="description"
          content="Angelo Longoria personal website and blog"
        />
        <link rel="icon" href="/sword-in-stone.png" />
      </Head>
      <div></div>
    </div>
  );
};

export default Home;
