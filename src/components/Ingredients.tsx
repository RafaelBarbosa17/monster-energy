
const Ingredients = (prop: {ingredients: string}) => {
    return (
        <section className="w-full min-w-[350px] snap-center mx-[100%] relative">
            <h3 className="text-3xl uppercase font-bold font-teko text-icewhite leading-none">
                Detalhes dos Ingredientes
            </h3>
            <div>
                <p className="font-inter">
                    {prop.ingredients}
                </p>
            </div>
        </section>
    )
}

export default Ingredients;