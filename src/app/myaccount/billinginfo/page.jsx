// EarnMyWay.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Account from "@/components/MyAccount/AccountInfo/Account";
import BillingInfo from "@/components/MyAccount/AccountInfo/BillingInfo";

const EarnMyWay = () => {
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
    <Account
      key={1}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,

    <BillingInfo
      key={6}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
  ];

  return <>{steps[currentStep]}</>;
};

export default EarnMyWay;
