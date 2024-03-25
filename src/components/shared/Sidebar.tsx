import { Link, useLocation } from "react-router-dom";
import { CommandLineIcon } from "@heroicons/react/16/solid";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";
import { BOTTOM_LINKS, NAVIGATION_DATA } from "../lib/consts/navigation";
import classNames from "classnames";

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"

export default function Sidebar() {
  return (
    <div className="bg-primary flex flex-col w-60 p-3">
      <div className="flex items-center gap-2 px-1 py-3">
        <CommandLineIcon className="h-8 w-8 text-neutral"/>
        <span className="text-lg text-neutral">Control Center</span>
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
        <div className={classNames('text-red-950 cursor-pointer',linkClasses)}>
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
    <Link to = {item.path} className={classNames(pathname === item.path ? 'text-white' : 'text-base-100',linkClasses)}>
    <span>{item.icon}</span>
    {item.label}
    </Link>
  );
}

