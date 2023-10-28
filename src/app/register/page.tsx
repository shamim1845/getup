import React from "react";
import { RegisterForm } from "./Form";

const page = () => {
  return (
    <div className="section_padding py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl py-10">Register</h1>
      <RegisterForm />
    </div>
  );
};

export default page;
