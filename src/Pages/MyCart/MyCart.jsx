// import { AiFillDelete } from 'react-icons/ai';

// const MyCart = ({myCart,myCarts,setMyCarts}) => {
//    const {_id,name,image,brandName,type,price,rating,shortDescription} = myCart;

//       const deleteButton = id =>{
//         console.log('hitting', id)
//         swal({
//       title: "Are you sure?",
//       text: "Once deleted, you will not be able to recover this imaginary file!",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       if (willDelete) {
//         fetch(`https://assignment-10-c1bce5d0c-iqbal-hossens-projects.vercel.app/products1/${id}`, {
//           method:'DELETE',
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//           })
//           const remaining = myCarts.filter(item=>item._id !== id)
//           setMyCarts(remaining)
        

//         swal("Poof! Your imaginary file has been deleted!", {
//           icon: "success",
//         });
//       } else {
//         swal("Your imaginary file is safe!");
//       }
//     });


   

//   }
   
//     return (
//         <section className="mx-auto">

//         <div className="relative flex w-full flex-col md:flex-row rounded-xl">
//   <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
//     <img
//       src={image}
//       className="md:w-[200px] "
//     />
//   </div>
//   <div className="p-6">
//     <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
//       {name}
//     </h6>
//     <div className="flex items-center justify-between mb-3">
//             <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
//               Brand Name: {brandName}
//             </h5>
//             <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 aria-hidden="true"
//                 className="-mt-0.5 h-5 w-5 text-yellow-700"
//               >
               
//               </svg>
//               {rating}
//             </p>
//           </div>

//           <div className="flex items-center justify-between mb-3">
//             <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
//               Price: {price}
//             </h5>
//             <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              
//              Type: {type}
//             </p>
//           </div>
   
//     <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
//       {shortDescription}
//     </p>
   
   

//      <button onClick={()=>deleteButton(_id)} className="btn btn-secondary" >Delete</button>    
    

//   </div>
// </div>


       
//        </section>
//     );
// };

// export default MyCart;




