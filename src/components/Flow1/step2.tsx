"use client";
import Image from "next/image";
import ProductImg from "../../assets/images/product-img.png";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import Footer from "@/common/Footer";

const Step2 = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4 py-12">
        <Image
          className="mx-auto block w-[154px] h-[154px] sm:h-[200px] sm:w-[200px] rounded-full"
          src={ProductImg}
          alt="product-img"
        />
        <h3 className="my-20 text-t2 text-center">
          Imagine not knowing
          <br />
          about toothpaste
        </h3>
        <Freeshipping />
        <ShoppingWith />
        <div className="mt-20">
          <Language />
        </div>
      </div>
      <Footer />
   
    </>
  );
};

export default Step2;
