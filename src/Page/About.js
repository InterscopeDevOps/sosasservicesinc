import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";
import ValuesOne from "../components/values/Values_1";
import BlockPrincipal from "../components/block/Block_6";
import BlockSecondary from "../components/block/Block_11";

function About() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="About">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="About"
          Subheader="About"
          bgimg={`${rpdata?.gallery?.[9]}`}
        />
        <BlockPrincipal
          title={'a little about us'}
          text={rpdata?.dbAbout?.[0]?.text}
          image={rpdata?.gallery?.[18]}
          image1={rpdata?.gallery?.[16]}
          image3={rpdata?.gallery?.[15]}
          image2={rpdata?.gallery?.[10]}
          image4={rpdata?.gallery?.[17]}
          listsAbout
        />
        <ValuesOne
          image={rpdata?.gallery?.[5]}
          image1={rpdata?.gallery?.[9]}
          image2={rpdata?.gallery?.[8]} />

        <BlockSecondary
          title={rpdata?.dbSlogan?.[2]?.slogan}
          text={rpdata?.dbHome?.[1]?.text}
          image={rpdata?.gallery?.[8]}
          image3={rpdata?.gallery?.[2]}
        />
      </div>
    </BaseLayout>
  );
}

export default About;
