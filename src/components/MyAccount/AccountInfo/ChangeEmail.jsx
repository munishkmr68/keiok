"use client";
import { useState } from "react";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import AccountInfo from "@/components/MyAccount/AccountInfo/AccountInfo";
import SentSmsCode from "./SentSmsCode";
import IdentityIcon from "../../../assets/images/icons/identity.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-customizable.svg";
import EmailIcon from "../../../assets/images/icons/email.svg";
import PaymentIcon from "../../../assets/images/icons/payment.svg";
import CodeIcon from "../../../assets/images/icons/code.svg";

const ChangeEmail = () => {
  const [showChangeEmail, setShowChangeEmail] = useState(true);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showSentSmsCode, setShowSentSmsCode] = useState(false);

  const handleSentSmsClick = () => {
    setShowChangeEmail(false);
    setShowAccountInfo(false);
    setShowSentSmsCode(true);
  };

  const handleBackClick = () => {
    setShowChangeEmail(false);
    setShowAccountInfo(true);
    setShowSentSmsCode(false);
  };

  return (
    <>
      {showChangeEmail && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <div className="flex flex-col items-center text-center">
              <IdentityIcon className="mb-6 mt-8" />
              <h3 className="mb-4">First, let’s confirm your identity.</h3>
              <p className="text-t4 mb-8 text-base ">
                Before you make any changes, we’ll just need to make{" "}
                <br className="hidden sm:block" />
                sure it’s you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div
                className="px-4 py-5 border-t border-[0.8px]  border-gray rounded flex items-center justify-between gap-2 group cursor-pointer shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)]"
                onClick={handleSentSmsClick}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <CodeIcon className="text-t2 group-hover:text-blue transition ease-in-out" />
                  </div>
                  <div>
                    <p className="text-t2 mb-0.5  font-medium  group-hover:text-blue transition ease-in-out">
                      Submit code
                    </p>
                    <p className="text-t4 text-sm">0987654321</p>
                  </div>
                </div>
                <ArrowRightIcon className="text-t2  group-hover:text-blue" />
              </div>

              <div className="px-4 py-5 border-t border-[0.8px]  border-gray rounded flex items-center justify-between gap-2 group cursor-pointer shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)]">
                <div className="flex items-center gap-3">
                  <div>
                    <EmailIcon className="text-t2 group-hover:text-blue transition ease-in-out" />
                  </div>
                  <div>
                    <p className="text-t2 mb-0.5  font-medium  group-hover:text-blue transition ease-in-out">
                      Email a code
                    </p>
                    <p className="text-t4 text-sm">jaywade12@gmail.com</p>
                  </div>
                </div>
                <ArrowRightIcon className="text-t2  group-hover:text-blue" />
              </div>

              <div className="px-4 py-5 border-t border-[0.8px]  border-gray rounded flex items-center justify-between gap-2 group cursor-pointer shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)]">
                <div className="flex items-center gap-3">
                  <div>
                    <PaymentIcon className="text-t2 group-hover:text-blue transition ease-in-out" />
                  </div>
                  <div>
                    <p className="text-t2 mb-0.5  font-medium  group-hover:text-blue transition ease-in-out">
                      Confirm payment details
                    </p>
                    <p className="text-t4 text-sm">AMEX, Last digits: 1003</p>
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

      {showAccountInfo && <AccountInfo />}
      {showSentSmsCode && <SentSmsCode />}
    </>
  );
};

export default ChangeEmail;
