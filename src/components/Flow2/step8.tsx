"use client";
import Tabs from "@/components/tabs";
import Footer from "@/common/Footer";
import { Disclosure } from "@headlessui/react";
import CloseIcon from "@/assets/images/icons/close.svg"
import PlusIcon from "@/assets/images/icons/plus.svg";
import ForMySerum from "@/components/Faq/formyserum";
import Language from "@/components/language";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg"

function Step9() {
  const tabsData = [
    {
      label: 'Brand Ambassador',
      content: (
        <div>
          <div className="max-w-[484px] mx-auto  px-4">
            <h3 className="mt-5 mb-3">You are invited to join as a
              Brand Ambassador!</h3>
          </div>
          <div className="bg-pink">
            <div className="max-w-[484px] mx-auto  px-4 py-2">
              <span className="text-base sm:text-lg font-medium">
                Joining is free and easy
              </span>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto  px-4 pt-7 pb-[30px]">
            <ul className="text-t4 space-y-1">
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  keiok handles all shipping & returns for you
                </span>
              </li>
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  No order minimums
                </span>
              </li>
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  No commitments
                </span>
              </li>
            </ul>
          </div>
          <div>
          </div>
        </div>
      ),
    },
    {
      label: 'Brand Affiliate',
      content: (
        <div>
          <div className="max-w-[484px] mx-auto  px-4">
            <h3 className="mt-5 mb-3">You are invited to join as a
              Brand Affiliate!</h3>
          </div>
          <div className="bg-pink">
            <div className="max-w-[484px] mx-auto  px-4 py-2">
              <span className="text-base sm:text-lg font-medium">
                Joining is free and easy
              </span>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto  px-4 pt-7 pb-[30px]">
            <ul className="text-t4 space-y-1">
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  keiok handles all shipping & returns for you
                </span>
              </li>
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  No order minimums
                </span>
              </li>
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  No commitments
                </span>
              </li>
            </ul>
          </div>
          <div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="py-12">
        <div className="">
          <Tabs tabs={tabsData} />
          <div className="max-w-[484px] mx-auto px-4">
            <div className='border-t border-[#D8D8D8]'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="disclosure-button">
                      <span>FAQ for Brand Ambassador</span>
                      <PlusIcon className={`${open ? "hidden" : "block"} h-5 w-5`} />
                      <CloseIcon className={`${open ? "block" : "hidden"} `} />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ForMySerum />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="disclosure-button">
                      <span>FAQ for Brand Affiliate</span>
                      <PlusIcon className={`${open ? "hidden" : "block"} h-5 w-5`} />
                      <CloseIcon className={`${open ? "block" : "hidden"} `} />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ForMySerum />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto px-4">
            <div className="mt-24">
              <Language />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Step9;
