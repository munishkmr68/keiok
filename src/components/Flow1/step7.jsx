"use client";
import { useState } from "react";
import Image from "next/image";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import YourTotal from "@/components/yourtotal";
import GoogleAutocomplete from "@/components/GoogleAutocomplete";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import SearchIcon from "../../assets/images/icons/search.svg";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import Inputbox from "@/components/inputbox";
import ProductImg from "../../assets/images/prd-img.png";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import Lock from "../../assets/images/icons/lock-white.svg";
import ConfirmModal from "../Flow1/ConfirmModal";
import Step8 from "@/components/Flow1/step8";

const Step7 = ({ onContinueClick }) => {
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

  return (

        <>
          <div className="max-w-[484px] mx-auto  px-4">
            <LockCircleIcon className="mb-6 mt-8" />
            <h3 className="mb-6">Where should we ship to?</h3>
            <ul className="text-input1 space-y-1 mb-6 sm:text-lg text-base">
              <li className="flex items-center gap-2">
                <CheckmarkIcon className="w-4 h-4" />
                <span className="font-medium">
                  You can change your address anytime
                </span>
              </li>
              <li className="flex items-center  gap-2">
                <CheckmarkIcon className="w-4 h-4" />
                <span className="font-medium">Cancel anytime</span>
              </li>
            </ul>

            <div className="flex flex-col gap-[9px]">
              <div className="relative">
                <Inputbox
                  name="fullname"
                  id="fullname"
                  autocomplete="fullname"
                  placeholder=""
                  className="floating-input peer"
                />
                <label htmlFor="fullname" className="floating-label">
                  Full Name
                </label>
              </div>

              <div className="relative">
                <Inputbox
                  type="email"
                  id="email"
                  placeholder=""
                  className="floating-input peer"
                />
                <label htmlFor="email" className="floating-label">
                  Email
                </label>
              </div>

              <GoogleAutocomplete 
                InputClassName="!pl-3.5"
                LabelClassName="!pl-0"
                label="Address"
              />

              <div className="relative">
                <Inputbox
                  type="text"
                  id="address"
                  placeholder=""
                  className="floating-input peer"
                />
                <label htmlFor="address" className="floating-label">
                Apt, suite, company, c/o (optional)
                </label>
              </div>

              <span className="text-sm text-blue">+Address 2 (optional)</span>

              <div className="relative">
                <Inputbox
                  name="zipcode"
                  id="zipcode"
                  autocomplete="zipcode"
                  placeholder=""
                  className="floating-input peer"
                />
                <label htmlFor="zipcode" className="floating-label">
                  ZIP code
                </label>
              </div>

              <div className="relative">
                <Inputbox
                  name="city"
                  id="city"
                  autocomplete="city"
                  placeholder=""
                  className="floating-input peer"
                />
                <label htmlFor="city" className="floating-label">
                  City, State
                </label>
              </div>
            </div>
            <hr className="border-gray mt-[30px]" />
            <div className="py-[30px]">
              <YourTotal />
            </div>
            <Freeshipping />
            <div className="flex items-center gap-4 my-7">
              <Image
                className="w-[120px] h-[120px] border border-bg3 shadow-img rounded-full"
                src={ProductImg}
                alt="user-img"
              />
              <div>
                <h6 className="label mb-0.5">MY lash serum</h6>
                <h6 className="label !text-red mb-0.5">3 month supply (2mL)</h6>
                <p className="text-t4 font-medium text-sm sm:text-base">
                  Qty: 1
                </p>
              </div>
            </div>
          </div>
          <div className="bg-pink">
            <div className="max-w-[484px] mx-auto  px-4 py-5">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div>
                  <h6 className="flex items-center gap-2 text-base sm:text-lg font-medium text-2 mb-2.5">
                    <SubscribeIcone className="w-6 h-6" />
                    Delivered & Billed
                  </h6>
                  <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px]">
                    <li className="text-[10px] sm:text-xs text-t4">
                      First Delivery & Billing Date
                    </li>
                    <li className="text-[10px] sm:text-xs text-t4">
                      Next Delivery & Billing Date
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="flex items-center gap-2 text-base sm:text-lg font-medium text-2 mb-2.5">
                    <SubscribeIcone className="w-6 h-6" />
                    Every 3 Months
                  </h6>
                  <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px] sm:text-right">
                    <li className="text-[10px] sm:text-xs text-t4">Today</li>
                    <li className="text-[10px] sm:text-xs text-t4">
                      Jan 16th, 2024
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto px-4 py-8">
            <ShoppingWith />
            <div className="mt-24">
              <Language />
            </div>
          </div>

          <Footer />
          <div className="max-w-[484px] mx-auto px-4 py-8">

        <ButtonNextStep
          handleClick={handleButtonClick}
          label="Continue"
          amt="$60"
        />
      </div>
        </>
    

    );
  };
export default Step7;
