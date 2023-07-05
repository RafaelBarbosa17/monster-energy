"use client";
import { useState } from "react";
import Details from "./Details";
import Table from "./Table";
import Ingredients from "./Ingredients";

const Infos = () => {
  const [select, setSelect] = useState(["active", "desactive", "desactive"]);

  const selectedLi = (id: any) => {
    setSelect(id);
    
  };;

  return (
    <section id="infos" className="h-min thousand:h-screen">
      <header className="w-full">
        <nav className="w-full flex justify-center">
          <ul className="max-w-[500px] w-full flex flex-row justify-between px-2">
            <li>
              <a
                className={"font-inter uppercase flex flex-col items-center cursor-pointer " + select[0]}
                href="#details"
                onClick={() => {
                  selectedLi(["active", "desactive", "desactive"]);
                }}
              >
                Detalhes
              </a>
            </li>
            <li>
              <a
                className={"font-inter uppercase flex flex-col items-center cursor-pointer " + select[1]}
                href="#nutritional"
                onClick={() => {
                  selectedLi(["desactive", "active", "desactive"]);
                }}
              >
                Nutrição
              </a>
            </li>
            <li>
              <a
                className={"font-inter uppercase flex flex-col items-center cursor-pointer " + select[2]}
                href="#ingredients"
                onClick={() => {
                  selectedLi(["desactive", "desactive", "active"]);
                }}
              >
                Ingredientes
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="w-full flex flex-row justify-center mb-6 pt-6">
        <div id="box" className="w-full flex flex-row overflow-x-hidden snap-mandatory scroll-smooth snap-x">
          <Details />
          <Table />
          <Ingredients />
        </div>
      </section>
    </section>
  );
};

export default Infos;
