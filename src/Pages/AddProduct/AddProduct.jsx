
import { ToastContainer, toast } from "react-toastify";
const AddProduct = () => {

    const addProduct = e=>{
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

        console.log(name,image,brandName,type,price,rating,shortDescription)

        fetch('http://localhost:3000/products',{
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(products),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success("Product Added successfully")
                // swal("Good job!", "Product Added successfully!", "success");
            }
            console.log(data)
        })
    }


    return (
        <section className="mt-20 ">
        {/* first  */}
        <h2 className="text-center text-5xl font-semibold text-[#54e2d2] mb-3">Add Product</h2>
     <form onSubmit={addProduct}>
     <div className="flex flex-col md:flex-row gap-6  ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Name</span>
           </label>
           <label className="input-group">
             
               <input type="text" placeholder="Enter the product name" name="name" className="input input-bordered w-full" />
           </label>
           </div>


          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Image </span>
           </label>
           <label className="input-group">
             
               <input type="text" placeholder="Enter the image URL" name="image" className="input input-bordered w-full" />
           </label>
           </div>
       </div>
        {/* second */}
       <div className="flex flex-col md:flex-row gap-6 ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Band Name</span>
           </label>
           <label className="input-group">
             
               <input type="text" placeholder="Enter the brand name" name="brandName" className="input input-bordered w-full" />
           </label>
           </div>


          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Type </span>
           </label>
           <label className="input-group">
             
               <input type="text" placeholder="Enter the type"  name="type" className="input input-bordered w-full" />
           </label>
           </div>
       </div>
       {/* third */}
       <div className="flex flex-col md:flex-row gap-6 ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Price</span>
           </label>
           <label className="input-group">
             
               <input type="text" placeholder="Enter the price"  name="price" className="input input-bordered w-full" />
           </label>
           </div>


          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Rating
</span>
           </label>
           <label className="input-group">
             
               <input type="text" placeholder="Enter the rating"  name="rating" className="input input-bordered w-full" />
           </label>
           </div>
       </div>
       {/* third */}
       <div className="flex flex-col md:flex-row gap-6 ">
          <div className="form-control md:w-full">
           <label className="label">
               <span className="label-text">Short Description</span>
           </label>
           <label className="input-group">
             
               <input type="text" placeholder="Enter the price"  name="shortDescription" className="input input-bordered w-full" />
           </label>
           </div>


        
       </div>
    
       
       <div className="flex mt-10">
           <input type="submit" value="add Product" className="w-full text-white btn bg-[#54e2d2] hover:bg-[#54e2d2]" />
         
      


         
       </div>
     </form>
     <ToastContainer />
       
      </section>
    );
};

export default AddProduct;