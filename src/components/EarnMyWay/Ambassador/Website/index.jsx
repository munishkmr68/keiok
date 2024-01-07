import React from "react";
import Image from "next/image";
import userImg from "../../../../assets/images/user-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import ArrowbottomIcon from "../../../../assets/images/icons/arrowbottomicon.svg";
import Inputbox from "@/components/inputbox";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Faq from "./faq";

const Website = ({ onContinueClick, onBackClick }) => {
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
        <h3 className="mb-2 mt-5">Choose your website name</h3>
      </div>
      <div className="py-8 pt-3 max-w-[484px] mx-auto px-4">
        <div className="border-gray border-t pt-8">
          <div className="flex flex-col gap-[9px]">
            <label className="text-lg text-[#1C1C1C]">keiok.com</label>
            <Inputbox
              name="websitename"
              id="websitename"
              autocomplete="websitename"
              placeholder="Your website name"
            />
          </div>
          <div className="max-w-[484px] mx-auto">
            <button className="dark-button mt-8">Check availability</button>
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4">
        <Faq />
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
              <p className="text-sm leading-6">Brand EarnMyWay</p>
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

export default Website;
