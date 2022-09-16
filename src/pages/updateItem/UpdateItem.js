/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../../components/shared/Loading";
import auth from "../auth/firebase.init";
const updateItem = () => {
  const { id } = useParams();
  console.log(id);
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

            {
              // upload all data with new imgbb link to database
              // eslint-disable-next-line no-lone-blocks
              const newDataWithImgBB = {
                ...data,
                photo: imgBBdisplayURL,
                email: user.email,
              };
              console.log(newDataWithImgBB);
              fetch("http://localhost:8080/product", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newDataWithImgBB),
              })
                .then(function (response) {
                  return response.json();
                })
                .then(function (data) {
                  console.log(data);
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
                  src={imgBBdisplayURL}
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
                  placeholder="Quantity"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-900"
                />
                <input
                  id="price"
                  {...register("price", { min: 0, required: true })}
                  type="number"
                  placeholder="Price"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <input
                  id="supplier"
                  {...register("supplier", { required: true })}
                  type="text"
                  placeholder="Supplier Name"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-500"
                />
              </div>
              <div className="col-span-full">
                <textarea
                  id="description"
                  {...register("description", { required: true })}
                  type="text"
                  placeholder="Description"
                  rows="6"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-500"
                ></textarea>
              </div>
            </fieldset>
          </div>
          <div className=" mx-auto w-full flex justify-center mt-10">
            <input
              type="submit"
              value="Add"
              className=" btn btn-warning w-52"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default updateItem;
