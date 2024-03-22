import { Squares2X2Icon } from "@heroicons/react/16/solid";
import { WrenchIcon } from "@heroicons/react/16/solid";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";

export const NAVIGATION_DATA = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: <Squares2X2Icon className="h-4 w-4"/>
    },
]

export const BOTTOM_LINKS = [

    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <WrenchIcon className="h-4 w-4"/>
    },
]