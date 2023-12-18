"use client";
import Image from "next/image";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import Footer from "@/common/Footer";

const Step10 = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <LockCircleIcon className="mb-6 mt-8" />

        <h3 className="mb-4 mt-5">Create a password & activate your account</h3>
        <p className="text-t4 mb-6 sm:text-base text-sm">
          Your phone number will be used to help you access and recover your
          account. Message and data rates may apply.
        </p>
      </div>

      <div className="bg-bg3 py-10 px-4">
        <div className="max-w-[484px] mx-auto">
          <Image
            className="max-w-[66px] ml-auto mb-1"
            src={NortonLogo}
            alt="logo"
          />
          <div className="flex flex-col gap-[9px]">
            <div className="relative">
              <Inputbox
                name="email"
                className="max-h-[54px] pt-7 disabled:!border-inputcolor disabled:placeholder:text-inputcolor disabled:text-inputcolor peer"
                id="email"
                disabled={true}
                autoComplete="email"
                placeholder="jaywade12@gmail.com"
              />
              <label className="font-bold absolute top-[2px] left-3.5 peer-disabled:text-inputcolor">
                Email
              </label>
            </div>
            <Inputbox
              name="password"
              id="password"
              autoComplete="password"
              placeholder="Password (6-60 characters)"
            />
            <Inputbox
              name="password"
              id="password"
              autoComplete="password"
              placeholder="Re-enter password"
            />
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

export default Step10;
