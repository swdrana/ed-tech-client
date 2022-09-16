import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useLoadAllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8080/product')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
  return [products, setProducts];
};

export default useLoadAllProducts;
