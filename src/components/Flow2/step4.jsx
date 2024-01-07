"use client";
import Image from "next/image";
import Language from "@/components/language";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "@/common/Footer";

const Step4 = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
        <h3 className="font-bold">Activate Your Account</h3>
        <p className="text-t4 mb-0 text-base ">
          Enter your email address below, and we will send you an email with
          instructions on how to activate your account.
        </p>
      </div>
      <div className="bg-bg3 py-8 pt-3 sm:px-4">
        <div className="max-w-[484px] mx-auto px-4">
          <Image
            className="max-w-[66px] ml-auto mb-1"
            src={NortonLogo}
            alt="logo"
          />
          <div className="flex flex-col gap-[9px]">
            <Inputbox
              name="email"
              id="email"
              autocomplete="email"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4">
        <button className="dark-button-outlined mt-8">
          I don&apos;t remember my email
        </button>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="mt-24 border-b border-gray">
          <Language />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Step4;
