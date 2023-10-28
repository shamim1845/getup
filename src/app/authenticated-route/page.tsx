"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import cookies from "js-cookie";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleClick = () => {
    cookies.remove("token");

    toast({
      title: "You are logged out.",
    });
    router.push("/");
  };

  return (
    <div className="section_padding py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl py-10">This route is authenticated</h1>

      <br />
      <Button onClick={handleClick}>Log Out</Button>
    </div>
  );
};

export default page;
