import { UserIcon } from "@heroicons/react/16/solid";

export default function SearchInput() {
  return (
    <div className="relative">
      <UserIcon className="text-gray-500 absolute w-6 h-6 top-1/2 -translate-y-1/2 left-3" />
      <input
        type="text"
        placeholder="Name"
        className="text-sm focus:outline-none active:outline-none h-10 w-72 border-gray-300 rounded-md pl-11 pr-4 bg-gray-300 text-gray-700"
      ></input>
    </div>
  );
}
