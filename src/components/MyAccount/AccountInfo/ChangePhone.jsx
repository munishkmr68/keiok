"use client";
import { useState } from "react";
import Image from "next/image";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import ChangeBilling from "@/components/MyAccount/AccountInfo/ChangeBilling";
import AccountInfo from "@/components/MyAccount/AccountInfo/AccountInfo";
import ChangePhoneField from "./ChangePhoneField";
import NortonLogo from "../../../assets/images/norton-logo.png";

const ChangePhone = () => {
  const [showChangeBilling, setShowChangeBilling] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showChangePhone, setShowChangePhone] = useState(true);

  const handleButtonClick = () => {
    setShowChangeBilling(!showChangeBilling);
  };

  const handleBackClick = () => {
    setShowAccountInfo(!showAccountInfo);
    setShowChangePhone(false);
  };

  return (
    <>
      {showChangeBilling ? (
        <ChangeBilling />
      ) : (
        <>
          {showChangePhone && (
            <>
              <div className="max-w-[484px] mx-auto px-4 pt-12">
                <span
                  className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
                  onClick={handleBackClick}
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </span>
                <h3 className="mt-8 mb-6">Change Phone Number</h3>
              </div>

              <div className="bg-bg3 py-8 sm:px-4">
                <div className="max-w-[484px] mx-auto px-4">
                  <Image
                    className="max-w-[66px] ml-auto mb-1"
                    src={NortonLogo}
                    alt="logo"
                  />
                  <div className="flex flex-col gap-2">
                    <ChangePhoneField
                      className="relative z-30"
                      label="Current Phone Number"
                      id="currentphonenumber"
                      htmlFor="currentphonenumber"
                      name="currentphonenumber"
                    />
                    <ChangePhoneField
                      className="relative z-20"
                      label="Phone number"
                      id="phonenumber"
                      htmlFor="phonenumber"
                      name="phonenumber"
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-[484px] mx-auto px-4">
                <div className="flex flex-col mt-[30px] gap-4">
                  <button className="primary-button w-auto font-medium min-w-[124px]">
                    Save
                  </button>
                  <button className="primary-button-outlined w-auto font-medium">
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
              {showChangeBilling && <ChangeBilling />}
            </>
          )}
          {showAccountInfo && <AccountInfo />}
        </>
      )}
    </>
  );
};

export default ChangePhone;
