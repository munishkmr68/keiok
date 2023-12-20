import React from "react";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface ButtonNextStepProps {
  handleClick: () => void;
  label: string;
}

const ButtonNextStep: React.FC<ButtonNextStepProps> = ({
  handleClick,
  label,
}) => {
  return (
    <div className="max-w-[484px] mx-auto px-4 py-8">
      <button
        className="primary-button mx-auto flex items-center justify-center gap-4 sm:gap-7 text-white"
        onClick={handleClick}
      >
        {label} <ChevronRightIcon className="h-4 w-4 text-border-gray-400"
                aria-hidden="true" />
      </button>
    </div>
  );
};

export default ButtonNextStep;
