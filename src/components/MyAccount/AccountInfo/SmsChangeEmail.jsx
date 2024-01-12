"use client";
import { useState } from "react";
import Image from "next/image";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import Account from "./Account";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Inputbox from "@/components/inputbox";
import SentSmsCode from "./SentSmsCode";
import NortonLogo from "../../../assets/images/norton-logo.png";

const SmsChangeEmail = () => {
  const [showSmsChangeEmail, setShowSmsChangeEmail] = useState(true);
  const [showAccount, setShowAccount] = useState(false);
  const [showSentSmsCode, setShowSentSmsCode] = useState(false);

  const handleButtonClick = () => {
    setShowAccount(true);
    setShowSmsChangeEmail(false);
    setShowSentSmsCode(false);
  };

  const handleBackClick = () => {
    setShowSmsChangeEmail(false);
    setShowAccount(false);
    setShowSentSmsCode(true);
  };

  return (
    <>
      {showSmsChangeEmail && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <div className="flex flex-col items-center text-center mt-8">
              <h3 className="mb-4">Change Email</h3>
            </div>
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
                    name="currentemail"
                    className="max-h-[54px] pt-7 disabled:!border-inputcolor disabled:placeholder:text-inputcolor disabled:text-inputcolor peer"
                    id="currentemail"
                    disabled={true}
                    autocomplete="current email"
                    placeholder="jaywade12@gmail.com"
                  />
                  <label
                    htmlFor="currentemail"
                    className="font-bold absolute top-[2px] left-3.5 peer-disabled:text-inputcolor"
                  >
                    Current Email
                  </label>
                </div>

                <div className="relative">
                  <Inputbox
                    name="email"
                    id="email"
                    type="email"
                    placeholder=""
                    className="floating-input peer"
                  />
                  <label htmlFor="email" className="floating-label">
                    Email
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto px-4">
            <div className="flex flex-col mt-[30px] gap-4">
              <button
                className="primary-button w-auto font-medium min-w-[124px]"
                onClick={handleButtonClick}
              >
                Save
              </button>
              <button className="primary-button-text-only w-auto font-medium">
                Cancel
              </button>
            </div>
          </div>

          <div className="max-w-[484px] mx-auto px-4 py-8">
            <div className="mt-16">
              <Language />
            </div>
          </div>
          <Footer />
        </>
      )}
      {showAccount && <Account />}
      {showSentSmsCode && <SentSmsCode />}
    </>
  );
};

export default SmsChangeEmail;
