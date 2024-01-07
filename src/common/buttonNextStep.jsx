import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const ButtonNextStep = ({ handleClick, label, amt, icon, iconClassName }) => {
  return (
    <button
      className="primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white"
      onClick={handleClick}
    >
      {amt && <span>{amt}</span>}
      {icon}
      {label && <span>{label}</span>}
      <ChevronRightIcon className={`${iconClassName} w-4 h-4`} />
    </button>
  );
};

export default ButtonNextStep;
