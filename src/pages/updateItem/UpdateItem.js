/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../../components/shared/Loading";
import auth from "../auth/firebase.init";
const updateItem = () => {
  // get id from url and fetch data based on that id
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8080/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  useEffect(()=>{
    // setImgBBdisplayURL(product.photo)
    // console.log(imgBBdisplayURL);
  },[])

  const [user, loading] = useAuthState(auth);
  const [imgBBdisplayURL, setImgBBdisplayURL] = useState("");
  const { register, handleSubmit, error } = useForm();
  if (loading) return <Loading />;

  const submit = (data) => {
    // upload image to img bb
    // eslint-disable-next-line no-lone-blocks
    {
      const formData = new FormData();
      formData.append("image", data.photo[0]);
      const url = `https://api.imgbb.com/1/upload?key=262e7d4ee7c68ebbd1d0f36491313d7a`;
      if (data?.photo[0]) {
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((result) => {
            setImgBBdisplayURL(result.data.display_url);
            // console.log(imgBBdisplayURL);
            {
              // upload all data with new imgbb link to database
              // eslint-disable-next-line no-lone-blocks
              const newDataWithImgBB = {
                ...data,
                photo: result.data.display_url,
                email: user.email,
              };
              console.log(newDataWithImgBB); 
              
              // send updated product to database
              fetch(`http://localhost:8080/product/update/${id}`,
                {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(newDataWithImgBB),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  // toast.info("Updated Done!", { theme: "colored" });      
                  // e.target.reset();
                });
            }
          });
      }
    }
  };
  if (loading) return <Loading />;
  return (
    <div>
      <h2 className="text-3xl text-center">Update Product</h2>
      <p className="text-center text-stone-400">
        Please fill this form carefully
      </p>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          className="container mx-auto space-x-0 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit(submit)}
        >
          <div className="flex flex-col lg:flex-row  lg:space-x-10 space-y-10 lg:space-y-0">
            <fieldset className="p-6 lg:w-1/2 w-full border border-dashed rounded-md shadow-md dark:bg-gray-900">
              <div className="col-span-full">
                <input
                  {...register("photo", { required: true })}
                  type="file"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-900"
                />
              </div>
              <div className="max-w-xs mx-auto rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img
                  src={product.photo}
                  alt="selectedImage"
                  className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
              </div>
            </fieldset>
            <fieldset className="p-6 lg:w-1/2 w-full border border-dashed rounded-md shadow-md dark:bg-gray-900 space-y-5">
              <div className="col-span-full">
                <input
                  {...register("productName", { required: true })}
                  id="product-name"
                  defaultValue={product.productName}
                  type="text"
                  placeholder="Product Name"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-500"
                />
              </div>
              <div className="col-span-full flex space-x-5">
                <input
                  {...register("quantity", { min: 0, required: true })}
                  id="quantity"
                  type="number"
                  defaultValue={product.quantity}
                  placeholder="Quantity"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-900"
                />
                <input
                  id="price"
                  {...register("price", { min: 0, required: true })}
                  type="number"
                  placeholder="Price"
                  defaultValue={product.price}
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <input
                  id="supplier"
                  {...register("supplier", { required: true })}
                  type="text"
                  placeholder="Supplier Name"
                  defaultValue={product.supplier}
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-500"
                />
              </div>
              <div className="col-span-full">
                <textarea
                  id="description"
                  {...register("description", { required: true })}
                  type="text"
                  placeholder="Description"
                  defaultValue={product.description}
                  rows="6"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-500"
                ></textarea>
              </div>
            </fieldset>
          </div>
          <div className=" mx-auto w-full flex justify-center mt-10">
            <input
              type="submit"
              value="Update"
              className=" btn btn-warning w-52"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default updateItem;
