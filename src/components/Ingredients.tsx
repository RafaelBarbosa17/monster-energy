
import useProduct from "@/context/useProduct";

const Ingredients = () => {

    const product = useProduct()

    return (
        <section id="ingredients" className="w-full min-w-[100vw] flex justify-center snap-center mx-[100%] relative">
            <div className="max-w-[500px]">
                <h3 className="text-3xl text-center uppercase font-bold font-teko text-icewhite leading-none">
                    Detalhes dos Ingredientes
                </h3>
                <div>
                    <p className="font-inter px-4 text-center">
                        {product?.ingredients}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Ingredients;