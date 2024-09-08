import React, { useState } from "react";
import data from "./data";

const Card = () => {
  const [user, Setusers] = useState(data);
  console.log(user);
  return (
    <section className="bg-white  mt-10 lg:grid-cols-3  sm:grid-cols-3 gap-9 grid  p-10 items-center justify-items-center">
      {user.map((user) => {
        const { name, id, image, price, storage, capacity, userdNumber } = user;
        return (
          <div
            className={
              id === "2"
                ? "  w-full shadow-xl rounded-lg hover:scale-105 duration-300 p-5 text-center   bg-gray-100 cursor-pointer"
                : "  w-full shadow-xl rounded-lg hover:scale-105 duration-300 p-5 text-center cursor-pointer "
            }
            key={id}
          >
            <img className="w-[70px] mx-auto block" alt="user" src={image} />
            <p className="font-bold mt-2 py-2">{name}</p>
            <h2 className="font-bold py-2 border-gray-400 border-b pb-2">
              {price}
            </h2>
            <p className=" border-gray-400  border-b py-2">{storage}</p>
            <p className=" border-gray-400  border-b py-2">{userdNumber}</p>
            <p className=" border-gray-400  border-b py-2">{capacity}</p>
            <button
              className={
                id === "2"
                  ? " mt-6 px-6 py-3 rounded-md bg-black text-lightGreen"
                  : "bg-lightGreen mt-6 px-6 py-3 rounded-md"
              }
            >
              Start Trail
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
