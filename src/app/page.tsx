
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import CharchPhrase from "@/components/CharchPhrase";
import ProductProvider from "@/context/ProductContext";
import Infos from "@/components/Infos";

export default function Home() {
  return (
    <ProductProvider>
      <div className="Home overflow-auto snap-mandatory snap-both">
        <Header />
        <Banner />
        <CharchPhrase />
        <Infos />
      </div>
    </ProductProvider>
  );
}
