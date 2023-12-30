"use client";
import Image from "next/image";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import Notification from "../notification";

const Step1 = () => {
  const handleButtonClick = () => {
    // Your button click logic
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12 pb-[20px]">
        <h3 className="font-bold">Sign In</h3>
        <div className="mt-[20px]">
          <Notification
            backgroundColor="#B80000"
            icon={<></>}
            message="We were unable to find an account with the email address you entered. Please try again or create a new account"
          />
        </div>
      </div>

      <div className="bg-bg3 py-8 pt-3 px-4">
        <div className="max-w-[484px] mx-auto sm:px-4">
          <Image
            className="max-w-[66px] ml-auto mb-1"
            src={NortonLogo}
            alt="logo"
          />
          <div className="flex flex-col gap-[9px]">
            <Inputbox
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
              className="valid"
            />
            <div>
              <Inputbox
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email"
                className="invalid"
              />
              <p className="text-sm text-red">Please provide a valid email address.</p>
            </div>
            <div>
              <Inputbox
                name="password"
                id="password"
                autoComplete="password"
                placeholder="Password"
              />
              {/* <p className="text-sm text-red">The password must contain between 4 and 60 characters.</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto px-4">
        <button className="dark-button-outlined mt-8" onClick={handleButtonClick}>
          Need Help?
        </button>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="mt-24 border-b border-gray">
          <Language />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Step1;
