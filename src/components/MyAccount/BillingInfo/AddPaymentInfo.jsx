"use client";
import { useState } from "react";
import Image from "next/image";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/solid";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import LockIcon from "../../../assets/images/icons/lock-customizable.svg";
import PaymentIcon from "../../../assets/images/icons/payment-group.png";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right.svg";
import SetupCard from "@/components/MyAccount/BillingInfo/SetupCard";
import PaymentInfo from "@/components/MyAccount/BillingInfo/PaymentInfo";

const AddPaymentInfo = () => {
  const [showAddPaymentInfo, setShowAddPaymentInfo] = useState(true);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [showSetupCard, setShowSetupCard] = useState(false);

  const handleButtonClick = () => {
    setShowPaymentInfo(false);
    setShowSetupCard(true);
    setShowAddPaymentInfo(false);
  };

  const handleBackClick = () => {
    setShowPaymentInfo(true);
    setShowSetupCard(false);
    setShowAddPaymentInfo(false);
  };

  return (
    <>
      {showAddPaymentInfo && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <div className="flex flex-col items-center text-center">
              <LockCircleIcon className="mb-6 mt-8" />
              <h3 className="mb-4">Add Payment Info</h3>
              <p className="text-t4 mb-8 text-base ">
                We’ll only use your backup payment method if we can’t process
                your main one.
              </p>
            </div>
            <div className="flex justify-end items-center gap-2">
              <span className="text-t4 text-[10px]">End-to-end encrypted</span>{" "}
              <LockIcon className="w-3 h-3 text-lock" />
            </div>
            <div
              className="border border-inputcolor p-4 flex items-center gap-2.5 justify-between rounded-[3px] mb-1.5 cursor-pointer"
              onClick={handleButtonClick}
            >
              <div>
                <p className="text-base sm:text-lg text-t3 mb-2">
                  Credit or Debit Card
                </p>
                <Image className="max-w-[159px]" src={PaymentIcon} alt="img" />
              </div>
              <ArrowRightIcon />
            </div>
          </div>

          <div className="max-w-[484px] mx-auto px-4 py-8">
            <div className="mt-16">
              <Language />
            </div>
          </div>
          <Footer />
        </>
      )}
      {showPaymentInfo && <PaymentInfo />}
      {showSetupCard && <SetupCard />}
    </>
  );
};

export default AddPaymentInfo;
