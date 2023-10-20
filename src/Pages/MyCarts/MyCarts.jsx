
import { NavLink, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import banner from '../../assets/banner1.jpg'



const MyCarts = () => {
    const loaderData = useLoaderData()
    const [myCarts,setMyCarts] =  useState(loaderData)

    const deleteButton = id =>{
        console.log('hitting', id)
        swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:3000/products1/${id}`, {
          method:'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          const remaining = myCarts.filter(item=>item._id !== id)
          setMyCarts(remaining)
        

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });


   

  }

    return (
        <section>
            
            {/* <div className="hero " >
      <img className=' h-52 md:h-72 lg:h-96 w-full object-full' src={banner} alt="" />
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold ">Services</h1>
      <div className="  flex gap-4 text-base   md:flex-row ">
      <NavLink to="/"><li>Home</li></NavLink>
      <NavLink to="/gallery"><li>Gallery</li></NavLink>
 
  </div>
    </div>
  </div>
</div> */}


<div className="overflow-x-auto">
  <table className="table">
 
    <thead>
      <tr className="bg-[#2B2D42] text-white">
    
        <th>Name</th>
        <th>Image</th>
        <th>Brand Name</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
  
    {
        myCarts.map(cart=> 
            <tr key={cart._id}>
            <td>{cart.name}</td>
            <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cart.image} />
              </div>
            </div>
            
          </div>
            <td >{cart.brandName}</td>
            <td>${cart.price}</td>
            <td className="text-2xl" onClick={()=>deleteButton(cart._id)}><AiFillDelete></AiFillDelete></td>
            
          </tr>
            
            )
    }
     
      
    </tbody>
  </table>
</div>





        </section>
    );
};

export default MyCarts;



