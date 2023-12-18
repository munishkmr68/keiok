"use client";
import Image from "next/image";
import userImg from "../../assets/images/user-img.png";
import ClipartImg from "../../assets/images/clipart-img.png";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import LashesIcon from "../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import Footer from "@/common/Footer";

const Step5 = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <h3 className="mt-12 mb-6">Are you ready for LASHES?</h3>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-8">
          <ul className="text-t4 space-y-1">
            <li className="flex gap-2">
              <LashesIcon className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Get LASHES in as little as 6 weeks
              </span>
            </li>
            <li className="flex gap-2">
              <SubscribeIcone className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Subscribe because of your lash cycle
              </span>
            </li>
            <li className="flex gap-2">
              <CheckmarkIcon className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Cancel anytime
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto  px-4 py-8">
        <div className="mt-16">
          <Freeshipping />
        </div>
        <ShoppingWith />
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Step5;
