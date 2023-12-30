"use client";
import Image from "next/image";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import CrditDebitPay from "@/components/crditdebitpay";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import ProductImg from "../../assets/images/prd-img.png";
import YourTotal from "@/components/yourtotal";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import Lock from "../../assets/images/icons/lock-white.svg";

const Step8 = ({ onContinueClick }) => {
  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    onContinueClick();
    // Delay the scroll operation to allow time for rendering
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <LockCircleIcon className="mb-6 mt-8" />
        <h3 className="mb-4">Choose how to pay</h3>
        <p className="text-t4 mb-3 sm:text-lg text-base">
          You can change how you pay anytime
        </p>
        <p className="text-t2 sm:text-lg text-base font-bold">
          Secure for peace of mind
        </p>
        <p className="text-t2 sm:text-lg text-base font-bold mb-4">
          Cancel easily online
        </p>
        <CrditDebitPay />
        <hr className="border-gray mt-[30px]" />

        <YourTotal />

        <Freeshipping />
        <h6 className="label mb-4 mt-[30px]">Your Subscription</h6>
        <div className="flex items-center gap-4  mb-5">
          <Image
            className="w-[120px] h-[120px] border border-bg3 shadow-img rounded-full"
            src={ProductImg}
            alt="user-img"
          />
          <div>
            <h6 className="label mb-0.5">MY lash serum</h6>
            <h6 className="label !text-red mb-0.5">3 month supply (2mL)</h6>
            <p className="text-t4 font-medium text-sm sm:text-base">Qty: 1</p>
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
              <ul className="flex flex-col gap-0 gap-1.5 pl-[30px] sm:text-right">
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
          icon={<Lock />}
          handleClick={handleButtonClick}
          amt=""
          label="Continue"
        />
      </div>
    </>
  );
};

export default Step8;
