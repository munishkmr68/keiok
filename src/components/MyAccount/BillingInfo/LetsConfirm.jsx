"use client";
import { useState } from "react";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import ChangeBilling from "@/components/MyAccount/BillingInfo/ChangeBilling";

const LetsConfirm = () => {
  const [showChangeBilling, setShowChangeBilling] = useState(false);
  const [showLetsConfirm, setShowLetsConfirm] = useState(true);

  const handleBackClick = () => {
    setShowLetsConfirm(false);
    setShowChangeBilling(true);
  };

  return (
    <>
      {showLetsConfirm && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center  cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4 stroke-current" />
            </span>
            <h3 className="mb-4 mt-8">Let’s confirm your changes</h3>
            <p className="text-t4 mb-0 text-base ">
              Your delivery and billing day will be changed to the 1st, every 3
              months.
            </p>
            <button className="primary-button mt-8">Confirm</button>
          </div>

          <div className="max-w-[484px] mx-auto px-4 py-8">
            <div className="mt-16">
              <Language />
            </div>
          </div>
          <Footer />
        </>
      )}
      {showChangeBilling && <ChangeBilling />}
    </>
  );
};

export default LetsConfirm;
