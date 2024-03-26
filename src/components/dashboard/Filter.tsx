import { useState } from "react";
import { POSITION_DATA } from "../lib/consts/search";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefault"
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-neutral"
        type="button"
      >
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        Filter
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdown"
        className={`absolute z-20 ${isOpen ? "" : "hidden"} w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}
      >
        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </h6>
        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
          {POSITION_DATA.map((option) => (
            <li key={option.pkey} className="flex items-center">
              <input
                id={option.pkey}
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={option.pkey}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                {option.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
