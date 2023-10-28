import React from "react";
import { LoginForm } from "./Form";

const page = () => {
  return (
    <div className="section_padding py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl py-10">Login</h1>
      <LoginForm />
    </div>
  );
};

export default page;
