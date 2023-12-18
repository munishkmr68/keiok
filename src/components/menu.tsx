import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ArrowRightIcon from "../assets/images/icons/arrow-right.svg";
import Close from "../assets/images/icons/close-circle.svg";
import Language from "@/components/languageStandAlone";

const Menu = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-full border border-t2 text-t2 hover:bg-t2 hover:text-white transition ease-in-out  px-4 py-2 ml-auto"
      >
        Menu
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full  justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform mt-24 p-7 bg-white  text-left align-middle  transition-all">
                  <Close
                    className="mb-5 sm:mb-24 ml-auto cursor-pointer"
                    onClick={closeModal}
                  />
                  <div className="divide-y divide-gray border-t border-gray">
                    <div className="py-6  flex items-center justify-between gap-2 group">
                      <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium group-hover:text-blue transition ease-in-out">
                        Join as a Brand Ambassador
                      </div>

                      <ArrowRightIcon className="transition ease-in-out group-hover:text-blue" />
                    </div>
                    <div className="py-6 flex items-center justify-between gap-2 group">
                      <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium group-hover:text-blue transition ease-in-out ">
                        Join as a Brand Affiliate
                      </div>

                      <ArrowRightIcon className="transition ease-in-out group-hover:text-blue" />
                    </div>
                  </div>

                  <Language />

                  <button className="dark-button mt-[30px]">Sign in</button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Menu;
