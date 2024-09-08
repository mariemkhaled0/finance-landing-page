import React from "react";

const Analytics = () => {
  return (
    <section className="bg-white p-11 flex-col w-full flex justify-center items-center sm:flex-col md:flex-row ">
      <img
        className=" block md:w-[500px] m-auto ml-0"
        src=".\assets\laptop.jpg"
        alt="laptop-img"
      />
      <div className="text-center md:text-left">
        <p className="text-lightGreen font-bold">DATA ANALYTICS DASHBOARD</p>
        <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Manage Data Analytics Centrally
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
          autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
          ex deserunt fuga?
        </p>
        <button className="bg-black text-lightGreen block w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Analytics;
