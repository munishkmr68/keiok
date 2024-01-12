// Account.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Language from "@/components/language";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-customizable.svg";
import Amex from "../../../assets/images/icons/amex.svg";
import PrdImg from "../../../assets/images/prd-img.png";
import Footer from "@/common/Footer";
import BillingInfo from "@/components/MyAccount/BillingInfo/BillingInfo";

const Account = () => {
  const [showBillingInfo, setShowBillingInfo] = useState(false);

  const handleButtonClick = () => {
    // Toggle the value of showBillingInfo when the button is clicked
    setShowBillingInfo(!showBillingInfo);
  };

  return (
    <>
      {showBillingInfo ? (
        <BillingInfo />
      ) : (
        <>
          <div className="max-w-[484px] mx-auto px-4">
            <h3 className="mb-4 mt-8">MY Account</h3>

            <hr className="border-gray my-5" />
            <h6 className="label mb-4">MY Subscription</h6>
            <div className="flex items-center gap-4  mb-5">
              <Image
                className="max-w-[121px]  shadow-[0_0_1px_#333]"
                src={PrdImg}
                alt="user-img"
              />
              <div>
                <h6 className="text-lg sm:text-xl text-t4 font-normal ">
                  MY lash serum
                </h6>
                <h6 className="label !font-bold">$58</h6>
                <p className="text-t4 text-sm sm:text-base">
                  Delivered & billed every 3 months
                </p>
                <p className="text-t4 text-sm sm:text-base">
                  3 month supply (2mL)
                </p>
                <p className="text-t4 text-sm sm:text-base">Qty: 1</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 py-6 text-t4 border-y border-gray group">
                <div>
                  <p className=" sm:text-base text-sm font-bold mb-2 flex gap-0.5">
                    <Amex /> ... 1002
                  </p>
                  <div className=" mb-px font-medium group-hover:text-blue transition ease-in-out">
                    MY next delivery and billing date is:
                  </div>
                  <p> September 16, 2023</p>
                </div>
             
              </div>

              <div
                className="py-6 border-b border-gray flex items-center justify-between gap-2  group cursor-pointer"
                onClick={handleButtonClick}
              >
                <div>
                  <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium group-hover:text-blue transition ease-in-out">
                    Manage Billing Info
                  </div>
                  <p className="text-t4 text-sm font-medium">
                    Payment Info, Order History, Delivery & Billing
                  </p>
                </div>
                <ArrowRightIcon  className="text-t2  group-hover:text-blue" />
              </div>

              <div className="py-6 border-b border-gray flex items-center justify-between gap-2 cursor-pointer group">
                <div>
                  <div className="text-t2 mb-0.5 font-medium group-hover:text-blue transition ease-in-out">
                    Manage Account Info
                  </div>
                  <p className="text-t4 text-sm font-medium">
                    Payment Info, Order History, Delivery & Billing
                  </p>
                </div>
                <ArrowRightIcon  className="text-t2  group-hover:text-blue" />
              </div>
            </div>
            <button className="primary-button mt-[30px]">
              Cancel MY Subscription
            </button>
          </div>
          {showBillingInfo && <BillingInfo />}
          <div className="max-w-[484px] mx-auto px-4 py-8">
            <div className="mt-16">
              <Language />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Account;
