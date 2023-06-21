import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { GiHandSaw, GiSofa } from "react-icons/gi";
import { IoMdHammer } from "react-icons/io";
// import { FaHandshake } from "react-icons/fa";

import imgDefault from '../../assets/image/placeholder.png'


function Values_2({ image1 }) {
  const { rpdata } = useContext(GlobalDataContext);

  const valuesData = [
    {
      title: rpdata?.dbValues?.[0].title,
      description: rpdata?.dbValues?.[0].description,
      icon: (
        <IoMdHammer fontSize={70} className="bg-2 text-white rounded-full p-4" />
      ),
    },
    {
      title: rpdata?.dbValues?.[1].title,
      description: rpdata?.dbValues?.[1].description,
      icon: (
        <GiSofa
          fontSize={70}
          className="bg-white color-2 rounded-full p-4 border-[2px] border-gray-500"
        />
      ),
    },
    {
      title: rpdata?.dbValues?.[2].title,
      description: rpdata?.dbValues?.[2].description,
      icon: (
        <GiHandSaw
          fontSize={70}
          className="bg-2 text-white rounded-full p-4"
        />
      ),
    },
  ];

  return (
    <div className="my-5">
      <div className="md:w-2/3 w-full md:text-start text-center  md:mx-auto mt-6">
        <h5>{rpdata?.dbPrincipal?.name}</h5>
        <h4 className="color-2">{rpdata?.dbSlogan?.[2].slogan}</h4>
      </div>
      <div className="md:w-4/5 md:mx-auto w-full flex flex-col md:flex-row md:mb-0 mb-10">
        <div className="md:w-[60%]">
          {valuesData.map((items, index) => {
            return (
              <div
                key={index}
                className="bg-white w-4/5 mx-auto text-start flex md:flex-row flex-col my-6"
                data-aos="fade-right" data-aos-duration="1000"
              >
                <div className="flex flex-col justify-center items-center md:p-4 md:text-center text-center md:w-[30%]">
                  {items.icon}
                  <span className="capitalize">{items.title}</span>
                </div>
                <div className="p-4 border-l-[1px] border-gray-500 md:w-[70%]">
                  <p className="md:text-start">{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:w-[40%] w-full md:h-auto h-[300px] my-5 md:my-0">
          <div
            className="w-full md:h-[500px] h-[350px] bg-cover bg-center  rounded-md"
            style={{ backgroundImage: `url("${image1 ? image1 : imgDefault}")` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Values_2;
