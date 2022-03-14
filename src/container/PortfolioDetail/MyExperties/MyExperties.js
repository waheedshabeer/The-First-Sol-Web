import React, { useEffect, useState } from "react";
import aos from 'aos'
import 'aos/dist/aos.css'
 
import { categoriesRef, developersRef } from "../../../firebase/firebase";

// import { Flip, Fade, Rotate, Zoom, Bounce, Roll , Reveal } from 'react-reveal'
export const MyExperties = ({ userData }) => {
  const [ExpertiesList, setExpertiesList] = useState([])
  useEffect(() => {
    aos.init({
      duration: 3000,
      offset: 150,
      disable: 'mobile'
      // delay: 100,
    })

    categoriesRef.get().then(response => {
      let arr = [];
      response.forEach((item) => {
        userData?.technologies?.length > 0 && userData?.technologies.map((subItem => {

          if (subItem === item.data().Category) {
            arr.push(item.data())
          }
        }))
      })
      setExpertiesList(arr)
    })

    return () => {
    }
  }, [userData])

  console.log(ExpertiesList, "YES")
  // console.log(userData.technologies)
  return (

    <div className="mt-20 text-left overflow-hidden" id="Service">
      <h1 data-aos="fade-right" className="headings">My Experties</h1>

      <div data-aos="fade-left" className="grid grid-cols-1 sm:grid-cols-2 my-20  ">
        {/* first grid column */}
        {
          ExpertiesList.length > 0 && ExpertiesList.map((item, index) => {
            return <div className={`p-2 sm:p-5 md:p-8 ${(index + 1) % 2 === 0 ? "border-b" : "border-b border-r "} border-#EFEFEF`}>
              <img src={item.Icon} alt="" className="w-20 h-20 object-contain" />
              <h1 className="text-lg sm:text-xl md:text-2xl pt-4 font-semibold">{item.Category}</h1>
              <p className="pt-4 w-full sm:w-11/12 font-medium text-xs sm:text-sm md:text-lg text-justify">
                {item?.Description ? item.Description.substr(0,140).concat('...') : "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
              <div
                style={{ color: "#4DBCE9" }}
                className="font-medium pt-3 sm:pt-6 text-xs sm:text-lg  cursor-pointer  transform duration-700 hover:scale-x-105">
                <p> Head of desgin at Calvino</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};
