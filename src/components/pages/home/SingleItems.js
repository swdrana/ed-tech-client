import React from "react";

const SingleItems = (props) => {
  const { id, name, image, description, price, quantity, supplierName } = props;
  // name, image, short description, price, quantity, supplier name, and an update button
  return (
    <div>
      <div className=" max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto">
        <img
          src="https://o.remove.bg/uploads/5d9a4f37-7fd5-4a95-b36d-3b441da38799/image.png"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              MacBook Air M1
            </h2>
            <p className="dark:text-gray-100">
              16 GB RAM 256 GB SSD Retina display 13.3-inch (diagonal)
              LED-backlit display with IPS technology; 2560-by-1600 native
              resolution at 227 pixels per inch with support for millions of...{" "}
            </p>
          </div>
          <div>
          quantity, supplierName, Update
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItems;
