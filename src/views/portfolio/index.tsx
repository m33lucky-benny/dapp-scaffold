
import { FC } from "react";
//import { SignMessage } from '../../components/SignMessage';
//import { SendTransaction } from '../../components/SendTransaction';
import { StockTracker } from "components/StockTracker";
export const PortfolioView: FC = ({ }) => {

  return (
<div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        {/* <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
        PortfolioView
        </h1> */}
        <StockTracker />
        {/* CONTENT GOES HERE */}
        {/* <div className="text-center">
          <SignMessage/>
          <SendTransaction />
        </div> */}
      </div>
    </div>
  );
};
