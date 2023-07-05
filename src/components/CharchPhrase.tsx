"use client";
import Image from "next/image";
import useProduct from "@/context/useProduct";

const CharchPhrase = () => {
  const product = useProduct()

  return (
    <section id="charchphrase" className="thousand:h-screen thousand:mb-0 mb-10 snap-center">
      <div className="h-full snap-center">
        <div className="h-full flex justify-center md:items-center">
          <div className="md:block hidden w-[300px] h-auto max-h-[400px]" >
            <Image
              src={'/logo.png'}
              width={1000}
              height={1000}
              alt="Lata de monster original"
              className="w-full h-full"
            />
          </div>
          <div className="md:max-w-[40%]">
            <h2 className="mt-8 text-3xl uppercase text-center font-bold font-teko leading-none">
              {product?.catchphrase}
            </h2>
            <p className="text-md font-schoolbell px-2 md:px-4 text-center max-w-[400px]">
              {product?.can_detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharchPhrase;
