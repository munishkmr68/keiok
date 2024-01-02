"use client";
import Language from "@/components/language";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right.svg";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import Amex from "../../../assets/images/icons/amex.svg";

const PaymentInfo = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 pt-12">
        <span className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center">
          <ChevronLeftIcon className="w-4 h-4 stroke-current" />
        </span>
        <div className="flex flex-col items-center text-center">
          <LockCircleIcon className="mb-6 mt-8" />
          <h3 className="mt-8 mb-4">Manage Payment Info</h3>
          <p className="text-t4 mb-8 text-base ">
            Edit your payment details, add a backup, or switch{" "}
            <br className="sm:block hidden" /> your preferred payment method.
          </p>
        </div>

        <div className="border border-gray px-4 py-[18px]">
          <p className=" sm:text-base text-sm text-t2 font-bold mb-3 flex gap-0.5">
            <Amex /> ... 1002
          </p>
          <p className="mb-3 text-t5">
            To remove, add another payment method first
          </p>
          <button className="font-bold text-t2">PREFERRED</button>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto px-4 py-8">
        <div className="mt-16">
          <Language />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentInfo;
