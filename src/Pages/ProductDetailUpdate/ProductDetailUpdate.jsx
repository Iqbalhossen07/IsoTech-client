import { useLoaderData } from "react-router-dom";


const ProductDetailUpdate = () => {
    const productUpdate = useLoaderData()
    const UpdateProduct = e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDescription = form.shortDescription.value;
        const products = {name,image,brandName,type,price,rating,shortDescription}

        
        
        fetch(`http://localhost:3000/products/${productUpdate._id}`,{
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(products),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                swal("Good job!", "Product Updated successfully!", "success");
            }
           
            console.log(data)
        })

    }

    return (
        <section className="p-24 bg-[#F4F3F0]">
        {/* first  */}
        <h2 className="text-center text-5xl font-semibold">Update  Product</h2>
     <form onSubmit={UpdateProduct}>
     <div className="flex gap-6  ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Name</span>
           </label>
           <label className="input-group">
             
               <input type="text" defaultValue={productUpdate.name} placeholder="Enter the product name" name="name" className="input input-bordered w-full" />
           </label>
           </div>


          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Image </span>
           </label>
           <label className="input-group">
             
               <input type="text" defaultValue={productUpdate.image} placeholder="Enter the image URL" name="image" className="input input-bordered w-full" />
           </label>
           </div>
       </div>
        {/* second */}
       <div className="flex gap-6 bg-[#F4F3F0] ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Brand Name</span>
           </label>
           <label className="input-group">
             
               <input type="text" defaultValue={productUpdate.brandName} placeholder="Enter the brand name" name="brandName" className="input input-bordered w-full" />
           </label>
           </div>


          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Type </span>
           </label>
           <label className="input-group">
             
               <input type="text" defaultValue={productUpdate.type} placeholder="Enter the type"  name="type" className="input input-bordered w-full" />
           </label>
           </div>
       </div>
       {/* third */}
       <div className="flex gap-6 bg-[#F4F3F0] ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Price</span>
           </label>
           <label className="input-group">
             
               <input type="text" defaultValue={productUpdate.price} placeholder="Enter the price"  name="price" className="input input-bordered w-full" />
           </label>
           </div>


          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Rating
</span>
           </label>
           <label className="input-group">
             
               <input type="text" defaultValue={productUpdate.rating} placeholder="Enter the rating"  name="rating" className="input input-bordered w-full" />
           </label>
           </div>
       </div>
       {/* third */}
       <div className="flex gap-6 bg-[#F4F3F0] ">
          <div className="form-control md:w-full">
           <label className="label">
               <span className="label-text">Short Description</span>
           </label>
           <label className="input-group">
             
               <input type="text" defaultValue={productUpdate.shortDescription} placeholder="Enter the ShortDescription"  name="shortDescription" className="input input-bordered w-full" />
           </label>
           </div>


        
       </div>
    
       
       <div className="flex mt-10">
           <input type="submit" value="Update Product" className="w-full text-white btn bg-[#D2B48C] hover:bg-[#D2B48C]" />
         
      


         
       </div>
     </form>
       
      </section>
    );
};

export default ProductDetailUpdate;