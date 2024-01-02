import React from "react";
import Image from "next/image";
import userImg from "../../../../assets/images/user-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import ArrowbottomIcon from "../../../../assets/images/icons/arrowbottomicon.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Faq from "./faq";

const Review = ({ onContinueClick, onBackClick }) => {
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
        <h3 className="mb-2 mt-5">Review and start earning</h3>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-3">
          <span className="text-bg1 text-base sm:text-lg font-medium">
            Joining as a Brand Ambassador is free and easy
          </span>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 pt-2">
        <div className="my-6 pt-6 border-t border-gray">
          <div className="mb-4 pb-1">
            <div className="text-t2 font-medium mb-[5px]">
              Brand Ambassador Agreement
            </div>
            <fieldset className="flex flex-col gap-4 mt-3">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="w-5 flex justify-center">
                  <input
                    id="brandaffiliate"
                    className="accent-blue checked:w-20 checked:h-20"
                    type="checkbox"
                    name="status"
                  />
                </span>
                <label
                  htmlFor="brandaffiliate"
                  className="text-t3 leading-[21px]"
                >
                  I have read & agree
                </label>
                <a href="#" className="block w-full">
                  Download
                </a>
              </div>
            </fieldset>
          </div>
          <div className="mb-4 pb-1">
            <div className="text-t2 font-medium mb-[5px]">Privacy Policy</div>
            <fieldset className="flex flex-col gap-4 mt-3">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="w-5 flex justify-center">
                  <input
                    id="brandaffiliate"
                    className="accent-blue checked:w-20 checked:h-20"
                    type="checkbox"
                    name="status"
                  />
                </span>
                <label
                  htmlFor="brandaffiliate"
                  className="text-t3 leading-[21px]"
                >
                  I have read & agree
                </label>
                <a href="#" className="block w-full">
                  Download
                </a>
              </div>
            </fieldset>
          </div>
          <div className="mb-4 pb-1">
            <div className="text-t2 font-medium mb-[5px]">
              Consent to Electronic Record
            </div>
            <fieldset className="flex flex-col gap-4 mt-3">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="w-5 flex justify-center">
                  <input
                    id="brandaffiliate"
                    className="accent-blue checked:w-20 checked:h-20"
                    type="checkbox"
                    name="status"
                  />
                </span>
                <label
                  htmlFor="brandaffiliate"
                  className="text-t3 leading-[21px]"
                >
                  I have read & agree
                </label>
                <a href="#" className="block w-full">
                  Download
                </a>
              </div>
            </fieldset>
          </div>
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
        <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
          <div className="w-full">
            <h6 className="text-base">
              Enrollment type:
              <a
                href="#"
                className="font-normal text-xs float-right mt-1 flex items-center"
              >
                Change <ArrowbottomIcon className="ml-2" />
              </a>
            </h6>
            <p className="text-sm leading-6">Business</p>
          </div>
        </div>
        <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
          <div className="w-full">
            <h6 className="text-base">
              Business Info & Address:
              <a
                href="#"
                className="font-normal text-xs float-right mt-1 flex items-center"
              >
                Change <ArrowbottomIcon className="ml-2" />
              </a>
            </h6>
            <p className="text-sm leading-6">
              XYZ LLC
              <br />
              September 2nd, 2020
              <br />
              3334 Charles Lane
              <br />
              Davenport, Florida 33837
            </p>
          </div>
        </div>
        <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
          <div className="w-full">
            <h6 className="text-base">
              Full Name & Address:
              <a
                href="#"
                className="font-normal text-xs float-right mt-1 flex items-center"
              >
                Change <ArrowbottomIcon className="ml-2" />
              </a>
            </h6>
            <p className="text-sm leading-6">
              Erica Jones
              <br />
              3836 E Stiles Ln
              <br />
              Apt 1<br />
              Gilbert, AZ 85295-0150
            </p>
          </div>
        </div>
        <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
          <div className="w-full">
            <h6 className="text-base">
              Contact Information:
              <a
                href="#"
                className="font-normal text-xs float-right mt-1 flex items-center"
              >
                Change <ArrowbottomIcon className="ml-2" />
              </a>
            </h6>
            <p className="text-sm leading-6">
              j......2@gmail.com
              <br />
              .........54
              <br />
            </p>
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
          label="Enroll as a Brand EarnMyWay"
        />
      </div>
    </>
  );
};

export default Review;
