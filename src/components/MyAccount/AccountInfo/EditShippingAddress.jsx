"use client";
import React, { useState } from "react";
import Image from "next/image";
import Language from "@/components/language";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../../assets/images/norton-logo.png";
import Footer from "@/common/Footer";
import CardIcons from "../../../assets/images/icons/card-group-icons.svg";
import CardNumber from "../../../assets/images/icons/cardnumber.svg";
import SecurityCode from "../../../assets/images/icons/securitycode.svg";
import GoogleAutocomplete from "@/components/GoogleAutocomplete";
import ChangeDropdown from "./ChangeDropdown";
import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/solid";

const EditShippingAddress = ({ onContinueClick }) => {
  const [billingAddressSameAsShipping, setBillingAddressSameAsShipping] =
    useState(false);
  const [additionalAddressFields, setAdditionalAddressFields] = useState(1);
  const [editBillingAddress, setEditBillingAddress] = useState(false);
  const [editShippingAddress, setEditShippingAddress] = useState(false);

  const [showEditShippingAddress, setShowEditShippingAddress] = useState(true);

  const scrollToTop = () => {
    // Smooth scroll to the top with a slight delay
    setTimeout(() => {
      const element = document.scrollingElement || document.documentElement;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleButtonClick = () => {
    setShowEditShippingAddress(false);

    scrollToTop();
  };

  const handleBackClick = () => {
    setShowEditShippingAddress(false);

    scrollToTop();
  };

  const handleAddAddressField = () => {
    setAdditionalAddressFields((prevFields) => prevFields + 1);
  };

  const handleEditClick = () => {
    setEditBillingAddress(!editBillingAddress);
  };
  const handleEditShippingClick = () => {
    setEditShippingAddress(!editShippingAddress);
  };

  return (
    <>
      {showEditShippingAddress && (
        <>
          <div className="max-w-[484px] mx-auto mb-5 px-4 pt-12">
            <span
              className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <div className="flex items-center flex-col">
              <LockCircleIcon className="mb-6 mt-8" />
              <h3 className="mb-4">Edit your shipping address</h3>
              <CardIcons />
            </div>
          </div>

          <div className="bg-bg3 py-8 px-4">
            <div className="max-w-[484px] mx-auto">
              <div className="flex flex-col gap-[9px]">
                <div className="relative">
                  <Inputbox
                    name="cardholder"
                    id="cardholder"
                    autocomplete="cardholder"
                    placeholder=""
                    className="floating-input peer"
                  />
                  <label htmlFor="cardholder" className="floating-label">
                    Cardholder Name
                  </label>
                </div>

                
                  <div className="relative">
                    <GoogleAutocomplete
                      label={`Address`}
                      InputClassName="pl-3.5"
                      LabelClassName="!pl-0"
                    />
                  </div>
    

                <div className="relative">
                  <Inputbox
                    name="optional"
                    id="optional"
                    autocomplete="optional"
                    placeholder=""
                    className="floating-input peer"
                  />
                  <label htmlFor="optional" className="floating-label">
                  Apt, suite, company, c/o (optional)
                  </label>
                </div>

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
                    onClick={() => setEditBillingAddress(false)}
                  >
                    Save Details
                  </button>
                  <button
                    className="primary-button-outlined w-auto font-medium"
                    onClick={() => setEditBillingAddress(false)}
                  >
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
    </>
  );
};

export default EditShippingAddress;
