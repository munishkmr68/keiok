"use client";
import Image from "next/image";
import userImg from "../../assets/images/user-img.png";
import ClipartImg from "../../assets/images/clipart-img.png";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";


interface Step3Props {
  onContinueClick: () => void;
}

const Step3: React.FC<Step3Props> = ({ onContinueClick }) => {
  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    onContinueClick();
        // Delay the scroll operation to allow time for rendering
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
  };
  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4 py-12">
        <div className="flex gap-2 font-medium text-base sm:text-lg justify-center sm:justify-between">
          <div className="flex flex-col items-center gap-4">
            <Image
              className="sm:w-[200px] sm:h-[200px] w-[154px] h-[154px]"
              src={userImg}
              alt="user-img"
            />
            Before
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              className="sm:w-[200px] sm:h-[200px] w-[154px] h-[154px]"
              src={ClipartImg}
              alt="user-img"
            />
            After
          </div>
        </div>
        <h3 className="my-20 text-t2 text-center">
          It only works
          <br />
          IF you use it
        </h3>
        <Freeshipping />
        <ShoppingWith />
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="max-w-[484px] mx-auto px-4 py-8">
      <ButtonNextStep handleClick={handleButtonClick} amt="" label="Continue" />
      </div>
    </>
  );
};

export default Step3;
