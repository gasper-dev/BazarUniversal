import Link from "next/link";
import { TruckIcon } from "./ui/Icons";
import Search from "./ui/Search";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="flex flex-col-2 items-center justify-between p-2 border-b">
        <Link href="/">
          <TruckIcon className="h-12 w-12 mr-2" />
        </Link>

        <div className=" flex items-center rounded-md border pr-2">
          <Search placeholder="laptops, smartphones, ..." />
        </div>
      </div>
    </header>
  );
}
