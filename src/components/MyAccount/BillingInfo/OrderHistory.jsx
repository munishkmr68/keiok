"use client";
import { useState } from "react";
import Language from "@/components/language";
import PrdImg from "../../../assets/images/prd-img.png";
import Footer from "@/common/Footer";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import BillingInfo from "@/components/MyAccount/BillingInfo/BillingInfo";
import OrderDetails from "./OrderDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";

const OrderHistory = () => {
  const [showOrderHistory, setShowOrderHistory] = useState(true);
  const [showBillingInfo, setShowBillingInfo] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showShippingDetails, setShowShippingDetails] = useState(false);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  const handleOrderDetailsClick = () => {
    setShowOrderDetails(true);
    setShowBillingInfo(false);
    setShowOrderHistory(false);
    setShowShippingDetails(false);
    setShowPaymentDetails(false);
  };

  const handleShippingDetailsClick = () => {
    setShowOrderDetails(false);
    setShowBillingInfo(false);
    setShowOrderHistory(false);
    setShowShippingDetails(true);
    setShowPaymentDetails(false);
  };

  const handlePaymentDetailsClick = () => {
    setShowOrderDetails(false);
    setShowBillingInfo(false);
    setShowOrderHistory(false);
    setShowShippingDetails(false);
    setShowPaymentDetails(true);
  };

  const handleBackClick = () => {
    setShowBillingInfo(true);
    setShowOrderHistory(false);
    setShowOrderDetails(false);
    setShowShippingDetails(false);
    setShowPaymentDetails(false);
  };

  return (
    <>
      {showOrderHistory && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <h3 className="mt-8 mb-6">Order history</h3>

            <div className="border border-gray px-4 py-[18px] pb-0 shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)]">
              <div className="flex items-center justify-between gap-1">
                <span className="text-t2 font-medium">16/06/23</span>
                <span className="text-t2 font-medium">$61.03</span>
              </div>

              <div className="flex items-center gap-4  py-5 border-b border-gray">
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

              <div className="divide-y divide-gray">
                <div className="py-5 ">
                  <button
                    onClick={handleOrderDetailsClick}
                    className="sm:text-lg text-base flex items-center w-full justify-between gap-2 text-blue"
                  >
                    View order details
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="py-5">
                  <button
                    onClick={handleShippingDetailsClick}
                    className="sm:text-lg text-base flex items-center w-full justify-between gap-2 text-blue"
                  >
                    View shipping details
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="py-5">
                  <button
                    onClick={handlePaymentDetailsClick}
                    className="sm:text-lg text-base flex items-center w-full justify-between gap-2 text-blue"
                  >
                    View payment details
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="border border-gray px-4 py-[18px] pb-0 shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)] mt-4">
              <div className="flex items-center justify-between gap-1">
                <span className="text-t2 font-medium">16/06/23</span>
                <span className="text-t2 font-medium">$61.03</span>
              </div>

              <div className="flex items-center gap-4  py-5 border-b border-gray">
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

              <div className="divide-y divide-gray">
                <div className="py-5 ">
                  <Link
                    href="#"
                    className="sm:text-lg text-base flex items-center justify-between gap-2"
                  >
                    View order details
                    <ChevronRightIcon className="w-5 h-5" />
                  </Link>
                </div>
                <div className="py-5">
                  <Link
                    href="#"
                    className=" sm:text-lg text-base flex items-center justify-between gap-2"
                  >
                    View shipping details
                    <ChevronRightIcon className="w-5 h-5" />
                  </Link>
                </div>
                <div className="py-5">
                  <Link
                    href="#"
                    className=" sm:text-lg text-base flex items-center justify-between gap-2"
                  >
                    View payment details
                    <ChevronRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-sm text-t5 mb-2 mt-8">
              Subscription fees are billed at the beginning of each period and
              may take a few days after the billing date to appear on your
              account. Sales tax may apply.
            </p>
            <p className="text-sm text-t5">
              NOTE: We only show up to 1 year of billing history
            </p>
          </div>

          <div className="max-w-[484px] mx-auto px-4 py-8">
            <div className="mt-16">
              <Language />
            </div>
          </div>
          <Footer />
        </>
      )}

      {showBillingInfo && <BillingInfo />}
      {showOrderDetails && <OrderDetails />}
      {showShippingDetails && <ShippingDetails />}
      {showPaymentDetails && <PaymentDetails />}
    </>
  );
};

export default OrderHistory;
