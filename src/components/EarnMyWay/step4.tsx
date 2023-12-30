"use client";
import Image from "next/image";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import Faq from "@/components/Faq";
import TruckIcon from "../../assets/images/icons/truck.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import Carousel from "@/components/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import {  ChevronLeftIcon } from "@heroicons/react/24/solid";


interface Step4Props {
  onContinueClick: () => void;
  onBackClick: () => void;
}

const Step4: React.FC<Step4Props> = ({ onContinueClick, onBackClick }) => {
  const scrollToTop = () => {
    // Smooth scroll to the top with a slight delay
    setTimeout(() => {
      const element = document.scrollingElement || document.documentElement;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); 
  };

  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    onContinueClick();
    scrollToTop();
  };

  const handleBackClick = () => {
    // Call the parent component's function to go back to the previous step
    onBackClick();
    scrollToTop();
  };
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 mt-12">
        <Carousel />
        <h4 className="sm:text-[22px] text-xl font-medium my-5">
          MY lash serum
        </h4>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-3">
          <p className="font-medium text-t4">
            Feel more confident in your natural lashes for as little as
            $20/month
          </p>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto  px-4 py-8">
        <ul className="text-bg1 space-y-1 mb-3">
          <li className="flex items-center gap-2">
            <TruckIcon className="fill-current w-4 h-4" />
            <span className="text-sm font-medium">Free shipping</span>
          </li>
          <li className="flex items-center  gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Cancel anytime</span>
          </li>
        </ul>

        <Faq />
        <div className="mt-24">
          <Freeshipping />
        </div>
        <ShoppingWith />
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="max-w-[484px] mx-auto px-4 py-8 flex items-center gap-3">
        <span className='w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center' onClick={handleBackClick}>
          <ChevronLeftIcon className="w-4 h-4 stroke-current" />
        </span>
        <ButtonNextStep handleClick={handleButtonClick} amt="" label="Get MY lash serum" />
      </div>
    </>
  );
};

export default Step4;
