import Image from "next/image";
import datas from "../datas.json";
import Infos from "./Infos";

const Main = () => {
  return (
    <main className="w-full h-full">
      {datas.map((d) => (
          <div className="h-screen snap-center">
            <section className="w-full flex justify-center">
              <div className="md:max-w-[50%]">
                <h2 className="mt-8 text-3xl uppercase text-center font-bold font-teko leading-none">
                  {d.catchphrase}
                </h2>
                <p className="text-md font-schoolbell px-2 md:px-4 text-center">
                  {d.can_detail}
                </p>
              </div>
            </section>
            <Infos data={d} />
          </div>
      ))}
    </main>
  );
};

export default Main;
