import React from "react";

function Cart({ product }) {
    let temp = [...product];
   let total =  temp.reduce((acc , value)=>{
        return acc + value.quantily * value.price 
    },0);
  return (
    <div className="border-2 border-black p-10 w-[300px] h-[450px] shadow-slate-800 shadow-2xl">
      <h1 className="text-4xl font-medium text-center mb-6 text-red-500">Cart</h1>
      {product.map((item) => {
        return (
          item.quantily > 0 && (
            <div key={item.id} className="flex gap-4 items-center mb-6 bg-red-400 p-4 text-white text-lg rounded">
              <span>{item.name}</span>
              <div className="flex gap-2">
                <span>
                  {item.price} * {item.quantily}
                </span>
              </div>
            </div>
          )
        );
      })}
      <div>
        <h3 className="bg-red-600 p-4 text-center text-xl text-white">Total : {total} </h3>
        <span></span>
      </div>
    </div>
  );
}

export default Cart;