import React from "react";

const AddItem = () => {
  return (
    <div>
      <h2 className="text-3xl text-center">Add Product</h2>
      <p className="text-center text-stone-400">
        Please fill this form carefully
      </p>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form className="container flex flex-col lg:flex-row mx-auto space-x-0 lg:space-x-5 ng-untouched ng-pristine ng-valid">
          <fieldset className="p-6 lg:w-1/2 w-full border border-dashed rounded-md shadow-md dark:bg-gray-900">
            <div className="col-span-full">
              <input
                type="file"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-700 dark:text-gray-900"
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
          <fieldset className="p-6 lg:w-1/2 w-full border border-dashed rounded-md shadow-md dark:bg-gray-900">
            <div className="col-span-full">
              <input
                type="file"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 border border-gray-700 dark:text-gray-900"
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
        </form>

        <fieldset className=" p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Profile</p>
            <p className="text-xs">Adipisci fuga autem eum!</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="website" className="text-sm">
                Website
              </label>
              <input
                id="website"
                type="text"
                placeholder="https://"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Bio
              </label>
              <textarea
                id="bio"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Photo
              </label>
              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/30x30/?random"
                  alt=""
                  className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                />
                <button
                  type="button"
                  className="px-4 py-2 border rounded-md dark:border-gray-100"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </section>
    </div>
  );
};

export default AddItem;
