"use client";
import { useState } from "react";
import Language from "@/components/language";
import PrdImg from "../../../assets/images/prd-img.png";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import OrderHistory from "./OrderHistory";

const ShippingDetails = () => {
  const [showShippingDetails, setShowShippingDetails] = useState(true);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

  const handleBackClick = () => {
    setShowOrderHistory(true);
    setShowShippingDetails(false);
  };

  return (
    <>
      {showShippingDetails && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <h3 className="mt-8 mb-6 text-center">Shipping Details</h3>

            <div className="divide-y divide-dashed divide-gray border-y border-gray ">
              <div className="flex text-sm sm:text-base text-t4 justify-between py-3">
                <span>Date</span>
                <span>June 13, 2023</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-8">
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

            <div className="border-y border-gray mt-8">
              <div className="flex text-sm sm:text-base text-t4 justify-between py-3">
                <span>Carrier</span>
                <span>USPS</span>
              </div>
            </div>

            <div className="flex flex-col gap-4pb-[30px] mt-[30px]">
              <div>
                <div className="font-medium text-t2 mb-2 flex justify-between items-center">
                  Shipping Address
                </div>
                <p className="text-t4 text-sm">
                  Erica Jones
                  <br />
                  USA
                  <br />
                  3836 E Stiles Ln
                  <br />
                  Gilbert, AZ 85295-0150
                  <br />
                  Apt 1
                </p>
              </div>
              <div>
                <div className="font-medium text-t2 mb-2">Email</div>
                <p className="text-t4 text-sm">j ........ 2@gmail.com</p>
              </div>
            </div>

            <div className="divide-y divide-dashed divide-gray mt-8">
              <div className="flex text-sm sm:text-base text-t4 justify-between py-3 border-y border-gray relative top-px">
                <div className="flex  flex-col gap-1">
                  <span className="font-medium text-t3">Tracking Number</span>
                  <span> 11111111111111111111111111111111</span>
                </div>
                <span className="text-blue">Track this shipment</span>
              </div>

              <div className="flex text-t4 justify-between py-3">
                <span>Total Items</span>
                <span>1</span>
              </div>
              <div className="flex text-t4 justify-between py-3">
                <span>Subtotal</span>
                <span>U.S.</span>
              </div>
              <div className="flex text-t4 justify-between py-3">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex text-t4 justify-between py-3">
                <span>MD State Tax (0.06%)</span>
                <span>$2.03 USD</span>
              </div>
              <div className="flex text-t4 justify-between py-3">
                <span className="text-blue text-base sm:text-lg font-medium">
                  Your Total
                </span>
                <span className="text-blue text-base sm:text-lg font-medium">
                  $60.00
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-[484px] mx-auto px-4 pb-8">
            <div className="mt-16">
              <Language />
            </div>
          </div>
          <Footer />
        </>
      )}
      {showOrderHistory && <OrderHistory />}
    </>
  );
};

export default ShippingDetails;
