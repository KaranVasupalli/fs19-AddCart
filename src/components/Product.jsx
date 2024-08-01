import React from "react";

function Product({ product ,dispatch }) {

//   console.log(product);
const btnAdd =(value)=>{
dispatch({
  type :"add",
  payload : value,
})
}
  return (
    <div className="border-2 border-black p-8 shadow-slate-800 shadow-2xl">
      <h1 className="text-4xl font-medium text-center mb-6 text-red-500">Product</h1>
      {product.map((item) => {
        return (
          <div key={item.id} className="flex gap-4 items-center mb-6 bg-red-400 p-4 text-white text-lg rounded">
            <span>{item.name}</span>
            <span>{item.price}</span>
            <div className="flex gap-3 bg-red-600 rounded-full">
              <button className="px-3  " onClick={()=>{dispatch({type : "sub" , payload : item})}} >-</button>
              <span>{item.quantily}</span>
              <button className="px-2 " onClick={()=>{btnAdd(item)}} >+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
  
}

export default Product;