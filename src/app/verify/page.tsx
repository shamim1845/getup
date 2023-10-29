import React from "react";
import { VerificationForm } from "./Form";

const page = () => {
  return (
    <div className="section_padding py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl py-10">User Verification</h1>

      <div className="w-full  max-w-[800px] mx-auto flex justify-center items-center">
        <VerificationForm />
      </div>
    </div>
  );
};

export default page;
