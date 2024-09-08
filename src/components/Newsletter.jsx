import React from "react";

const Newsletter = () => {
  return (
    <section className="flex justify-between p-9 flex-col  text-center md:text-left md:flex-row text-white">
      <div className="flex flex-col  justify-center">
        <h3 className="text-3xl mb-2">
          {" "}
          Want tips & tricks to optimize your flow?
        </h3>
        <p className="ml-2 ">Sign up to our newsletter and stay up to date</p>
      </div>
      <div className=" mt-3">
        <input
          className="border-none outline-none text-black rounded-md py-[.3rem] px-3 mr-2"
          type="email"
          placeholder="Enter your email"
        />
        <button className="bg-lightGreen text-center mt-2  mx-auto py-[.3rem] px-3 rounded-md">
          Notify me
        </button>
        <p className="text-[13px]  mt-2">
          We care bout the protection of your data. Read our{" "}
          <span className="text-[#00df9a]">Privacy Policy.</span>
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
