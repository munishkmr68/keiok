import Image from "next/image";
import PaymentIcon from "../assets/images/icons/payment-group.png";
import ArrowRightIcon from "../assets/images/icons/arrow-right.svg";
import ApplePay from "../assets/images/icons/applepay.svg";

const CrditDebitPay = () => {
  return (
    <>
      <div className="border border-inputcolor p-4 flex items-center gap-2.5 justify-between rounded-[3px] mb-1.5">
        <div>
          <p className="text-base sm:text-lg text-t3 mb-2">
            Credit or Debit Card
          </p>
          <Image className="max-w-[159px]" src={PaymentIcon} alt="img" />
        </div>
        <ArrowRightIcon />
      </div>
      <button className="border border-inputcolor rounded-[3px] w-full py-2.5 px-4 sm:px-6 flex items-center gap-2.5">
        <span className="mx-auto">
          <ApplePay />
        </span>
        <ArrowRightIcon className="stroke-current" />
      </button>
    </>
  );
};

export default CrditDebitPay;
