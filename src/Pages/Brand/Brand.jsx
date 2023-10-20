import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";


const Brand = ({brand}) => {
    const {picture,name} = brand;

    useEffect(()=>{
        Aos.init({
          duration: 1000, 
          easing: 'ease-in-out', 
          offset: 100, 
        })
      },[])
 

  
    return (
       
       
         <section>
           
            <div className="card  bg-base-100 shadow-xl" data-aos = "zoom-in"> 
                <NavLink to={`products/${name}`} >
                <figure className=" pt-10">
                    <img  src={picture} alt="Shoes" className="rounded-xl h-64 w-96" />
                </figure>
                <div className="card-body items-center text-center">
                <button className="btn btn-outline px-8 btn-success" data-aos = "fade-up">{name}</button>
                  
                    
                </div>
                </NavLink>
                
                </div>
         </section>
      
      
    );
};

export default Brand;
