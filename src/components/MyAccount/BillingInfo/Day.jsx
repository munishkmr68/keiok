"use client";
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import SelectArrow from "../../../assets/images/icons/select-arrow.svg";

import React from "react";

const days = ["1", "2", "3", "4", "5", "6", "7"];

// ... (existing imports)

export default function Day() {
  const [selected, setSelected] = useState(null); // or useState("");

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative z-20 w-full">
          <Listbox.Button
            className={`relative min-h-[54px] w-full cursor-default selectbox outline-none text-left py-5 pb-1 ${
              selected !== null ? "selected-option" : ""
            }`}
          >
            <span className="truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5">
              <SelectArrow />
            </span>
            <label className="floating-listbox-label">Day</label>
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute  top-full max-h-60 w-full m-0 p-0 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {days.map((day, dayIdx) => (
                <Listbox.Option
                  key={dayIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-3.5 pl-10 pr-4 odd:bg-bg3 ${
                      active
                        ? "bg-sky-100 text-sky-900"
                        : "text-border-gray-900"
                    }`
                  }
                  value={day}
                >
                  {({ selected }) => (
                    <React.Fragment>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {day}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </React.Fragment>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
}
