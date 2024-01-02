"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Choose from "@/components/EarnMyWay/Affiliate/Choose";
import BirthDate from "@/components/EarnMyWay/Affiliate/BirthDate";
import Sponsor from "@/components/EarnMyWay/Affiliate/Sponsor";
import Website from "@/components/EarnMyWay/Affiliate/Website";
import HowJoin from "@/components/EarnMyWay/Affiliate/HowJoin";
import Review from "@/components/EarnMyWay/Affiliate/Review";
import Confirmation from "@/components/EarnMyWay/Affiliate/Confirmation";

const Affiliate: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleButtonClick = () => {
    // Check if there is a next step
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // If there are no more steps, you can navigate to another page or perform any other action
      router.push("/earnmyway/ambassador"); // Change "/next-page" to the desired route
    }
  };

  const handleBackClick = () => {
    // Check if there is a previous step
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    <Choose
      key={1}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    <BirthDate
      key={2}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    <Sponsor
      key={3}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    <Website
      key={4}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    <HowJoin
      key={5}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    <Review
      key={6}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    <Confirmation
      key={7}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
  ];

  return <>{steps[currentStep]}</>;
};

export default Affiliate;
