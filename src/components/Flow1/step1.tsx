"use client";
import Image from "next/image";
import userImg from "../../assets/images/user-img.png";
import ClipartImg from "../../assets/images/clipart-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";

const Step1 = () => {
  const handleButtonClick = () => {
    // Your button click logic
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12">
        <div className="flex gap-4 font-medium text-base sm:text-lg justify-between">
          <div className="flex flex-col items-center  gap-4 flex-1">
            <Image className="" src={userImg} alt="user-img" />
            Jancy Wade
          </div>
          <div className="flex flex-col items-center gap-4 flex-1">
            <Image className="" src={ClipartImg} alt="user-img" />
            You
          </div>
        </div>
        <h3 className="mt-[52px] sm:mt-20 text-t2 text-center">
          Welcome to MY shop!
        </h3>
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Step1;
