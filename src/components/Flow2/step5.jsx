"use client";
import Image from "next/image";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";

const Step5 = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
        <h3 className="font-bold">Email sent</h3>
        <p className="text-t4 mb-0 text-base ">
          An email was sent to the specified email address with instructions on how to activate your account:
        </p>
        <p className="text-t4 text-base font-bold py-2">j......2@gmail.com</p>
        <p className="text-t4 mb-0 text-base ">
          Check your spam or junk folder if you don’t see the email in your box.
        </p>
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

export default Step5;
