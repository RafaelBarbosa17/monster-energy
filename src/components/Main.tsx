import Image from "next/image";
import datas from "../datas.json";

const Main = () => {
  return (
    <main className="w-full">
      {datas.map((d) => (
        <div key={d.id}>
          <div className="flex md:flex-row flex-col-reverse px-4 justify-center items-center md:items-end flex-wrap-reverse w-full">
            <section className="md:w-2/4 w-full md:min-w-[450px] pt-4 flex justify-center flex-col">
              <div className="flex flex-col items-center pt-4 w-full">
                <h1 className="font-teko uppercase text-4xl font-bold leading-none w-full">
                  {d.title}
                </h1>
                <div className="flex flex-col justify-center items-center p-8 border border-icewhite">
                  <div className="max-w-[200px] w-3/5 h-min">
                    <Image
                      src={"/logos/logo-original.png"}
                      width={500}
                      height={300}
                      alt="logo original monster"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-base font-inter mt-4">{d.flavor}</p>
                </div>
                <p className="text-base font-inter mt-4 px-8">
                  {d.flavor_mensage}
                </p>
              </div>
            </section>
            <section className="flex flex-row pt-4 md:min-w-[485px] w-full md:w-2/4 justify-center">
              <div className="max-w-[300px] max-h-[60%] h-full">
                <Image
                  src={"/cans/can-original.png"}
                  width={400}
                  height={100}
                  alt="lata original do energetico monster"
                  className="w-full h-full"
                />
              </div>
            </section>
          </div>
          <div>
            <section>
              <h2 className="my-4 text-3xl uppercase text-center font-bold font-teko">
                {d.catchphrase}
              </h2>
              <p className="text-md font-schoolbell px-4">
                {d.can_detail}
              </p>
            </section>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
