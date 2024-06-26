"use client";
import Image from "next/image";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import Notification from "@/components/notification";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import ProductImg from "../../assets/images/prd-img.png";
import YourTotal from "@/components/yourtotal";
import Arrow from "../../assets/images/icons/check-circle-white.svg";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import ActivateAccountLaterModal from "./ActivateAccountLaterModal";
import Lock from "../../assets/images/icons/lock-white.svg";

const Step9 = ({ onContinueClick }) => {
  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    onContinueClick();
    // Delay the scroll operation to allow time for rendering
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <LockCircleIcon className="mb-6 mt-8" />
        <Notification
          icon={<Arrow />}
          message="Thank you, Erica! You have subscribed to MY lash serum."
        />
        <h3 className="mb-4 mt-5">Are you ready to activate your account?</h3>
        <p className="text-t4 mb-6 text-base ">
          Activate your account and easily manage or cancel your subscription.
        </p>
        <p className="text-t4 sm:text-lg text-base font-bold mb-2.5">
          Activate account later?
        </p>
        <p className="text-t4 text-base  mb-2">
          A link to active your account has been sent to:
        </p>
        <p className="text-t4 text-base  font-bold  pb-[30px] border-b border-gray">
          j 2@gmail.com
        </p>
        <div className="divide-y divide-gray mt-24">
          <div className="pb-[30px]">
            <h3 className="mb-4">Order Confirmation</h3>
            <div className="flex flex-col gap-3.5 text-t4 text-base">
              <p>
                Thank you, Erica! We are processing your order and have sent a
                confirmation to your email:
              </p>
              <p className="text-t4 text-base  font-bold">j 2@gmail.com</p>
              <p>
                If you don&apos;t see the confirmation email within your inbox
                within an hour, please check your spam folder.
              </p>
              <p>
                Tracking information will be emailed to you within 48-72 hours.
              </p>
              <p>
                If you have inquiries or concerns regarding your order, kindly{" "}
                <a href="#">email us.</a>
              </p>
            </div>
          </div>

          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Order Number:
            </div>
            <p className="text-t4 text-sm">321140866</p>
          </div>
          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Tracking Number:
            </div>
            <p className="text-t4 text-sm">
              We&apos;ll email you as soon as we have your tracking number.
            </p>
          </div>
          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Shipping Method:
            </div>
            <p className="text-t4 text-sm">Free shipping (standard)</p>
          </div>
          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Estimated Delivery:
            </div>
            <p className="text-t4 text-sm">Wed, Sep 06 - Mon, Sep 11</p>
          </div>
          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Shipping Address:
            </div>
            <p className="text-t4 text-sm">Wed, Sep 06 - Mon, Sep 11</p>
          </div>
          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Estimated Delivery:
            </div>
            <p className="text-t4 text-sm">
              Erica Jones
              <br />
              USA
              <br />
              3836 E Stiles Ln
              <br />
              Apt 1<br />
              Gilbert, AZ 85295-0150
            </p>
          </div>
        </div>

        <YourTotal />
        <Freeshipping />
        <h6 className="label mb-4 mt-5">Your Subscription</h6>
        <div className="flex items-center gap-4 mb-5">
          <Image
            className="w-[120px] h-[120px] border border-bg3 shadow-img rounded-full"
            src={ProductImg}
            alt="user-img"
          />
          <div>
            <h6 className="label mb-0.5">MY lash serum</h6>
            <h6 className="label !text-red mb-0.5">3 month supply (2mL)</h6>
            <p className="text-t4 font-medium text-sm text-base">Qty: 1</p>
          </div>
        </div>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-5">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <h6 className="label mb-4">Your Subscription</h6>
              <h6 className="flex items-center gap-2 text-base sm:text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Delivered & Billed
              </h6>
              <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px]">
                <li className="text-[10px] sm:text-xs text-t4">
                  First Delivery & Billing Date
                </li>
                <li className="text-[10px] sm:text-xs text-t4">
                  Next Delivery & Billing Date
                </li>
              </ul>
            </div>
            <div>
              <h6 className="flex items-center gap-2 text-base sm:text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Every 3 Months
              </h6>
              <ul className="flex flex-col gap-0 gap-1.5 pl-[30px] sm:text-right">
                <li className="text-[10px] sm:text-xs text-t4">Today</li>
                <li className="text-[10px] sm:text-xs text-t4">
                  Jan 16th, 2024
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 py-8">
        <ShoppingWith />
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="max-w-[484px] mx-auto px-4 py-8">
        <ButtonNextStep
          icon={<Lock />}
          handleClick={handleButtonClick}
          amt=""
          label="Activate MY Account"
        />
        <ActivateAccountLaterModal />
      </div>
    </>
  );
};

export default Step9;
