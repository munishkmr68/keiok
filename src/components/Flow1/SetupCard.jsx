"use client";
import React, { useState } from "react";
import Image from "next/image";
import ShoppingWith from "@/components/shoppingwith";
import YourTotal from "@/components/yourtotal";
import Language from "@/components/language";
import Freeshipping from "@/components/freeshipping";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import Lock from "../../assets/images/icons/lock-white.svg";
import CardIcons from "../../assets/images/icons/card-group-icons.svg";
import CardNumber from "../../assets/images/icons/cardnumber.svg";
import SecurityCode from "../../assets/images/icons/securitycode.svg";
import LashesIcon from "../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import ProductImg from "../../assets/images/prd-img.png";
import GoogleAutocomplete from "@/components/GoogleAutocomplete";
import ChangeDropdown from "./ChangeDropdown";

const SetupCard = ({ onContinueClick }) => {
  const [billingAddressSameAsShipping, setBillingAddressSameAsShipping] =
  useState(true);
const [additionalAddressFields, setAdditionalAddressFields] = useState(1);
const [editBillingAddress, setEditBillingAddress] = useState(false);
const [editShippingAddress, setEditShippingAddress] = useState(false);

  const scrollToTop = () => {
    // Smooth scroll to the top with a slight delay
    setTimeout(() => {
      const element = document.scrollingElement || document.documentElement;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    onContinueClick();
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
      <div className="max-w-[484px] mx-auto mb-5 px-4">
        <LockCircleIcon className="mb-6 mt-8" />
        <h3 className="mb-4 mt-5">Set up your credit or debit card</h3>
        <CardIcons />
      </div>

      <div className="bg-bg3 py-10 px-4">
        <div className="max-w-[484px] mx-auto">
          <Image
            className="max-w-[66px] ml-auto mb-1"
            src={NortonLogo}
            alt="logo"
          />
          <div className="flex flex-col gap-[9px]">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                  <CardNumber />
                </div>
                <Inputbox
                  name="cardnumber"
                  id="cardnumber"
                  placeholder=""
                  className="floating-input peer pr-10"
                />

                <label htmlFor="cardnumber" className="floating-label">
                  Card Number
                </label>
              </div>
              <p className="text-red text-sm mt-0.5">
                Please enter a card number.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="relative">
                  <Inputbox
                    name="expirationdate"
                    id="expirationdate"
                    placeholder=""
                    className="floating-input peer filled"
                  />

                  <label htmlFor="expirationdate" className="floating-label">
                    Expiration Date
                  </label>
                </div>
                {/* <p className="text-red text-sm mt-0.5"> Please enter an expiration date.</p> */}
              </div>
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                    <SecurityCode />
                  </div>
                  <Inputbox
                    name="securitycode"
                    id="securitycode"
                    placeholder=""
                    className="floating-input peer pr-10 error"
                  />
                  <label htmlFor="securitycode" className="floating-label">
                    Security Code
                  </label>
                </div>
                <p className="text-red text-sm mt-0.5">
                  Please enter a security code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto px-4 py-8">
        <div className="border-t border-gray pt-[30px]">
          <div className="font-medium text-t2 mb-2">Billing Address</div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="w-5 flex justify-center">
              <input
                id="address"
                className="accent-blue w-4 h-4"
                type="checkbox"
                name="status"
                checked={billingAddressSameAsShipping}
                onChange={() =>
                  setBillingAddressSameAsShipping(!billingAddressSameAsShipping)
                }
              />
            </span>
            <label htmlFor="address" className="text-t3 leading-[21px]">
              Billing address same as shipping
            </label>
          </div>
        </div>

        
        {!editBillingAddress && (
  <div className="flex flex-col gap-4 border-y border-gray py-[30px] mt-[30px]">
    <div>
      <div className="font-medium text-t2 mb-2 flex justify-between items-center">
        Billing Address
        <ChangeDropdown onClick={handleEditClick} />
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
)}

{editBillingAddress && (
  <div className="flex flex-col gap-[9px] mt-6">
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

    <div className="flex mt-[30px] gap-4">
      <button className="primary-button w-auto font-medium min-w-[124px]"
       onClick={() => setEditBillingAddress(false)}
      >
        Save
      </button>
      <button
        className="primary-button-text-only w-auto font-medium"
        onClick={() => setEditBillingAddress(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}




{!editShippingAddress && (
        <div className="flex flex-col gap-4 border-b border-gray pb-[30px] mt-[30px]">
        <div>
          <div className="font-medium text-t2 mb-2 flex justify-between items-center">
            Shipping Address
     
            <ChangeDropdown onClick={handleEditShippingClick} />

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
)}

{editShippingAddress && (
  <div className="flex flex-col gap-[9px] mt-6">
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

    <div className="flex mt-[30px] gap-4">
      <button className="primary-button w-auto font-medium min-w-[124px]"
       onClick={() => setEditShippingAddress(false)}
      >
        Save
      </button>
      <button
        className="primary-button-text-only w-auto font-medium"
        onClick={() => setEditShippingAddress(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}



      </div>

      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ul className="text-t4 space-y-1">
            <li className="flex gap-2">
              <LashesIcon className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Get LASHES in as little as 6 weeks
              </span>
            </li>
            <li className="flex gap-2">
              <SubscribeIcone className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Subscribe because of your lash cycle
              </span>
            </li>
            <li className="flex gap-2">
              <CheckmarkIcon className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Cancel anytime
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto px-4 py-8">
        <div className="border-t border-gray pt-[30px] pb-[18px]">
          <YourTotal />
        </div>
        <div className="border-b border-gray mb-[30px]">
          <Freeshipping />
        </div>
        <h6 class="label pb-4">Your Subscription</h6>
        <div className="flex items-center gap-4">
          <Image
            className="w-[120px] h-[120px] border border-bg3 shadow-img rounded-full"
            src={ProductImg}
            alt="user-img"
          />
          <div>
            <h6 className="label mb-0.5">MY lash serum</h6>
            <h6 className="label !text-red mb-0.5">3 month supply (2mL)</h6>
            <p className="text-t4 font-medium">Qty: 1</p>
          </div>
        </div>
      </div>

      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <h6 className="flex items-center gap-2 text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Delivered & Billed
              </h6>
              <ul className="flex flex-col gap-1.5 pl-[30px]">
                <li className="text-xs text-t4">
                  First Delivery & Billing Date
                </li>
                <li className="text-xs text-t4">
                  Next Delivery & Billing Date
                </li>
              </ul>
            </div>
            <div>
              <h6 className="flex items-center gap-2 text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Every 3 Months
              </h6>
              <ul className="flex flex-col gap-1.5 pl-[30px] sm:text-right">
                <li className="text-xs text-t4">Today</li>
                <li className="text-xs text-t4">Jan 16th, 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto px-4 py-8">
        <ShoppingWith />
        <div className="mt-24">
          <Language />
        </div>
      </div>

      <Footer />
      <div className="max-w-[484px] mx-auto px-4 py-8">
        <ButtonNextStep
          icon={<Lock />}
          handleClick={handleButtonClick}
          amt=""
          label="Place Order"
          iconClassName="hidden"
        />
      </div>
    </>
  );
};

export default SetupCard;
