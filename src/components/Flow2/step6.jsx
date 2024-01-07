"use client";
import Image from "next/image";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";

const Step6 = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
        <h3 className="font-bold">Forgot Email / Password</h3>
        <p className="text-t4 mb-0 text-base ">
          Provide this information to help find your account (all fields are
          required)
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
              name="firstname"
              id="firstname"
              autocomplete="firstname"
              placeholder="First Name on Account"
            />
            <Inputbox
              name="lastname"
              id="lastname"
              autocomplete="lastname"
              placeholder="Last Name on Account"
            />
          </div>
        </div>
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

export default Step6;
