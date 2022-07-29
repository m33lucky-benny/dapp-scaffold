import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>The Ethereum Merge</title>
        <meta
          name="description"
          content="The Ethereum Merge"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
