import { NavLink } from "react-router-dom";

const ProductDetail = ({product}) => {
    const{name,image,brandName,type,price,rating,shortDescription} = product;
    const newProduct = {name,image,brandName,type,price,rating,shortDescription}


    const productDetail = () =>{
        fetch('http://localhost:3000/products1',{
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                swal("Good job!", "Product Added successfully!", "success");
            }

            console.log(product)
        })
    }
    return (
       <section>

 

<div className="relative flex w-full flex-row rounded-xl bg-base-100">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={image}
      className="w-96"
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
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {shortDescription}
    </p>
    <div className="flex gap-4">
    <div className="w-full"> 
    <button className="btn btn-outline btn-success" onClick={productDetail}>Add to card</button> 
        </div>
         </div>
    </div>
      </div>
      
       </section>
    );
};

export default ProductDetail;