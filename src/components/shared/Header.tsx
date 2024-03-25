import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/16/solid";
import { BellIcon } from "@heroicons/react/16/solid";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-neutral h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <MagnifyingGlassIcon className="text-gray-400 absolute w-6 h-6 top-1/2 -translate-y-1/2 left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border-gray-300 rounded-sm pl-11 pr-4 bg-gray-700"
        ></input>
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-700",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-700"
                )}
              >
                <ChatBubbleBottomCenterTextIcon className="text-gray-400 w-6 h-6" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-gray-700 rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-white font-medium">Messages</strong>
                    <div className="mt-2 py-1 text-sm">
                      This is messages panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-700",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-700"
                )}
              >
                <BellIcon className="text-gray-400 w-6 h-6" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-gray-700 rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-white font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is a notification panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-white bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}
              >
                <span className="sr-only">Hugh Jackson</span>
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform
              opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform
              opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/profile")}
                      className={classNames(
                        active && "bg-gray-800",
                        "active:bg-gray-700 rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-gray-200"
                      )}
                    >
                      Your Profile
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/settings")}
                      className={classNames(
                        active && "bg-gray-800",
                        "active:bg-gray-700 rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-gray-200"
                      )}
                    >
                      Settings
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/logout")}
                      className={classNames(
                        active && "bg-gray-800",
                        "active:bg-gray-700 rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-gray-200"
                      )}
                    >
                      Log out
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </div>
        </Menu>
      </div>
    </div>
  );
}
