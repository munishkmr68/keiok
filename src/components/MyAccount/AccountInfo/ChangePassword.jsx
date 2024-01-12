"use client";
import { useState } from "react";
import Image from "next/image";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import ChangeBilling from "@/components/MyAccount/AccountInfo/ChangeBilling";
import AccountInfo from "@/components/MyAccount/AccountInfo/AccountInfo";
import EmailIcon from "../../../assets/images/icons/email.svg";
import PaymentIcon from "../../../assets/images/icons/payment.svg";
import CodeIcon from "../../../assets/images/icons/code.svg";
import NortonLogo from "../../../assets/images/norton-logo.png";
import Inputbox from "@/components/inputbox";

const ChangePassword = () => {
  const [showChangeBilling, setShowChangeBilling] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(true);

  const handleButtonClick = () => {
    setShowChangeBilling(!showChangeBilling);
  };

  const handleBackClick = () => {
    setShowAccountInfo(!showAccountInfo);
    setShowChangePassword(false);
  };

  return (
    <>
      {showChangeBilling ? (
        <ChangeBilling />
      ) : (
        <>
          {showChangePassword && (
            <>
              <div className="max-w-[484px] mx-auto px-4 pt-12">
                <span
                  className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
                  onClick={handleBackClick}
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </span>
                <h3 className="mt-8 mb-6">Reset Password</h3>
              </div>

              <div className="bg-bg3 py-8 sm:px-4">
                <div className="max-w-[484px] mx-auto px-4">
                  <div className="max-w-[484px] mx-auto sm:px-4">
                    <Image
                      className="max-w-[66px] ml-auto mb-1"
                      src={NortonLogo}
                      alt="logo"
                    />
                    <div className="flex flex-col gap-[9px]">
                      <div className="relative flex-1">
                        <Inputbox
                          name="currentpassword"
                          id="currentpassword"
                          placeholder=""
                          className="floating-input peer"
                        />
                        <label
                          htmlFor="currentpassword"
                          className="floating-label"
                        >
                          Current password
                        </label>
                        <p className="text-sm text-blue">Forgot password?</p>
                      </div>
                      <div className="relative flex-1">
                        <Inputbox
                          name="newpassword"
                          id="newpassword"
                          placeholder=""
                          className="floating-input peer"
                        />
                        <label htmlFor="newpassword" className="floating-label">
                          New password (6-60 characters)
                        </label>
                      </div>
                      <div className="relative flex-1">
                        <Inputbox
                          name="reenterpassword"
                          id="reenterpassword"
                          placeholder=""
                          className="floating-input peer"
                        />
                        <label
                          htmlFor="reenterpassword"
                          className="floating-label"
                        >
                          Re-enter new password
                        </label>
                      </div>
                    </div>
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

export default ChangePassword;
