"use client";
import Image from "next/image";
import NortonLogo from "../../assets/images/norton-logo.png";
import Language from "@/components/language";
import Inputbox from "@/components/inputbox";
import Footer from "@/common/Footer";

const Step7 = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
        <h3 className="font-bold">Sign In</h3>
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
            <Inputbox
              name="password"
              id="password"
              autocomplete="password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4">
        <button className="dark-button-outlined mt-8">Need Help?</button>
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

export default Step7;
