"use client";
import { useState } from "react";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/solid";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import Amex from "../../../assets/images/icons/amex.svg";
import BillingInfo from "@/components/MyAccount/BillingInfo/BillingInfo";
import AddPaymentInfo from "@/components/MyAccount/BillingInfo/AddPaymentInfo";
import Notification from "@/components/notification";
import RemovePaymentModal from "./RemovePaymentModal";
import OrderHistory from "./OrderHistory";
import Arrow from "../../../assets/images/icons/check-circle-white.svg";

const PaymentInfo = ({}) => {
  const [showPaymentInfo, setShowPaymentInfo] = useState(true);
  const [showBillingInfo, setShowBillingInfo] = useState(false);
  const [showAddPaymentInfo, setShowAddPaymentInfo] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);


  const scrollToTop = () => {
    // Smooth scroll to the top with a slight delay
    setTimeout(() => {
      const element = document.scrollingElement || document.documentElement;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleButtonClick = () => {
    setShowAddPaymentInfo(true);
    setShowPaymentInfo(false);
    setShowOrderHistory(false);
  };

  const handleBackClick = () => {
    setShowPaymentInfo(false);
    setShowBillingInfo(true);
    setShowOrderHistory(false);
  };

  const handleEditClick = () => {
    setShowAddPaymentInfo(false);
    setShowPaymentInfo(false);
    setShowOrderHistory(true);
    scrollToTop();
  };

  const openRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };

  const closeRemoveModal = () => {
    setIsRemoveModalOpen(false);
  };

  return (
    <>
      {showPaymentInfo && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <div className="mt-5">
              <Notification
                icon={<Arrow />}
                message="Your Payment Method has been changed"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <LockCircleIcon className="mb-6 mt-8" />
              <h3 className="mb-4">Manage Payment Info</h3>
              <p className="text-t4 mb-8 text-base ">
                Edit your payment details, add a backup, or switch{" "}
                <br className="sm:block hidden" /> your preferred payment
                method.
              </p>
            </div>

            <div className="border border-gray px-4 py-[18px] shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)]">
              <p className=" sm:text-base text-sm text-t2 font-bold mb-3 flex gap-0.5">
                <Amex /> ... 1002
              </p>
              <p className="mb-3 text-t5">
                To remove, add another payment method first
              </p>
              <div className="flex">
                <button className="font-bold text-t2 border border-t2 rounded-[20px] py px-2.5 tracking-wider">
                  PREFERRED
                </button>
                <button
                  onClick={handleEditClick}
                  className="text-sm ml-auto text-blue"
                >
                  Edit
                </button>
                <button
                  onClick={openRemoveModal}
                  className="text-sm ml-auto text-blue"
                >
                  Remove
                </button>
              </div>
            </div>
            <button
              className="primary-button-outlined mt-8 flex items-center gap-4 justify-center"
              onClick={handleButtonClick}
            >
              <PlusIcon className="w-4 h-4 stroke-current" /> Add Payment Method
            </button>
          </div>

          <div className="max-w-[484px] mx-auto px-4 py-8">
            <div className="mt-16">
              <Language />
            </div>
          </div>
          <Footer />
        </>
      )}

      <RemovePaymentModal
        isOpen={isRemoveModalOpen}
        onClose={closeRemoveModal}
      />

      {showBillingInfo && <BillingInfo />}
      {showAddPaymentInfo && <AddPaymentInfo />}
      {showOrderHistory && <OrderHistory />}
    </>
  );
};

export default PaymentInfo;
