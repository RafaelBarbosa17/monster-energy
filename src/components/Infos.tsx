"use client";
import { useState } from "react";
import Details from "./Details";
import Table from "./Table";
import Ingredients from "./Ingredients";

export interface DetailsData {
  caffeine: string;
  sugars: string;
}

export interface NutritionalInfo {
  energetic_value: string ,
  carbohydrates: string ,
  sugars: string ,
  sodium: string ,
  vitamin_B3: string ,
  vitamin_B6: string ,
  vitamin_B2: string ,
  vitamin_B12: string ,
  taurine: string ,
  caffeine: string ,
  glucuronolactone: string ,
  inositol: string 
}

interface DataProps {
  details: DetailsData;
  nutritional_info: NutritionalInfo
}

const Nav = (prop: { data: DataProps }) => {
  const [select, setSelect] = useState("details");

  const selectedLi = (id: string) => {
    setSelect(id);
    
  };

  return (
    <section className="mt-4">
      <header className="w-full">
        <nav className="w-full flex justify-center">
          <ul className="max-w-[500px] w-full flex flex-row justify-between px-2" id={select}>
            <li>
              <button
                className="font-inter uppercase flex flex-col items-center"
                onClick={() => {
                  selectedLi("details");
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
                className="font-inter uppercase flex flex-col items-center"
                onClick={() => {
                  selectedLi("nutritionals");
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
                className="font-inter uppercase flex flex-col items-center"
                onClick={() => {
                  selectedLi("ingredients");
                  document.querySelector('#box')?.scroll({
                    left: 2000
                  })
                }}
              >
                Ingredientes
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section
        className="w-full flex flex-row justify-center mb-60"
      >
        <div id="box" className="md:max-w-[50%] flex flex-row overflow-x-hidden snap-mandatory scroll-smooth snap-x">
          <Details details={prop.data.details} />
          <Table nutritional={prop.data.nutritional_info} />
          <Ingredients />
        </div>
      </section>
    </section>
  );
};

export default Nav;
