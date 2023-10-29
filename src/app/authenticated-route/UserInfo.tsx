"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import cookies from "js-cookie";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const UserInfo = () => {
  const router = useRouter();

  // const token = cookies.get("token");
  // console.log(token);

  // useEffect(() => {
  //   if (token) {
  //     axios
  //       .get("https://fashionista-admin.getcommerce.xyz/user/profile/info", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [token]);

  //   Delete cookies
  const handleClick = () => {
    cookies.remove("token");

    toast({
      title: "You are logged out.",
    });
    router.push("/");
  };

  return (
    <div>
      <Button onClick={handleClick}>Log Out</Button>
    </div>
  );
};

export default UserInfo;
