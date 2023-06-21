import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
import imgDefault from '../../assets/image/placeholder.png'
import { VscDebugBreakpointData } from 'react-icons/vsc';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Block_10 = ({ title, text, listsAbout, listsServices, image, image3, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <section className="w-full flex justify-center md:py-32 py-10">
                <div className="max-w-6xl md:flex md:p-0 px-2 content-reverse flex-row-reverse">
                    <div className="md:w-[50%]">
                        <div className="w-full h-full block">
                            <div className="w-full h-[360px] lg:h-[70%] bg-cover bg-center"
                                style={{ backgroundImage: `url("${image ? image : imgDefault}")` }}>
                            </div>
                            <div className=" hidden lg:block w-full h-[30%] mt-2">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={10}
                                    slidesPerView={3}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 10
                                          },
                                          480: {
                                            slidesPerView: 1,
                                            spaceBetween: 10
                                          },
                                          640: {
                                            slidesPerView: 3,
                                            spaceBetween: 10
                                          }
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    navigation
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                >
                                    {
                                        rpdata?.stock?.slice(3,16).map((item, index) => {
                                            return (
                                                <SwiperSlide key={index} className=" w-[80px] lg:w-[150px]  h-[80px] lg:h-[180px] bg-center bg-cover" style={{ backgroundImage: `url("${item}")` }} ></SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[50%] py-4 md:px-6 px-3 self-center md:text-start text-center">
                        {
                            sloganPrincipal ?
                                rpdata?.dbPrincipal?.licensed.length > 1 ?
                                    <h2 className='pb-3 capitalize'>
                                        {rpdata?.dbPrincipal?.licensed}
                                    </h2>
                                    : <h2 className='pb-3 capitalize'>we have {rpdata?.dbPrincipal?.exprYears} years of experience </h2>
                                :
                                <h2 className='pb-3 capitalize'>
                                    {
                                        title ? title :
                                            <span className='lowercase text-[18px]'>
                                                {`default title={'frase'}`} o
                                                {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                            </span>
                                    }
                                </h2>
                        }
                        <p className='pb-3'>
                            {
                                text ? text :
                                    <span>{`para agregar el texto -> text={'description'}`}
                                        <br />{'para agregar lista de about -> listsAbout={true}'}
                                        <br />{'para agregar lista de servicios -> listsServices={true}'}
                                    </span>
                            }
                        </p>
                        <div className="flex md:flex-row  py-3">
                            <div className="md:w-[50%] w-full">
                                {
                                    listsAbout ?
                                        <ul className='grid pb-5'>
                                            {
                                                rpdata?.dbAbout?.[0].list.length > 1 ?
                                                    rpdata?.dbAbout?.[0].list.map((item, index) => {
                                                        return (

                                                            <li key={index} className="py-2 flex items-center">
                                                                <VscDebugBreakpointData />
                                                                <span className="pl-2">{item}</span>
                                                            </li>
                                                        )
                                                    })
                                                    : null
                                            }
                                        </ul>
                                        : null
                                }
                                {
                                    listsServices ?
                                        <ul className="block pb-5">
                                            {rpdata?.dbServices?.slice(0, 4).map((item, index) => {
                                                return (
                                                    <li key={index} className="py-1 flex items-center">
                                                        <VscDebugBreakpointData />
                                                        <span>{item.name}</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        : null
                                }
                            </div>
                            <div className="md:w-[50%] bg-contain bg-no-repeat bg-center bg-white shadow-2xl rounded-3xl" style={{ backgroundImage: `url("${rpdata?.dbPrincipal?.logo}")` }} ></div>
                        </div>
                        <div>
                            <ButtonContent />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Block_10;