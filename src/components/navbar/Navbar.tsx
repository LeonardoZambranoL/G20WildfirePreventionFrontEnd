import React from "react";
import Link from "next/link";

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
              href={"/economy"}
              className={`hover:text-gray-300 align-middle font-semibold`}
            >
              Economic Impact
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
        </div>
        <div
          id="links"
          className={`flex gap-10 mt-6 md:flex-row md:gap-4 md:mt-0 font-bold`}
        ></div>
      </div>
    </header>
  );
}

export default Navbar;
