import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={760}
        height={240}
        className="w-[103px]  h-[28px]"
      />
    </div>
  );
};

export default Logo;
