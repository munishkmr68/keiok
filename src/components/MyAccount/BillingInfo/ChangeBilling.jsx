"use client";
import { useState } from "react";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Day from "./Day";
import BillingInfo from "@/components/MyAccount/BillingInfo/BillingInfo";
import LetsConfirm from "./LetsConfirm";

const ChangeBilling = () => {
  const [showBillingInfo, setShowBillingInfo] = useState(false);
  const [showChangeBilling, setShowChangeBilling] = useState(true);
  const [showLetsConfirm, setShowLetsConfirm] = useState(false);

  const handleClick = () => {
    setShowChangeBilling(false);
    setShowBillingInfo(false);
    setShowLetsConfirm(true);
  };

  const handleBackClick = () => {
    setShowChangeBilling(false);
    setShowBillingInfo(true);
    setShowLetsConfirm(false);
  };

  return (
    <>
      {showChangeBilling && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center  cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4 stroke-current" />
            </span>
            <h3 className="mb-4 mt-8">Choose a new delivery & billing day</h3>
            <p className="text-t4 mb-0 text-base ">
              Currently your subscription delivers and is billed on the{" "}
              <b>14th, every 3 months.</b> If you want, you can change the
              delivery and billing day below.
            </p>
            <div className="mt-6 w-full mb-2 text-t5 text-xs">
              Your new delivery and billing day
            </div>

            <div className="flex gap-4 items-center">
              <div className="max-w-[172px] w-full">
                <Day />
              </div>
              <span className="text-t4">every 3 months</span>
            </div>

            <button className="primary-button mt-8" onClick={handleClick}>
              Review & Confirm
            </button>
            <button className="primary-button-outlined mt-2">Cancel</button>
          </div>

          <div className="max-w-[484px] mx-auto px-4 py-8">
            <div className="mt-16">
              <Language />
            </div>
          </div>
          <Footer />
        </>
      )}
      {showBillingInfo && <BillingInfo />}
      {showLetsConfirm && <LetsConfirm />}
    </>
  );
};

export default ChangeBilling;
