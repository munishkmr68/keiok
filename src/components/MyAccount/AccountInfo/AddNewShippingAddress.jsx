"use client";
import React, { useState } from "react";
import Image from "next/image";
import Language from "@/components/language";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../../assets/images/norton-logo.png";
import Footer from "@/common/Footer";
import ShippingInfo from "./ShippingInfo";
import ConfirmAddressModal from "./ConfirmAddressModal";
import GoogleAutocomplete from "@/components/GoogleAutocomplete";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const AddNewShippingAddress = ({ onContinueClick }) => {
  const [additionalAddressFields, setAdditionalAddressFields] = useState(1);
  const [showAddNewShippingAddress, setShowAddNewShippingAddress] =
    useState(true);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [isConfirmAddressModalOpen, setIsConfirmAddressModalOpen] =
    useState(false);

  const handleBackClick = () => {
    setShowShippingInfo(true);
    setShowAddNewShippingAddress(false);
  };

  const handleAddAddressField = () => {
    setAdditionalAddressFields((prevFields) => prevFields + 1);
  };

  const openConfirmAddressModal = () => {
    setIsConfirmAddressModalOpen(true);
  };

  const closeConfirmAddressModal = () => {
    setIsConfirmAddressModalOpen(false);
  };

  const handleAddNewClick = () => {
    setIsConfirmAddressModalOpen(false);
    setShowAddNewShippingAddress(false);
    setShowShippingInfo(true);
  };

  return (
    <>
      {showAddNewShippingAddress && (
        <>
          <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <div className="flex items-center flex-col">
              <LockCircleIcon className="mb-6 mt-8" />
              <h3 className="mb-4">Add New Address</h3>
            </div>
          </div>

          <div className="bg-bg3 py-8 px-4">
            <div className="max-w-[484px] mx-auto">
              <Image
                className="max-w-[66px] ml-auto mb-1"
                src={NortonLogo}
                alt="logo"
              />
              <div className="flex flex-col gap-[9px]">
                <div className="relative">
                  <Inputbox
                    name="fullname"
                    id="fullname"
                    autocomplete="fullname"
                    placeholder=""
                    className="floating-input peer"
                  />
                  <label htmlFor="fullname" className="floating-label">
                    Full Name
                  </label>
                </div>

                {[...Array(additionalAddressFields)].map((_, index) => (
                  <div key={index} className="relative">
                    <GoogleAutocomplete
                      label={`Address`}
                      InputClassName="pl-3.5"
                      LabelClassName="!pl-0"
                    />
                  </div>
                ))}
                <span
                  className="text-sm text-blue"
                  onClick={handleAddAddressField}
                >
                  +Address {additionalAddressFields + 1} (optional)
                </span>

                <div className="relative">
                  <Inputbox
                    name="zipcode"
                    id="zipcode"
                    autocomplete="zipcode"
                    placeholder=""
                    className="floating-input peer"
                  />
                  <label htmlFor="zipcode" className="floating-label">
                    ZIP code
                  </label>
                </div>

                <div className="relative">
                  <Inputbox
                    name="city"
                    id="city"
                    autocomplete="city"
                    placeholder=""
                    className="floating-input peer"
                  />
                  <label htmlFor="city" className="floating-label">
                    City, State
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[484px] mx-auto px-4 ">
            <div className="flex flex-col mt-[30px] gap-2">
              <button
                className="primary-button w-auto font-medium min-w-[124px]"
                onClick={openConfirmAddressModal}
              >
                Add New Address
              </button>
              <button className="primary-button-outlined w-auto font-medium">
                Cancel
              </button>
            </div>
          </div>

          <div className="max-w-[484px] mx-auto px-4 pb-6">
            <div className="mt-24">
              <Language />
            </div>
          </div>
          <Footer />
        </>
      )}
      <ConfirmAddressModal
        isOpen={isConfirmAddressModalOpen}
        onClose={closeConfirmAddressModal}
        addNewClick={handleAddNewClick}
      />
      {showShippingInfo && <ShippingInfo />}
    </>
  );
};

export default AddNewShippingAddress;
