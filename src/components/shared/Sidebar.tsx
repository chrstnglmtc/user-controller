import { Link, useLocation } from "react-router-dom";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";
import { BOTTOM_LINKS, NAVIGATION_DATA } from "../lib/consts/navigation";
import classNames from "classnames";

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"

export default function Sidebar() {
  return (
    <div className="bg-zinc-400 flex flex-col w-60 p-3">
      <div className="flex items-center gap-2 px-1 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-lg">Control Center</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0">
        {NAVIGATION_DATA.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-900">
        {BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} /> 
        ))}
        <div className={classNames('text-red-800 cursor-pointer',linkClasses)}>
          <span><ArrowRightStartOnRectangleIcon className="h-4 w-4" /></span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const {pathname} = useLocation();
  return (
    <Link to = {item.path} className={classNames(pathname === item.path ? 'text-white' : 'text-black',linkClasses)}>
    <span>{item.icon}</span>
    {item.label}
    </Link>
  );
}

