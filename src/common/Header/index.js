import Image from "next/image";
import userImg from "../../assets/images/user-img.png";
import ClipartImg from "../../assets/images/clipart-img.png";
import Menu from "@/components/menu";
import SubscriptionBar from "@/components/Flow1/SubscriptionBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-20  bg-white shadow-[0px_0px_7px_0px_rgba(0,0,0,0.20)]">
      <div className="mx-auto flex container items-center py-[18px] px-4">
        <div className="flex items-center gap-2">
          <Image className="max-w-[42px]" src={userImg} alt="user-img" />
          <Image className="max-w-[42px]" src={ClipartImg} alt="user-img" />
          <div className="text-xs font-medium text-t5">
            You are shopping with
            <br />
            Jancy Wade
          </div>
        </div>
        <Menu />
      </div>
      {/* <SubscriptionBar /> */}
    </header>
  );
};

export default Header;
