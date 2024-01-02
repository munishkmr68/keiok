import React from "react";
import Image from "next/image";
import userImg from "../../../../assets/images/user-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import ArrowbottomIcon from "../../../../assets/images/icons/arrowbottomicon.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Faq from "./faq";

const Sponsor = ({ onContinueClick, onBackClick }) => {
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
      <div className="max-w-[484px] mx-auto  px-4">
        <h3 className="mb-2 mt-5">Confirm your sponsor</h3>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-3">
          <span className="text-bg1 text-base sm:text-lg font-medium">
            Joining as a Brand Affiliate is free and easy{" "}
          </span>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto mt-8 px-4">
        <div className="border-t border-gray py-6">
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
      <div className="max-w-[484px] mx-auto px-4">
        <Faq />
        <div className="mx-auto mt-24">
          <div className="border-gray border-t border-b py-4 flex items-center gap-2.5 justify-between">
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
          <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
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

export default Sponsor;
