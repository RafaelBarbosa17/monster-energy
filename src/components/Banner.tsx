"use client"
import Image from "next/image";
import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";
import useProduct from "@/context/useProduct";

const Banner = () => {
  const product = useProduct();

  return (
    <section id="banner" className="flex md:flex-row flex-col-reverse px-4 justify-around items-center md:items-end flex-wrap-reverse w-full thousand:h-[90vh] max-w-[1000px] mx-auto h-auto snap-center snap-always">
          <div className="md:w-2/4 w-full md:min-w-[450px] pt-4 flex justify-center flex-col animate-[comesRight_300ms_linear_forwards]">
            <div className="flex flex-col items-center pt-4 w-full">
              <h1 className="font-teko uppercase text-4xl font-bold leading-none w-full">
                {product?.title}
              </h1>
              <div className="flex flex-col justify-center items-center md:p-8 p-2 border border-icewhite">
                <div className="max-w-[200px] w-3/5 h-auto">
                  <Image
                    src={"/logos/logo-original.png"}
                    width={500}
                    height={300}
                    alt="logo original monster"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-base text-center font-inter mt-4">
                  {product?.flavor}
                </p>
              </div>
              <p className="text-base font-inter mt-4 md:px-8 max-w-[400px]">
                {product?.flavor_mensage}
              </p>
            </div>
          </div>
          <div className="flex flex-row pt-4 w-full min-h-full md:w-2/4 justify-center">
            <div className="bg-[url('/cans/can-original.png')] bg-contain bg-no-repeat bg-center min-w-full min-h-[50vh] md:h-[80vh] animate-[comesBottom_500ms_ease-in_forwards]">
            </div>
          </div>
    </section>
  );
};

export default Banner;