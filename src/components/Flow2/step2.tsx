"use client";
import ArrowRightIcon from "../../assets/images/icons/arrow-right.svg";
import Language from "@/components/language";
import Footer from "@/common/Footer";

const Step2 = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
        <h3 className="font-bold">Need help signing in?</h3>
      </div>
      <div className="max-w-[484px] mx-auto px-4">
        <div className="border-t border-inputcolor py-4 flex items-center gap-2.5 justify-between">
          <div>
            <p className="text-base sm:text-lg text-t3 mb-0">
              Reset Email / Password
            </p>
          </div>
          <ArrowRightIcon />
        </div>
        <div className="border-b border-t border-inputcolor py-4 flex items-center gap-2.5 justify-between">
          <div>
            <p className="text-base sm:text-lg text-t3 mb-0">
              Resend Link to Activate Account
            </p>
          </div>
          <ArrowRightIcon />
        </div>
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

export default Step2;
