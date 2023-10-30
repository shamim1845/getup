import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavList from "./NavList";
import { Button } from "../ui/button";

const SideBar = () => {
  return (
    <div className="md:hidden h-full">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" />
        </SheetTrigger>

        <SheetContent className="w-[300px] flex flex-col justify-center items-center gap-10 z-[10000]">
          <NavList classList="flex-col justify-center" />

          <Button size="lg">Get Started for Free</Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideBar;
