// Join.js

import React, { useEffect } from 'react';
import Tabs from './tabs';
import ButtonNextStep from "@/common/buttonNextStep";
import {  ChevronLeftIcon } from "@heroicons/react/24/solid";

interface JoinProps {
  onContinueClick: () => void;
  onBackClick: () => void;
}

const Join: React.FC<JoinProps> = ({ onContinueClick, onBackClick }) => {
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
      <div className='mt-11'>
        <Tabs />
      </div>
      <div className="max-w-[484px] mx-auto px-4 py-8 flex items-center gap-3">
        <span className='w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center' onClick={handleBackClick}>
          <ChevronLeftIcon className="w-4 h-4 stroke-current" />
        </span>
        <ButtonNextStep handleClick={handleButtonClick} amt="" label="Sign In to Join" />
      </div>
    </>
  );
};

export default Join;
