// Step1.jsx

import React, { useState } from "react";
import Image from "next/image";
import userImg from "../../../../assets/images/user-img.png";
import ClipartImg from "../../../../assets/images/clipart-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";
import Faq from "./faq";

const Step1 = ({ onContinueClick, onBackClick }) => {
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
      <div className="max-w-[484px] mx-auto px-4">
        <h3 className="mt-12 mb-6">Choose your path</h3>
      </div>

      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <span className="text-bg1 text-base sm:text-lg font-medium">
            Joining is free and easy
          </span>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto px-4 py-6">
        <ul className="space-y-1 sm:text-lg text-base text-t4">
          <li className="flex items-center gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span>keiok handles all shipping & returns for you</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span>No order minimums</span>
          </li>

          <li className="flex items-center gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span>No commitments</span>
          </li>
        </ul>

        <div className="my-6 pt-6 border-t border-gray">
          <div className="text-t2 font-medium mb-[18px]">MY Path:</div>
          <fieldset className="flex flex-col gap-4">
            <div className="flex gap-2">
              <span className="w-5 flex justify-center">
                <input
                  id="draft"
                  className="accent-blue checked:w-5 checked:h-5"
                  type="radio"
                  name="status"
                />
              </span>
              <label htmlFor="draft" className="text-t1">
                Brand Ambassador
              </label>
            </div>
            <div className="flex gap-2">
              <span className="w-5 flex justify-center">
                <input
                  id="published"
                  className="accent-blue checked:w-5 checked:h-5"
                  type="radio"
                  name="status"
                />
              </span>
              <label htmlFor="published" className="text-t1">
                Brand Affiliate
              </label>
            </div>
          </fieldset>
        </div>

        <Faq />

        <div className="mt-24">
          <Language />
        </div>
      </div>

      <Footer />
      <div className="max-w-[484px] mx-auto px-4 py-8 flex items-center gap-3">
        <span
          className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon className="w-4 h-4 stroke-current" />
        </span>
        <ButtonNextStep
          handleClick={handleButtonClick}
          amt=""
          label="Sign In to Join"
        />
      </div>
    </>
  );
};

export default Step1;
