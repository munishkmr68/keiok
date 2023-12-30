"use client";
import Image from "next/image";
import ProductImg from "../../assets/images/product-img.png";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import {  ChevronLeftIcon } from "@heroicons/react/24/solid";

interface Step2Props {
  onContinueClick: () => void;
  onBackClick: () => void;
}

const Step2: React.FC<Step2Props> = ({ onContinueClick, onBackClick }) => {
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
      <div className="max-w-[484px] mx-auto  px-4 py-12">
        <Image
          className="mx-auto block w-[154px] h-[154px] sm:h-[200px] sm:w-[200px] rounded-full"
          src={ProductImg}
          alt="product-img"
        />
        <h3 className="my-20 text-t2 text-center">
          Imagine not knowing
          <br />
          about toothpaste
        </h3>
        <Freeshipping />
        <ShoppingWith />
        <div className="mt-20">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="max-w-[484px] mx-auto px-4 py-8 flex items-center gap-3">
        <span className='w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center' onClick={handleBackClick}>
          <ChevronLeftIcon className="w-4 h-4 stroke-current" />
        </span>
        <ButtonNextStep handleClick={handleButtonClick} amt="" label="Sign In to Join" />
      </div>
    </>
  );
};

export default Step2;
