import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import Banner from "../../componets/Banner/Banner";
import Shipping from "../Shipping/Shipping";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";



const Home = () => {
    const [brands,setBrands] = useState([])


    // const loaderProdcuts = useLoaderData()

    // // const filterProdcts = brands.filter(brand=> brand.name == loaderProdcuts.name)
    // // setFilterData(filterProdcts)

    // console.log(loaderProdcuts)
  

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])
    return (
        <section>
            <Banner></Banner>
            <div className="mt-10 md:mt-12 lg:mt-20">
            <Shipping ></Shipping>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
           
           {
               brands.map(brand=><Brand key={brand.id} brand={brand}></Brand>)
           }
        
            </div>
           <div className="mt-10 md:mt-16 lg:mt-20">
           <FeaturedProduct></FeaturedProduct>
           </div>
        </section>
    );
};

export default Home;