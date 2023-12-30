// Step1.js

import React, { useState } from "react";
import Image from "next/image";
import userImg from "../../../assets/images/user-img.png";
import ClipartImg from "../../../assets/images/clipart-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import Faq from "./faq";

interface Step1Props {
  onContinueClick: () => void;
}

const Step1: React.FC<Step1Props> = ({ onContinueClick }) => {
  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    onContinueClick();
    // Delay the scroll operation to allow time for rendering
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };
  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <h3 className="mt-12 mb-6">Choose your path</h3>
      </div>

      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-8">
          <span className="text-bg1 text-base sm:text-lg font-medium">
            Joining is free and easy
          </span>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto px-4 py-6">
        <ul className="space-y-1  sm:text-lg text-base text-t4">
          <li className="flex items-center gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span>keiok handles all shipping & returns for you</span>
          </li>
          <li className="flex items-center  gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span>No order minimums</span>
          </li>

          <li className="flex items-center  gap-2">
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
                  className="accent-blue"
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

      <div className="max-w-[484px] mx-auto px-4 py-12">
        <div className="flex gap-4 font-medium text-base sm:text-lg justify-between">
          <div className="flex flex-col items-center  gap-4 flex-1">
            <Image
              className="max-w-[200px] w-full"
              src={userImg}
              alt="user-img"
            />
            Jancy Wade
          </div>
          <div className="flex flex-col items-center gap-4 flex-1">
            <Image
              className="max-w-[200px] w-full"
              src={ClipartImg}
              alt="user-img"
            />
            You
          </div>
        </div>
        <h3 className="mt-[52px] sm:mt-20 text-t2 text-center">
          Welcome to MY shop!
        </h3>
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="max-w-[484px] mx-auto px-4 py-8">
        <ButtonNextStep
          handleClick={handleButtonClick}
          amt=""
          label="Continue"
        />
      </div>
    </>
  );
};

export default Step1;
