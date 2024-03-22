import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <header className="bg-inherit p-4 justify-between items-center flex flex-col sticky top-0 z-50 shadow-md drop-shadow-lg">
      <div className="flex md:flex-row w-11/12 md:w-4/5 justify-between">
        <div className="flex flex-row gap-10">
          <Link href="/" className="flex flex-row gap-3">
            <div>
              <span className="text-2xl font-bold">G20</span>
            </div>
          </Link>
          <div className="hidden lg:flex lg:flex-row gap-10">
            <div className="flex flex-row gap-7 items-center justify-center">
              <Link
                href={"/wildlife"}
                className={`hover:text-gray-300 align-middle font-semibold`}
              >
                Wildlife
              </Link>
            </div>
            <div className="flex flex-row gap-7 items-center justify-center">
              <Link
                href={"/demography"}
                className={`hover:text-gray-300 align-middle font-semibold`}
              >
                Demografic Impact
              </Link>
            </div>
            <div className="flex flex-row gap-7 items-center justify-center">
              <Link
                href={"/dashboard"}
                className={`hover:text-gray-300 align-middle font-semibold`}
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  href={"/wildlife"}
                  className={`hover:text-gray-300 align-middle font-semibold`}
                >
                  Wildlife
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/economy"}
                  className={`hover:text-gray-300 align-middle font-semibold`}
                >
                  Economic Impact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/demography"}
                  className={`hover:text-gray-300 align-middle font-semibold`}
                >
                  Demografic Impact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
