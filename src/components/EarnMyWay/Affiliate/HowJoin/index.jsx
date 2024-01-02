import React from "react";
import Image from "next/image";
import userImg from "../../../../assets/images/user-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import ArrowbottomIcon from "../../../../assets/images/icons/arrowbottomicon.svg";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Faq from "./faq";

const HowJoin = ({ onContinueClick, onBackClick }) => {
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
        <h3 className="mb-2 mt-5">Choose how to join</h3>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-3">
          <span className="text-bg1 text-base sm:text-lg font-medium">
            Joining as a Brand Affiliate is free and easy
          </span>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 pt-2">
        <div className="my-6 pt-6 border-t border-gray">
          <div className="text-t2 font-medium mb-[18px]">Join as a:</div>
          <fieldset className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="w-5 flex justify-center ">
                <input
                  id="individual"
                  className="accent-blue checked:w-5 checked:h-5"
                  type="radio"
                  name="status"
                />
              </span>
              <label htmlFor="individual" className="text-t1">
                Individual
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-5 flex justify-center">
                <input
                  id="business"
                  className="accent-blue checked:w-5 checked:h-5"
                  type="radio"
                  name="status"
                />
              </span>
              <label htmlFor="business" className="text-t1">
                Business
              </label>
            </div>
          </fieldset>
        </div>

        <Faq />
      </div>

      <div className="max-w-[484px] mx-auto px-4">
        <div className="mx-auto mt-24">
          <div className="border-[#D8D8D8] border-t border-b py-4 flex items-center gap-2.5 justify-between">
            <div className="w-full">
              <h6 className="text-base">
                MY Path:
                <a
                  href="#"
                  className="font-normal text-xs float-right mt-1 flex items-center"
                >
                  Change <ArrowbottomIcon className="ml-2" />
                </a>
              </h6>
              <p className="text-sm leading-6">Brand Affiliate</p>
            </div>
          </div>
          <div className="border-[#D8D8D8] border-b py-4 flex items-center gap-2.5 justify-between">
            <div className="w-full">
              <h6 className="text-base">
                Birthdate:
                <a
                  href="#"
                  className="font-normal text-xs float-right mt-1 flex items-center"
                >
                  Change <ArrowbottomIcon className="ml-2" />
                </a>
              </h6>
              <p className="text-sm leading-6">July 17th, 1987</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto mt-0 px-4">
        <div className="border-b border-gray py-6">
          <h6 className="label mb-4">Your sponsor is</h6>
          <div className="flex items-center gap-4">
            <Image
              className="w-[120px] h-[120px] rounded-full"
              src={userImg}
              alt="user-img"
            />
            <div>
              <h6 className="label mb-0.5">Jancy Wade</h6>
              <p className="">Brand Ambassador</p>
            </div>
          </div>
        </div>
        <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
          <div className="w-full">
            <h6 className="text-base">
              Your website name is:
              <a
                href="#"
                className="font-normal text-xs float-right mt-1 flex items-center"
              >
                Change <ArrowbottomIcon className="ml-2" />
              </a>
            </h6>
            <p className="text-sm leading-6">JancyWade.keiok.com</p>
          </div>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto pb-10 px-4">
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
          label="Continue"
        />
      </div>
    </>
  );
};

export default HowJoin;
