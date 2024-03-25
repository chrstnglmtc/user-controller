import { Link, useLocation } from "react-router-dom";
import { CommandLineIcon } from "@heroicons/react/16/solid";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";
import { BOTTOM_LINKS, NAVIGATION_DATA } from "../lib/consts/navigation";
import classNames from "classnames";

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-gray-600 hover:no-underline active:bg-gray-800 rounded-sm text-base"

export default function Sidebar() {
  return (
    <div className="bg-gray-700 flex flex-col w-60 p-3">
      <div className="flex items-center gap-2 px-1 py-3">
        <CommandLineIcon className="h-8 w-8 text-gray"/>
        <span className="text-lg text-gray">Control Center</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0">
        {NAVIGATION_DATA.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-gray-800">
        {BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} /> 
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const {pathname} = useLocation();
  return (
    <Link to = {item.path} className={classNames(pathname === item.path ? 'text-white' : 'text-gray',linkClasses)}>
    <span>{item.icon}</span>
    {item.label}
    </Link>
  );
}

