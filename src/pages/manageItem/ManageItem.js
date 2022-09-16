import React from "react";
import { Link } from "react-router-dom";
import useLoadAllProducts from "../../components/hooks/useLoadAllProducts";
import Modal from "./Modal";

const ManageItem = () => {
  const [products, setProducts] = useLoadAllProducts();
  return (
    <div className="container mx-auto ">
        {/* <Modal/> */}
      <div className="overflow-x-auto w-full">
        <table striped bordered hover className="mb-5">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price/Item</th>
              <th>Supplier</th>
              <th>Description</th>
              <th>Last Editor (email)</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const {
                _id,
                email,
                productName,
                quantity,
                price,
                supplier,
                description,
                photo,
              } = product;
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td><p className="text-xl">{productName}</p></td>
                  <td>
                    <img src={photo} alt={productName} className="w-75" />
                  </td>
                  <td>{quantity}</td>
                  <td className="text-end">
                    ${" "}
                    {price?.toLocaleString("hi-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td>{supplier}</td>
                  <td>{description}</td>
                  <td>{email}</td>
                  <td className="text-center">
                    <Link to={`/update/${_id}`} className='link text-blue-500'>Edit</Link>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-secondary" variant="danger" onClick={() => (_id, email)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
