import React from "react";

const AddItem = () => {
  return (
    <div>
      <h2 className="text-3xl text-center">Add Product</h2>
      <p className="text-center text-stone-400">
        Please fill this form carefully
      </p>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form className="container mx-auto space-x-0 ng-untouched ng-pristine ng-valid">
          <div className="flex flex-col lg:flex-row  lg:space-x-10 space-y-10 lg:space-y-0">
            <fieldset className="p-6 lg:w-1/2 w-full border border-dashed rounded-md shadow-md dark:bg-gray-900">
              <div className="col-span-full">
                <input
                  type="file"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-900"
                />
              </div>
              <div className="max-w-xs mx-auto rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img
                  src="https://cdn.dribbble.com/users/731646/screenshots/16592987/add_product_page_4x.png"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
              </div>
            </fieldset>
            <fieldset className="p-6 lg:w-1/2 w-full border border-dashed rounded-md shadow-md dark:bg-gray-900 space-y-5">
              <div className="col-span-full">
                <input
                  id="product-name"
                  type="text"
                  placeholder="Product Name"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-500"
                />
              </div>
              <div className="col-span-full flex space-x-5">
                <input
                  id="quantity"
                  type="number"
                  placeholder="Quantity"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-900"
                />
                <input
                  id="price"
                  type="number"
                  placeholder="Price"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <input
                  id="supplier"
                  type="text"
                  placeholder="Supplier Name"
                  className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-400 dark:text-gray-500"
                />
              </div>
              <div className="col-span-full">
                <textarea
                  id="description"
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

export default AddItem;
