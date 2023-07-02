

import { useContext } from "react";
import { ProductContext } from "./ProductContext";


const useProduct = () => {
    const context = useContext(ProductContext)

    if (!context) {
        return
    }

    const {product} = context
    return product
}

export default useProduct;