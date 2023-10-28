import Link from "next/link";
import { cn } from "@/lib/utils";

const NavList = ({ classList }: { classList?: string }) => {
  return (
    <ol className={cn("flex gap-5 lg:gap-10", classList)}>
      <li>
        <Link href={"/"}>Demos</Link>
      </li>
      <li>
        <Link href={"/"}>Pages</Link>
      </li>
      <li>
        <Link href={"/"}>Support</Link>
      </li>
    </ol>
  );
};

export default NavList;
