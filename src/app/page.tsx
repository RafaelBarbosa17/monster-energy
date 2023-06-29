
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import CharchPhrase from "@/components/CharchPhrase";
import Main from "@/components/Main";
import ProductProvider from "@/context/ProductContext";

export default function Home() {
  return (
    <ProductProvider>
      <div className="Home">
        <Header />
        <Banner />
        <CharchPhrase />
      </div>
    </ProductProvider>
  );
}
