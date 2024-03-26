import { useState } from "react";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
import { POSITION_DATA } from "../lib/consts/search";
import { DEPARTMENT_DATA } from "../lib/consts/search";
import { BUSINESS_DATA } from "../lib/consts/search";
import MagnifyingGlassIcon from "@heroicons/react/16/solid/MagnifyingGlassIcon";
import { ArrowDownOnSquareIcon } from "@heroicons/react/16/solid";
import Filter from "./Filter";

export default function DashboardTop() {
  const [selectedPosition, setSelectedPosition] = useState(POSITION_DATA[0]);
  const [selectedDepartment, setSelectedDepartment] = useState(DEPARTMENT_DATA[0]);
  const [selectedBusiness, setSelectedBusiness] = useState(BUSINESS_DATA[0]);

  return (
    <div className="h-16 px-4 flex gap-4 w-full items-center relative">
      <SearchInput />
      <Dropdown selected={selectedPosition} setSelected={setSelectedPosition} options={POSITION_DATA} />
      <Dropdown selected={selectedDepartment} setSelected={setSelectedDepartment} options={DEPARTMENT_DATA} />
      <Dropdown selected={selectedBusiness} setSelected={setSelectedBusiness} options={BUSINESS_DATA} />
      <button className="btn btn-neutral">
        <MagnifyingGlassIcon className="h-4 w-4"/>
        Search
      </button>
      <Filter />
      <button className="btn btn-neutral">
        <ArrowDownOnSquareIcon className="h-4 w-4"/>
        Export
      </button>
    </div>
  );
}
