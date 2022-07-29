// Next, React
import { FC } from "react";
import Image from 'next/image'
import heroSection from '../../../public/hero.png'

export const HomeView: FC = ({ }) => {
 

  return (
<div>
<Image
        src={heroSection}
        alt="hero-section"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
</div>
  
  );
};
