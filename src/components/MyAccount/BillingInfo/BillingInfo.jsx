"use client";
import { useState } from "react";
import Language from "@/components/language";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-customizable.svg";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import PaymentInfo from "@/components/MyAccount/BillingInfo/PaymentInfo";
import Account from "@/components/MyAccount/BillingInfo/Account";
import OrderHistory from "@/components/MyAccount/BillingInfo/OrderHistory";
import ChangeBilling from "@/components/MyAccount/BillingInfo/ChangeBilling";

const BillingInfo = () => {
  const [showBillingInfo, setShowBillingInfo] = useState(true);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [showChangeBilling, setShowChangeBilling] = useState(false);

  const handleButtonClick = () => {
    setShowBillingInfo(false);
    setShowOrderHistory(false);
    setShowChangeBilling(false);
    setShowPaymentInfo(true);
  };
  const handleOrderHistoryClick = () => {
    setShowBillingInfo(false);
    setShowOrderHistory(true);
    setShowChangeBilling(false);
    setShowPaymentInfo(false);
  };
  const handleChangeBillingClick = () => {
    setShowBillingInfo(false);
    setShowOrderHistory(false);
    setShowChangeBilling(true);
    setShowPaymentInfo(false);
  };

  const handleBackClick = () => {
    setShowBillingInfo(false);
    setShowAccount(true);
  };

  return (
    <>
      {showPaymentInfo ? (
        <PaymentInfo />
      ) : (
        <>
          {showBillingInfo && (
            <>
              <div className="max-w-[484px] mx-auto px-4 pt-12">
                <span
                  className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
                  onClick={handleBackClick}
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </span>
                <h3 className="mt-8 mb-6">Manage Billing Info</h3>
                <div>
                  <div className="py-6 border-t border-b border-gray flex items-center justify-between gap-2 group cursor-pointer"
                   onClick={handleButtonClick}>
                    <div>
                      <div
                        className="text-t2 mb-0.5 sm:text-lg text-base font-medium  group-hover:text-blue transition ease-in-out"
                       
                      >
                        Manage Payment Info
                      </div>
                    </div>
                    <ArrowRightIcon className="text-t2  group-hover:text-blue" />
                  </div>
                  <div
                    className="py-6 border-b border-gray flex items-center justify-between gap-2 group cursor-pointer"
                    onClick={handleOrderHistoryClick}
                  >
                    <div>
                      <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium  group-hover:text-blue transition ease-in-out">
                        Order History
                      </div>
                    </div>
                    <ArrowRightIcon className="text-t2  group-hover:text-blue" />
                  </div>
                  <div
                    className="py-6 border-b border-gray flex items-center justify-between gap-2 group cursor-pointer"
                    onClick={handleChangeBillingClick}
                  >
                    <div>
                      <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium  group-hover:text-blue transition ease-in-out">
                        Change Delivery & Billing Day
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

          {showPaymentInfo && <PaymentInfo />}
          {showAccount && <Account />}
          {showOrderHistory && <OrderHistory />}
          {showChangeBilling && <ChangeBilling />}
        </>
      )}
    </>
  );
};

export default BillingInfo;
