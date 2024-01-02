"use client";
import { useState } from "react";
import Language from "@/components/language";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right.svg";
import Footer from "@/common/Footer";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import PaymentInfo from "@/components/MyAccount/AccountInfo/PaymentInfo";

const BillingInfo = () => {
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);

  const handleButtonClick = () => {
    // Toggle the value of showBillingInfo when the button is clicked
    setShowPaymentInfo(!showPaymentInfo);
  };

  return (
    <>
      {showPaymentInfo ? (
        <PaymentInfo />
      ) : (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center">
              <ChevronLeftIcon className="w-4 h-4 stroke-current" />
            </span>
            <h3 className="mt-8 mb-6">Manage Billing Info</h3>
            <div>
              <div className="py-6 border-t border-b border-gray flex items-center justify-between gap-2">
                <div>
                  <div
                    className="text-t2 mb-0.5 sm:text-lg text-base font-medium cursor-pointer"
                    onClick={handleButtonClick}
                  >
                    Manage Payment Info
                  </div>
                </div>
                <ArrowRightIcon />
              </div>
              <div className="py-6 border-b border-gray flex items-center justify-between gap-2">
                <div>
                  <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium">
                    Order History
                  </div>
                </div>
                <ArrowRightIcon />
              </div>
              <div className="py-6 border-b border-gray flex items-center justify-between gap-2">
                <div>
                  <div className="text-t2 mb-0.5 font-medium">
                    Change Delivery & Billing Day
                  </div>
                </div>
                <ArrowRightIcon />
              </div>
            </div>
          </div>

          <div className="max-w-[484px] mx-auto px-4 py-8">
            <div className="mt-16">
              <Language />
            </div>
          </div>

          {showPaymentInfo && <PaymentInfo />}
          <Footer />
        </>
      )}
    </>
  );
};

export default BillingInfo;
