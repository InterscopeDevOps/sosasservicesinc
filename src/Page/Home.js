import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Directories from "../components/Home/Directories";
import FormHome from "../components/Home/FormHome";
import Map from "../components/Contact/MapContent";
import BaseLayout from "../components/global/BaseLayout";
import CounterUp from "../components/global/CounterUp";
import ServicesHome from "../components/Home/ContentServicesHome";
import HeroSection from "../components/Home/HeroSection";
import Paletacolor from "../components/global/Paletacolor";
import BlockPrincipal from "../components/block/Block_9";
import BlockSecondary from "../components/block/Block_11";
import BlockAbout from "../components/block/Block_7";
import SlideBlock from "../components/block/SlideLogoForm";
import VideoPromocional from "../components/global/VideoPromocional";
import ContentServices from "../components/Services/ContentServices";
import GalleryContent from "../components/Gallery/GalleryContent";
import Modal from "../components/Home/Modal";
import ValuesOne from "../components/values/Values_4";

// para agregar la frase de los años de experiencia o la licencia agregar sloganPrincipal={true}
// para agregar la lista de about agregar listsAbout={true}
// para agregar la lista de servicios agregar listsServices={true}
// import CustomReviews from "../components/reviews/CustomReviews";

function Home() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Home">
      <div className="md:max-w-full w-full">
        <Modal />
        <HeroSection
          title={rpdata?.dbSlogan?.[1]?.slogan}
          texts={rpdata?.dbValues?.[0].description}
          urlVideo={"https://firebasestorage.googleapis.com/v0/b/imagenes-fc412.appspot.com/o/Electric.mp4?alt=media&token=1f5f7df4-e652-4708-b766-b7644ee1702c"}
          bgImg={rpdata?.gallery?.[3]}
          bgImg1={rpdata?.gallery?.[1]}
          bgImg2={rpdata?.gallery?.[8]}
          bgImg3={rpdata?.gallery?.[9]}
        />
        <BlockPrincipal
          title={rpdata?.dbSlogan?.[4]?.slogan}
          text={rpdata?.dbHome?.[0].text}
          image={rpdata?.gallery?.[13]}
          image1={rpdata?.gallery?.[4]}
          image2={rpdata?.gallery?.[19]}
          image3={rpdata?.gallery?.[7]}
          image4={rpdata?.gallery?.[8]}
          sloganPrincipal={true}
          listsServices={true}
        />
        {/* video promocional */}
        {
          rpdata?.videosPromo?.[0]?.activo ?
            <VideoPromocional
              title={rpdata?.dbSlogan?.[2]?.slogan}
              text={rpdata?.dbAbout?.[1]?.text}
              linkVideo={`${rpdata?.videosPromo?.[0].link}`}
              image={`${rpdata?.videosPromo?.[0].img}`}
              vimeoVideo
            />
            : null
        }
        <SlideBlock
          title={'a little about us'}
          text={rpdata?.dbValues?.[2].description}
          image={rpdata?.gallery?.[23]}
        />
        <Directories />
        <BlockAbout
          title={rpdata?.dbSlogan?.[1]?.slogan}
          subtitle2={'a little about us'}
          text={rpdata?.dbAbout?.[0]?.text}
          image={rpdata?.gallery?.[21]}
          image1={rpdata?.gallery?.[14]}
          image2={rpdata?.gallery?.[15]}
          image3={rpdata?.gallery?.[4]}
          image4={rpdata?.gallery?.[11]}
          listsAbout={true}
        />
        <ValuesOne
          image1={rpdata?.gallery?.[2]}
          image={rpdata?.gallery?.[3]}
          image2={rpdata?.gallery?.[0]}
        />
        <CounterUp image={rpdata?.gallery?.[26]} />
        <BlockSecondary
          title={rpdata?.dbSlogan?.[3]?.slogan}
          text={rpdata?.dbHome?.[1]?.text}
          image={rpdata?.gallery?.[2]}
          image1={rpdata?.gallery?.[11]}
          image2={rpdata?.gallery?.[19]}
          image3={rpdata?.gallery?.[15]}
          image4={rpdata?.gallery?.[10]}
        />
        {/* our reviews */}
        {
          rpdata?.reviews?.isHomeOnly === true ?
            <div className="w-4/5 mx-auto py-[100px]">
              <h1 className="pb-10 text-center">{rpdata?.labels?.general?.titleReviews}</h1>
              <div className={`${rpdata?.reviews?.links?.[0]}`}></div>
            </div>
            : null
        }
        {/* <CustomReviews/> */}
        {/* Gallery cuando es OnePages */}
        {/* Servicios del home */}
        {
          rpdata?.simpleWidgets?.[3]?.activo ?
            <div className="pt-20">
              <ContentServices />
            </div>
            :
            <ServicesHome />
        }
        {/* Paleta de Colores */}
        {
          rpdata?.simpleWidgets?.[3]?.activo ?
            <div className="pt-10 pb-28">
              <h2 className="text-center pb-[50px]">{rpdata?.labels?.general?.titleGallery}</h2>
              <GalleryContent galleryImages={rpdata?.gallery?.length > 0 ? rpdata?.gallery : rpdata?.gallery} />
            </div>
            :
            null
        }
        {
          rpdata?.brandingExtra?.[0]?.activo ?
            <Paletacolor />
            : null
        }
        <div
          className="bgFormHome"
          style={{ backgroundImage: `url("${rpdata?.gallery?.[8]}")` }}
        >
          <div className="relative">
            <FormHome />
          </div>
        </div>
        <Map />
      </div>
    </BaseLayout>
  );
}

export default Home;
