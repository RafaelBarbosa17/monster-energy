"use client";
import { useState } from "react";
import Details from "./Details";
import Table from "./Table";
import Ingredients from "./Ingredients";

const Infos = () => {
  const [select, setSelect] = useState(["active", "desactive", "desactive"]);

  const selectedLi = (id: any) => {
    setSelect(id);
    
  };

  return (
    <section className="mt-4">
      <header className="w-full">
        <nav className="w-full flex justify-center">
          <ul className="max-w-[500px] w-full flex flex-row justify-between px-2">
            <li>
              <button
                className={"font-inter uppercase flex flex-col items-center " + select[0]}
                onClick={() => {
                  selectedLi(["active", "desactive", "desactive"]);
                  document.querySelector('#box')?.scroll({
                    left: 0
                  })
                }}
              >
                Detalhes
              </button>
            </li>
            <li>
              <button
                className={"font-inter uppercase flex flex-col items-center " + select[1]}
                onClick={() => {
                  selectedLi(["desactive", "active", "desactive"]);
                  document.querySelector('#box')?.scroll({
                    left: 1000
                  })
                }}
              >
                Nutrição
              </button>
            </li>
            <li>
              <button
                className={"font-inter uppercase flex flex-col items-center " + select[2]}
                onClick={() => {
                  selectedLi(["desactive", "desactive", "active"]);
                  document.querySelector('#box')?.scroll({
                    left: 3000
                  })
                }}
              >
                Ingredientes
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="w-full flex flex-row justify-center mb-6 pt-6">
        <div id="box" className="md:max-w-[50%] flex flex-row overflow-x-hidden snap-mandatory scroll-smooth snap-x">
          <Details />
          <Table />
          <Ingredients />
        </div>
      </section>
    </section>
  );
};

export default Infos;
