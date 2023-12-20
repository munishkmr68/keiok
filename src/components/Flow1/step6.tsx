"use client";
import Image from "next/image";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import TruckIcon from "../../assets/images/icons/truck.svg";
import ProductImg from "../../assets/images/prd-img.png";
import Footer from "@/common/Footer";

const Step6 = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <h3 className="mt-8 mb-6">
          Subscribe because of your
          <br className="hidden sm:block" />
          lash cycle{" "}
          <a href="#" className="text-blue text-sm font-normal pl-1">
            Learn more
          </a>
        </h3>
        <ul className="text-bg1 space-y-1 mb-3">
          <li className="flex items-center gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span className="font-medium">100% money-back guarantee</span>
          </li>
          <li className="flex items-center  gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span className="font-medium">Cancel anytime</span>
          </li>
          <li className="flex items-center gap-2">
            <TruckIcon className="fill-current w-4 h-4" />
            <span className="font-medium">Free shipping</span>
          </li>
        </ul>

        <div className="flex items-center gap-4 mt-10 mb-5">
          <Image
            className="w-[120px] h-[120px] border border-bg3 shadow-img rounded-full"
            src={ProductImg}
            alt="user-img"
          />
          <div>
            <h6 className="label mb-0.5">MY lash serum</h6>
            <h6 className="label !text-red mb-0.5">3 month supply (2mL)</h6>
            <p className="text-t4 font-medium">Qty: 1</p>
          </div>
        </div>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <h6 className="flex items-center gap-2 text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Delivered & Billed
              </h6>
              <ul className="flex flex-col gap-1.5 pl-[30px]">
                <li className="text-xs text-t4">
                  First Delivery & Billing Date
                </li>
                <li className="text-xs text-t4">
                  Next Delivery & Billing Date
                </li>
              </ul>
            </div>
            <div>
              <h6 className="flex items-center gap-2 text-lg font-medium text-2 mb-2.5">
                Every 3 Months
              </h6>
              <ul className="flex flex-col gap-1.5 pl-[30px] sm:text-right">
                <li className="text-xs text-t4">Today</li>
                <li className="text-xs text-t4">Jan 16th, 2024</li>
              </ul>
            </div>
          </div>
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

export default Step6;
