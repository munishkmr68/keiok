"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Step1 from "../../components/Flow2/step1";
import Step2 from "../../components/Flow2/step2";
import Step3 from "../../components/Flow2/step3";
import Step4 from "../../components/Flow2/step4";
import Step5 from "../../components/Flow2/step5";
import Step6 from "../../components/Flow2/step6";
import Step7 from "../../components/Flow2/step7";
import Step8 from "../../components/Flow2/step8";
import ButtonNextStep from "@/common/buttonNextStep";

// Signin component
const Signin = () => {
  // React hooks
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  // Event handler for button click
  const handleButtonClick = () => {
    console.log("Button clicked!");

    if (currentStep === steps.length - 1) {
      router.push("/activate");
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const steps = [
    <Step1 key={1} />,
    <Step2 key={2} />,
    <Step3 key={3} />,
    <Step4 key={4} />,
    <Step5 key={5} />,
    <Step6 key={6} />,
    <Step7 key={7} />,
    <Step8 key={8} />,
  ];

  return (
    <>
      {steps[currentStep]}
      <div className="max-w-[484px] mx-auto px-4 py-8">
        <ButtonNextStep
          handleClick={handleButtonClick}
          amt=""
          label="Continue"
        />
      </div>
    </>
  );
};

// Export the component
export default Signin;
