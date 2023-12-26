import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface ButtonNextStepProps {
  handleClick: () => void;
  label: string;
  amt: string;
  icon?: React.ReactNode;
}

const ButtonNextStep: React.FC<ButtonNextStepProps> = ({ handleClick, label, amt, icon }) => {
  return (
    <button
      className="primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white"
      onClick={handleClick}
    >
      {amt && <span>{amt}</span>} 
      {icon}
      {label && <span>{label}</span>} 
      <ChevronRightIcon className="w-4 h-4" />
    </button>
  );
};

export default ButtonNextStep;
