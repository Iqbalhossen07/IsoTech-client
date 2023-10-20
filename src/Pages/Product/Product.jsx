import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



const Product = ({product}) => {
    const{name,image,brandName,type,price,rating,_id} = product
    // console.log(product)


    useEffect(()=>{
      Aos.init({
        duration: 1000, 
        easing: 'ease-in-out', 
        offset: 100, 
      })
    },[])
    return (
 

   <section>



     <div data-aos = "zoom-in" className=" relative flex flex-col w-full max-w-[48rem] md:flex-col lg:flex-row rounded-xl bg-base-100">
  <div className="relative w-1/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img 
      src={image}
      className="flex justify-center items-center object-cover h-64 w-64"
    />
  </div>
  <div className="p-3">
    <h6 className="mt-4 mb-4 text-xl">
    <span className="font-medium">Name :</span>
      <span className="text-[#3ED39A] pl-2">{name}</span>
    </h6>

    
    <h4 className="block mb-4 font-sans text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
      
      <span className="font-medium">Brand Name :</span> 
      <span className="pl-2">{brandName}</span>
    </h4>
    <p className="block mb-4 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
    <span className="font-medium ">Type:</span>
     <span className="pl-2">{type}</span>
    </p>
    <p className="block mb-4 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
    <span className="font-medium">Price: </span> 
    <span className="pl-2">${price}</span>
    </p>
    <p className="block mb-4 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
    <span className="font-medium">Rating:</span> 
    <span className="pl-2">{rating}</span>
    </p>
    <div className="flex gap-4">
    <div className="w-full" data-aos = "fade-right"> 
     <NavLink to={`/productsDetails/${_id}`}>
      <button className="btn btn-outline btn-success w-full" type="button" data-ripple-light="true" >Details </button>
      </NavLink>
        </div>
       
          <div className="w-full" data-aos = "fade-left">
          <NavLink to={`/productDetailUpdate/${_id}`}>
          <button className="btn btn-outline btn-warning w-full" type="button" data-ripple-light="true" >Update</button>
          </NavLink>
        </div>
         </div>
    </div>
      </div>
   </section>
  
    );
};

export default Product;