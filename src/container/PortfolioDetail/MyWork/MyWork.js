import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ASSETS } from "../../../Assets/Path";
export const MyWork = () => {
  return (
    <div className="mt-20  bg-white min-h-screen " id="Work">
      <h1 data-aos="fade-right" className="headings text-white">My Works</h1>
      <div data-aos="fade-left" className="grid grid-cols-2 gap-x-8  gap-y-8 my-20">
        <OwlCarousel className='owl-theme' loop items={1} margin={10} nav>
          <img src={ASSETS.ABOUT_US} alt="" className="w-full max-h-80" />
        </OwlCarousel>
        <OwlCarousel className='owl-theme' loop items={1} margin={10} nav>
          <img src={ASSETS.ABOUT_US} alt="" className="w-full max-h-80" />
        </OwlCarousel>
        <OwlCarousel className='owl-theme' loop items={1} margin={10} nav>
          <img src={ASSETS.ABOUT_US} alt="" className="w-full max-h-80" />
        </OwlCarousel>
        <OwlCarousel className='owl-theme' loop items={1} margin={10} nav>
          <img src={ASSETS.ABOUT_US} alt="" className="w-full max-h-80" />
        </OwlCarousel>
      </div>
      <div className="mx-auto w-full ">
        <button className="rounded-full border-2  border-white  px-10 py-2 text-white">
          More Work
        </button>
      </div>
    </div>
  );
};
