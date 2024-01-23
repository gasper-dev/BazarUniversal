import Button from "./ui/Button";
import { SearchIcon, TruckIcon } from "./ui/Icons";
import SearchInput from "./ui/Search";

export default function Logo() {
  return (
    <div className="flex flex-col items-center ">
      <TruckIcon className="text-[#bd1e59] w-24 h-24" />
      <h1 className="text-3xl font-bold  text-gray-800">Bazar Universal</h1>
    </div>
  );
}
