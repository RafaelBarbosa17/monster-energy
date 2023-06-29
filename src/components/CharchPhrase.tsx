"use client";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import Image from "next/image";

const CharchPhrase = () => {
  const context = useContext(ProductContext);

  if (!context) {
    return null;
  }

  const { product } = context;

  return (
    <section id="charchphrase" className="h-screen">
      <div className="h-full snap-center">
        <div className="h-full flex justify-center">
          <div className="thousand:block hidden w-fit h-[90%]" >
            <Image
              src={'/cans/can-original.png'}
              width={500}
              height={300}
              alt="Lata de monster original"
              className="w-full h-full"
            />
          </div>
          <div className="md:max-w-[40%]">
            <h2 className="mt-8 text-3xl uppercase text-center font-bold font-teko leading-none">
              {product.catchphrase}
            </h2>
            <p className="text-md font-schoolbell px-2 md:px-4 text-center">
              {product.can_detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharchPhrase;
