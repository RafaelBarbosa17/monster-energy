
import { BsArrowRight } from "react-icons/bs";
import { DetailsData } from "./Infos";


const Details = (prop: {details: DetailsData}) => {
    return (
        <section id="detail" className="w-full min-w-[350px] snap-center mx-[100%] relative">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-md font-inter font-bold text-center m-6">
                    O QUE TEM NA LATA
                </h2>
                <div className="border w-fit">
                    <div className="flex flex-row p-8 gap-4 justify-center">
                    <div className="">
                        <h3 className="font-teko text-5xl text-center font-bold">
                        {prop.details.caffeine}
                        </h3>
                        <p className="uppercase text-center font-inter opacity-80">
                        mg de caféina por 200ml
                        </p>
                    </div>
                    <div className="min-h-full min-w-[2px] bg-icewhite opacity-70"></div>
                    <div>
                        <h3 className="font-teko text-5xl text-center font-bold">
                        {prop.details.sugars}
                        </h3>
                        <p className="uppercase text-center font-inter opacity-80">
                        gramas de açúcar
                        </p>
                    </div>
                    </div>
                    <button className="bg-black p-4 border-t border-t-icewhite flex flex-row w-full justify-center items-center gap-2 font-inter uppercase font-bold text-green text-md">
                    Por trás da garra
                    <BsArrowRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Details;