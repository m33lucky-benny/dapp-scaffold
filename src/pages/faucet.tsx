import type { NextPage } from "next";
import Head from "next/head";
import { FaucetView } from "../views";

const Faucet: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Faucet</title>
        <meta
          name="description"
          content="Solana Faucet"
        />
      </Head>
      <FaucetView />
    </div>
  );
};

export default Faucet;
