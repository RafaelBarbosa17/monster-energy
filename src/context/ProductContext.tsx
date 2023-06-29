"use client"
import { ReactNode, createContext, useState } from "react";
import datas from "../datas.json";

export interface ProductProps {
  title: string;
  catchphrase: string;
  flavor: string;
  flavor_mensage: string;
  can_detail: string;
  nutritional_info: {
    energetic_value: string;
    carbohydrates: string;
    sugars: string;
    sodium: string;
    vitamin_B3: string;
    vitamin_B6: string;
    vitamin_B2: string;
    vitamin_B12: string;
    taurine: string;
    caffeine: string;
    glucuronolactone: string;
    inositol: string;
  };
  ingredients: string;
  details: {
    caffeine: string;
    sugars: string;
  };
}

export interface ContextType {
  product: ProductProps;
  changeProduct: (index: number) => void;
}

export const ProductContext = createContext<ContextType | undefined>(undefined);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const data = datas[0];
  const [product, setProduct] = useState<ProductProps>(data);

  const changeProduct = (index: number) => {
    setProduct(datas[index]);
  };

  const contextValue: ContextType = {
    product,
    changeProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
