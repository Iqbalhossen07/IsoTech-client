import { RxTimer } from "react-icons/rx";
import { MdLocalShipping } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Shipping = () => {

    useEffect(()=>{
        Aos.init({
          duration: 1000, 
          easing: 'ease-in-out', 
          offset: 100, 
        })
      },[])
    return (
        <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-8">
            <div data-aos = "fade-right" className="card  bg-[#042C3E] shadow-xl">
           
            <div className="card-body h-52  items-center text-center">
                <h2 className="card-title text-white text-5xl"><MdLocalShipping></MdLocalShipping></h2>
                <p className="text-white text-3xl font-medium">Fast Delivery</p>
                <p className="text-white ">We provide fast delivery</p>
                
            </div>
            </div>
            <div data-aos = "fade-down" className="card  bg-[#042C3E] shadow-xl">
           
            <div className="card-body h-52  items-center text-center">
                <h2 className="card-title text-white text-5xl"><BsCashCoin></BsCashCoin></h2>
                <p className="text-white text-3xl font-medium">Free Shipping</p>
                <p className="text-white">We provide free sipping</p>
                
            </div>
            </div>
            <div data-aos = "fade-left" className="card  bg-[#042C3E] shadow-xl">
           
            <div  className="card-body h-52  items-center text-center">
                <h2 className="card-title text-white text-4xl"><RxTimer></RxTimer></h2>
                <p className="text-white text-3xl font-medium">24/7 Services</p>
                <p className="text-white">We always provide service</p>
                
            </div>
            </div>
           
        </div>
    );
};

export default Shipping;