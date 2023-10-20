
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import Advertisement from "../Advertisement/Advertisement";



const Products = () => {
    const [products,setProducts] = useState([])
    
    // console.log(products)
    const {brandName} = useParams()
    const loaderData = useLoaderData()
    useEffect(()=>{
        const filterData = loaderData.filter(item=>item.brandName == brandName)
       
        setProducts(filterData)

    },[])
    // console.log(products)
   

  
    return (
        <section>

            <Advertisement></Advertisement>


            <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mx-auto my-20">
            {
                products.map((product)=><Product key={product._id} product={product}></Product>)
            }
        </div>
        </section>
    );
};

export default Products;