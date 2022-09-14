import React from "react";
import './Loading.css'

const Loading = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div class="spinner"></div>
      <h3 className="text-xl text-red-500">Please Wait</h3>
    </div>
  );
};

export default Loading;
