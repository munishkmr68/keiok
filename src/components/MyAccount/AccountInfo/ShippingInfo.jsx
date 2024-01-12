"use client";
import { useState } from "react";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/solid";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import AddNewShippingAddress from "./AddNewShippingAddress";
import AccountInfo from "./AccountInfo";
import RemoveShippingAddressModal from "./RemoveShippingAddressModal";
import Notification from "@/components/notification";
import Arrow from "../../../assets/images/icons/check-circle-white.svg";

const ShippingInfo = () => {
  const [showShippingInfo, setShowShippingInfo] = useState(true);
  const [showAddNewShippingAddress, setShowAddNewShippingAddress] =
    useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [
    isRemoveShippingAddressModalOpen,
    setIsRemoveShippingAddressModalOpen,
  ] = useState(false);

  const handleButtonClick = () => {
    setShowShippingInfo(false);
    setShowAccountInfo(false);
    setShowAddNewShippingAddress(true);
  };

  const openRemoveShippingAddressModal = () => {
    setIsRemoveShippingAddressModalOpen(true);
  };

  const closeRemoveShippingAddressModal = () => {
    setIsRemoveShippingAddressModalOpen(false);
  };

  const handleBackClick = () => {
    setShowAccountInfo(true);
    setShowShippingInfo(false);
    setShowAddNewShippingAddress(false);
  };

  return (
    <>
      {showShippingInfo && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <div className="mt-5">
              <Notification
                icon={<Arrow />}
                message="Your Delivery & Billing Day has been changed"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <LockCircleIcon className="mb-6 mt-8" />
              <h3 className="mb-4">Manage Shipping Info</h3>
              <p className="text-t4 mb-8 text-base ">
                Edit your payment details, add a backup, or switch{" "}
                <br className="sm:block hidden" /> your preferred payment
                method.
              </p>
            </div>

            <div className="border border-gray px-4 py-[18px] shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)]">
              <p className="mb-3 text-t4">
                Braxton Swag
                <br />
                USA
                <br />
                3836 East Sitles Lane
                <br />
                Gilbert, AZ 85295
                <br />
                Apartment number 56
              </p>

              <div className="flex">
                <button className="font-bold text-t2 border border-t2 rounded-[20px] py px-2.5 tracking-wider">
                  PREFERRED
                </button>
                <button className="text-sm  text-blue ml-auto">Edit</button>
                <button
                  className="text-sm  text-blue ml-auto"
                  onClick={openRemoveShippingAddressModal}
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="border border-gray mt-4 px-4 py-[18px] shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)]">
              <p className="mb-3 text-t4">
                Braxton Swag
                <br />
                USA
                <br />
                3836 East Sitles Lane
                <br />
                Gilbert, AZ 85295
                <br />
                Apartment number 56
              </p>

              <div className="flex justify-between">
                <button className="text-sm  text-blue">Make preferred</button>
                <button className="text-sm  text-blue">Edit</button>
                <button
                  className="text-sm  text-blue"
                  onClick={openRemoveShippingAddressModal}
                >
                  Remove
                </button>
              </div>
            </div>

            <button
              className="primary-button-outlined mt-8 flex items-center gap-4 justify-center"
              onClick={handleButtonClick}
            >
              <PlusIcon className="w-4 h-4 stroke-current" /> Add Payment Method
            </button>
          </div>

          <div className="max-w-[484px] mx-auto px-4 py-8">
            <div className="mt-16">
              <Language />
            </div>
          </div>
          <Footer />
        </>
      )}
      <RemoveShippingAddressModal
        isOpen={isRemoveShippingAddressModalOpen}
        onClose={closeRemoveShippingAddressModal}
      />
      {showAddNewShippingAddress && <AddNewShippingAddress />}
      {showAccountInfo && <AccountInfo />}
    </>
  );
};

export default ShippingInfo;
