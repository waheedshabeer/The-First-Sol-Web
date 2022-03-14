import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const MyWork = () => {
  return (
    <div className="mt-20 overflow-hidden" id="Work">
      <h1 data-aos="fade-right" className="headings">My Works</h1>
      <div data-aos="fade-left" className="grid grid-cols-2 gap-x-8  gap-y-8 my-20 ">
        <OwlCarousel className='owl-theme' loop items={1} margin={10} nav>
          <img src={'../../../Assets/img/Myself/profile-image.webp'} alt="" className="w-full" />
        </OwlCarousel>
        <OwlCarousel className='owl-theme' loop items={1} margin={10} nav>
          <img src={'../../../Assets/img/Myself/profile-image.webp'} alt="" className="w-full" />
        </OwlCarousel>
        <OwlCarousel className='owl-theme' loop items={1} margin={10} nav>
          <img src={'../../../Assets/img/Myself/profile-image.webp'} alt="" className="w-full" />
        </OwlCarousel>
        <OwlCarousel className='owl-theme' loop items={1} margin={10} nav>
          <img src={'../../../Assets/img/Myself/profile-image.webp'} alt="" className="w-full" />
        </OwlCarousel>
      </div>
      <div className=" align-middle">
        <button className="rounded-full border-2 border-black  px-10 py-2">
          More Work
        </button>
      </div>
    </div>
  );
};