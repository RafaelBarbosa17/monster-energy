import Image from "next/image";

const Main = () => {
  return (
    <main className="flex md:flex-row flex-col-reverse px-4 justify-center items-center flex-wrap-reverse w-full">
      <section className="md:w-2/4 w-full md:min-w-[450px] pt-4 flex justify-center">
        <div className="flex flex-col items-center pt-4 w-full">
            <h1 className="font-teko uppercase text-4xl font-bold leading-none w-full">
                monster energy <br/> original
            </h1>
            <p className="font-schoolbell text-md text-center w-4/5 mb-12">
                Se liga no Monster Energy Original, a bebida energética mais irada
                do planeta! Um combo ideal de ingredientes na medida perfeita para
                fazer acontecer do jeito Monster. O sabor de Monster é ao mesmo
                tempo marcante e suave. Os atletas, a galera da facul, mochileiros,
                quem faz um som, geeks, hipsters e todas as tribos curtiram. Você
                vai curtir também!
            </p>
        </div>
      </section>
      <section className="flex flex-row pt-4 md:min-w-[485px] w-full md:w-2/4 justify-center">
        <div className="max-w-72 w-full">
          <Image
            src={"/cans/can-original.png"}
            width={500}
            height={100}
            alt="lata original do energetico monster"
            className="w-full sm:translate-x-20 translate-x-10"
          />
        </div>
        <div className="max-w-56 w-3/5 h-min translate-y-12">
            <Image
              src={"/logos/logo-original.png"}
              width={260}
              height={200}
              alt="logo original monster"
              className="w-full h-full"
            />
        </div>
      </section>
    </main>
  );
};

export default Main;