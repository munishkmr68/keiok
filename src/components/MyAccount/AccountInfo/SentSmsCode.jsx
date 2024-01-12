"use client";
import { useState } from "react";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import OtpInput from "react-otp-input";
import SmsChangeEmail from "./SmsChangeEmail";
import AccountInfo from "./AccountInfo";

const SentSmsCode = () => {
  const [showSentSmsCode, setShowSentSmsCode] = useState(true);
  const [showSmsChangeEmail, setShowSmsChangeEmail] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [otp, setOtp] = useState("");

  const handleButtonClick = () => {
    setShowSentSmsCode(false);
    setShowAccountInfo(false);
    setShowSmsChangeEmail(true);
  };

  const handleBackClick = () => {
    setShowSentSmsCode(false);
    setShowAccountInfo(true);
    setShowSmsChangeEmail(false);
  };

  return (
    <>
      {showSentSmsCode && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <div className="flex flex-col items-center text-center mt-8">
              <p className="text-t2 mb-6 font-bold">SECURITY CHECK</p>
              <h3 className="mb-4">
                We sent an SMS to the phone number saved in the system
              </h3>
              <p className="text-t4 mb-12 text-base">
                Enter the code sent to <b>987 654 321.</b> Thank you for helping
                us protect your account.
              </p>
            </div>

            <OtpInput
              value={otp}
              inputStyle="otp-input"
              containerStyle="otp-input-container"
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
            />
            <span className="text-red text-xs mt-3">
              Code is incorrect. Please try again or request a new code
            </span>

            <button className="primary-button mt-8" onClick={handleButtonClick}>
              Enter Code to Continue
            </button>

            <div className="flex gap-3 items-center justify-center mt-4">
              <span className="text-blue text-sm">Send code again</span>
              <span className="text-gray">|</span>
              <span className="text-blue text-sm">Try another way</span>
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
      {showSmsChangeEmail && <SmsChangeEmail />}
      {showAccountInfo && <AccountInfo />}
    </>
  );
};

export default SentSmsCode;
