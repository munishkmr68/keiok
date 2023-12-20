import Image from "next/image";
import userImg from "../assets/images/user-img.png";
import ClipartImg from "../assets/images/unicorn-leftside.png";

const ShoppingWith = () => {
  return (
    <>
      <div className="border-y border-gray py-6">
        <h6 className="label mb-4">You are shopping with</h6>
        <div className="flex items-center gap-4">
          <Image
            className="w-[120px] h-[120px] rounded-full"
            src={userImg}
            alt="user-img"
          />
          <div>
            <h6 className="label mb-0.5">Jancy Wade</h6>
            <p className="">Brand Ambassador</p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray py-6">
        <h6 className="label mb-4">100% money-back guarantee</h6>
        <div className="flex items-center gap-4">
          <Image
            className="w-[120px] h-[120px] rounded-full"
            src={ClipartImg}
            alt="user-img"
          />
          <div>
            <p className="">
              If you are not 100% happy with MY lash serum let us know and
              we&apos;ll get give you full refund.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingWith;
