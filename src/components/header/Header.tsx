import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import NavList from "./NavList";
import { Button } from "../ui/button";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <header
      className={cn(
        "section_padding w-full max-w-[1550px] h-[67px]   mx-auto flex items-center sticky top-0  bg-[#fff] z-50"
      )}
    >
      <nav className="flex justify-between items-center w-full">
        <Link href={"/"}>
          <Logo />
        </Link>

        <NavList classList="hidden md:flex" />

        <div className="flex items-center gap-2">
          <Button className="hidden md:block ">Get Started for Free</Button>

          <SideBar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
