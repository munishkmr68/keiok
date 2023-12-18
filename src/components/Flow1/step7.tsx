"use client";
import Image from "next/image";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import YourTotal from "@/components/yourtotal";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import SearchIcon from "../../assets/images/icons/search.svg";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import Inputbox from "@/components/inputbox";
import ProductImg from "../../assets/images/prd-img.png";
import Footer from "@/common/Footer";

const Step7 = () => {
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
          <Inputbox
            name="fullname"
            id="fullname"
            autoComplete="fullname"
            placeholder="Full Name"
          />
          <Inputbox
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Email"
          />
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SearchIcon />
            </div>
            <Inputbox
              name="search"
              id="search"
              className="pl-10"
              placeholder="Quickly find your address"
            />
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
    </>
  );
};

export default Step7;
