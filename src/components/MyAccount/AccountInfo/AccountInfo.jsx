"use client";
import { useState } from "react";
import Language from "@/components/language";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-customizable.svg";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import ShippingInfo from "./ShippingInfo";
import Account from "./Account";
import SentSmsCode from "./SentSmsCode";
import ChangePhone from "./ChangePhone";
import ChangePassword from "./ChangePassword";

const AccountInfo = () => {
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(true);
  const [showSentSmsCode, setShowSentSmsCode] = useState(false);
  const [showChangePhone, setShowChangePhone] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleButtonClick = () => {
    setShowShippingInfo(true);
    setShowAccount(false);
    setShowAccountInfo(false);
    setShowSentSmsCode(false);
    setShowChangePhone(false);
    setShowChangePassword(false);
  };

  const handleEmailButtonClick = () => {
    setShowShippingInfo(false);
    setShowAccount(false);
    setShowAccountInfo(false);
    setShowSentSmsCode(true);
    setShowChangePhone(false);
    setShowChangePassword(false);
  };

  const handlePhoneButtonClick = () => {
    setShowShippingInfo(false);
    setShowAccount(false);
    setShowAccountInfo(false);
    setShowSentSmsCode(false);
    setShowChangePhone(true);
    setShowChangePassword(false);
  };

  const handlePasswordButtonClick = () => {
    setShowShippingInfo(false);
    setShowAccount(false);
    setShowAccountInfo(false);
    setShowSentSmsCode(false);
    setShowChangePhone(false);
    setShowChangePassword(true);
  };

  const handleBackClick = () => {
    setShowShippingInfo(false);
    setShowAccount(true);
    setShowAccountInfo(false);
    setShowSentSmsCode(false);
    setShowChangePhone(false);
    setShowChangePassword(false);
  };

  return (
    <>
      {showAccountInfo && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <h3 className="mt-8 mb-6">Manage Account Info</h3>
            <div>
              <div
                className="py-6 border-t border-b border-gray flex items-center justify-between gap-2 group cursor-pointer"
                onClick={handleButtonClick}
              >
                <div>
                  <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium  group-hover:text-blue transition ease-in-out">
                    Manage Shipping Info
                  </div>
                </div>
                <ArrowRightIcon className="text-t2  group-hover:text-blue" />
              </div>
              <div
                className="py-6 border-b border-gray flex items-center justify-between gap-2 group cursor-pointer"
                onClick={handleEmailButtonClick}
              >
                <div>
                  <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium  group-hover:text-blue transition ease-in-out">
                    Change Email
                  </div>
                </div>
                <ArrowRightIcon className="text-t2  group-hover:text-blue" />
              </div>
              <div
                className="py-6 border-b border-gray flex items-center justify-between gap-2 group cursor-pointer"
                onClick={handlePhoneButtonClick}
              >
                <div>
                  <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium  group-hover:text-blue transition ease-in-out">
                    Change Phone Number
                  </div>
                </div>
                <ArrowRightIcon className="text-t2  group-hover:text-blue" />
              </div>
              <div
                className="py-6 border-b border-gray flex items-center justify-between gap-2 group cursor-pointer"
                onClick={handlePasswordButtonClick}
              >
                <div>
                  <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium  group-hover:text-blue transition ease-in-out">
                    Change Password
                  </div>
                </div>
                <ArrowRightIcon className="text-t2  group-hover:text-blue" />
              </div>
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

      {showShippingInfo && <ShippingInfo />}
      {showAccount && <Account />}
      {showSentSmsCode && <SentSmsCode />}
      {showChangePhone && <ChangePhone />}
      {showChangePassword && <ChangePassword />}
    </>
  );
};

export default AccountInfo;
