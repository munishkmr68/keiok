// Home.js

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Step1 from "../components/Flow1/step1";
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
import ButtonNextStep from "@/common/buttonNextStep";

const Home = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleButtonClick = () => {
    console.log("Button clicked!");

    if (currentStep === steps.length - 1) {
      // If on the last step, navigate to a different page
      router.push("/activate"); // Replace "/other-page" with the actual path you want to navigate to
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);

    // Delay the scroll operation to allow time for rendering
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
    <Step9 key={9} />,
    <Step10 key={10} />,
    <Step11 key={11} />,
  ];

  return (
    <>
      {steps[currentStep]}
      <ButtonNextStep handleClick={handleButtonClick} label="Continue" />
    </>
  );
};

export default Home;
