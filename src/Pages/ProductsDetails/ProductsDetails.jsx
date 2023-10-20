
import { useLoaderData } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
const ProductsDetails = () => {
    const product = useLoaderData()
    console.log(product)
    return (
        <section>
            <ProductDetail product={product}></ProductDetail>

        </section>
    );
};

export default ProductsDetails;