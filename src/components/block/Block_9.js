import React, { useContext } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import { GlobalDataContext } from '../../context/context';
import { ButtonContent } from '../global/boton/ButtonContent';

import imgDefault from '../../assets/image/placeholder.png'


const Block_9 = ({ title, text, listsAbout, listsServices, image1, image2, image3, image4, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);

    return (
        <div className='bg-[#efefef] py-[150px] -mt-28'>
            <div className='w-[95%] md:w-[90%] mx-auto flex md:flex-row-reverse flex-col gap-5 items-center mt-8'>
                <div className='flex md:w-[50%] w-full'>
                    <div className='w-full bg-white mr-0 -mb-20 mt-5 md:mr-2 md:-my-20 px-10 py-12 flex flex-col justify-center text-center md:text-start rounded-md'>
                        {
                            sloganPrincipal ?
                                rpdata?.dbPrincipal?.licensed ?
                                    <h2 className='pb-3 capitalize'>
                                        {rpdata?.dbPrincipal?.licensed}
                                    </h2>
                                    : <h3 className='pb-10 capitalize'>
                                        {
                                            rpdata?.dbPrincipal?.exprYears ?
                                                `we have ${rpdata?.dbPrincipal?.exprYears} years of experience`
                                                : 'we have many years of experience'
                                        }
                                    </h3>
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
                        {
                            listsAbout ?
                                <ul className='grid grid-cols-1 md:grid-cols-2 pb-5'>
                                    {
                                        rpdata?.dbAbout?.[0].list.length > 1 ?
                                            rpdata?.dbAbout?.[0].list.map((item, index) => {
                                                return (

                                                    <li key={index} className="py-2 flex items-center">
                                                        <BsArrowReturnRight />
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
                                <ul className="grid grid-cols-1 md:grid-cols-2 pb-5">
                                    {rpdata?.dbServices?.slice(0, 6).map((item, index) => {
                                        return (
                                            <li key={index} className="py-1 flex items-center">
                                                <BsArrowReturnRight />
                                                <span>{item.name}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                : null
                        }

                        <div>
                            <ButtonContent />
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-full h-auto flex-col mt-20 md:mt-0 md:space-y-0 space-y-2'>
                    <div className='flex'>
                        <div className='w-1/2 md:flex justify-center items-center hidden'>
                            <img
                                src={image1 ? image1 : imgDefault}
                                alt='no found'
                                loading='lazy'
                                className='w-[220px] h-[220px] object-cover rounded-full border-[8px] borderColor'
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                            />
                        </div>
                        <div className='md:w-1/2  w-full  flex md:justify-center justify-start items-center'>
                            <img
                                src={image2 ? image2 : imgDefault}
                                alt='no found'
                                loading='lazy'
                                className='md:w-[350px] w-[180px] md:h-[350px] h-[180px] object-cover rounded-full md:-ml-14 ml-0 border-[15px] borderColor1'
                                data-aos="zoom-in"
                                data-aos-duration="2500"
                            />
                        </div>
                    </div>
                    <div className='flex -mt-10'>
                        <div className='md:w-1/2 w-full flex justify-center items-center'>
                            <img
                                src={image3 ? image3 : imgDefault}
                                alt='no found'
                                loading='lazy'
                                className='md:w-[250px] md:h-[250px] w-[300px] h-[300px] object-cover rounded-full  border-[15px] borderColor1 -mr-20 -mt-10'
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            />
                        </div>
                        <div className='w-1/2 md:flex justify-center items-center hidden'>
                            <img
                                src={image4 ? image4 : imgDefault}
                                alt='no found'
                                loading='lazy'
                                className='w-[200px] h-[200px] object-cover rounded-full  border-[8px] borderColor -mb-20 -ml-20'
                                data-aos="zoom-in"
                                data-aos-duration="500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Block_9;