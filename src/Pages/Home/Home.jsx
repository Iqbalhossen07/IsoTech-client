import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import Banner from "../../componets/Banner/Banner";
import Shipping from "../Shipping/Shipping";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import Footer from "../Footer/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'



const Home = () => {
    const [brands,setBrands] = useState([])


    useEffect(()=>{
        Aos.init({
          duration: 1000, 
          easing: 'ease-in-out', 
          offset: 100, 
        })
      },[])
  

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
            <h2 className="text-center mt-10 text-3xl md:text-4xl font-medium text-[#3ED39A] mb-10" data-aos = "flip-down">Our Brands </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                
           
           {
               brands.map(brand=><Brand key={brand.id} brand={brand}></Brand>)
           }
        
            </div>
           <div className="mt-10 md:mt-16 lg:mt-20">
           <FeaturedProduct></FeaturedProduct>
           </div>
           <div>
         
           </div>
        </section>
    );
};

export default Home;