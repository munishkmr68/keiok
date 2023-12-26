// Home.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Step1 from "../components/Flow1/Step1/step1";
import Join from "../components/Flow1/Step1/join";
import Step2 from "../components/Flow1/step2";
import Step3 from "../components/Flow1/step3";
import Step4 from "../components/Flow1/step4";
import Step5 from "../components/Flow1/step5";
import Step6 from "../components/Flow1/step6";
import Step7 from "../components/Flow1/step7";
import Step8 from "../components/Flow1/step8";
import Step9 from "../components/Flow1/step9";
import Step10 from "../components/Flow1/step10";
import Step11 from "../components/Flow1/step11";

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleButtonClick = () => {
    // Check if there is a next step
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // If there are no more steps, you can navigate to another page or perform any other action
      router.push("/activate"); // Change "/next-page" to the desired route
    }
  };

  const handleBackClick = () => {
    // Check if there is a previous step
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    <Step1 key={1} onContinueClick={handleButtonClick} />,
    <Join key={2} onContinueClick={handleButtonClick} onBackClick={handleBackClick} />,
    <Step2 key={3} onContinueClick={handleButtonClick} onBackClick={handleBackClick} />,
    <Step3 key={4} onContinueClick={handleButtonClick}  />,
    <Step4 key={5} onContinueClick={handleButtonClick} onBackClick={handleBackClick} />,
    <Step5 key={6} onContinueClick={handleButtonClick} onBackClick={handleBackClick}  />,
    <Step6 key={7} onContinueClick={handleButtonClick} onBackClick={handleBackClick} />,
    <Step7 key={8} onContinueClick={handleButtonClick} />,
    <Step8 key={9} onContinueClick={handleButtonClick} />,
    <Step9 key={10} onContinueClick={handleButtonClick} />,
    <Step10 key={11} onContinueClick={handleButtonClick} />,
    <Step11 key={12}  />,
  ];

  return (
    <>
      {steps[currentStep]}
    </>
  );
};

export default Home;
