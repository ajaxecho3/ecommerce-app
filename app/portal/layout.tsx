/* eslint-disable @next/next/no-img-element */
"use client";
import React, { Fragment, useState } from "react";
import {
  LayoutDashboard,
  User,
  ShoppingBag,
  HelpCircle,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isProfileActive, setIsProfileActive] = useState(false);
  const path = usePathname();
  console.log("👉", path);
  const navigation = [
    {
      href: "/portal/dashboard",
      name: "Dashboard",
      icon: <LayoutDashboard />,
    },
    {
      href: "/portal/customers",
      name: "Customers",
      icon: <User />,
    },
    {
      href: "/portal/orders",
      name: "Orders",
      icon: <ShoppingBag />,
    },
  ];

  const navsFooter = [
    {
      href: "javascript:void(0)",
      name: "Help",
      icon: <HelpCircle />,
    },
    {
      href: "javascript:void(0)",
      name: "Settings",
      icon: <Settings />,
    },
    {
      href: "javascript:void(0)",
      name: "Logout",
      icon: <LogOut />,
    },
  ];
  return (
    <div className="">
      <nav className="fixed left-0 top-0 z-20 h-full w-20 space-y-8 border-r bg-white">
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-center px-8">
            <Link href="/portal" className="flex-none">
              <img
                src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg"
                width={35}
                className="mx-auto h-20 w-20"
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex h-full flex-1 flex-col">
            <ul className="flex-1 space-y-2 px-4 py-8 text-sm font-medium">
              {navigation.map((item, idx) => (
                <Fragment key={idx}>
                  {item.href === path ? (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="group relative flex items-center justify-center gap-x-2 rounded-lg bg-gray-100  p-2 text-gray-600 duration-150 hover:bg-gray-50 active:bg-gray-100"
                      >
                        <div className="text-gray-500">{item.icon}</div>
                        <span className="absolute left-14 z-[999999] hidden whitespace-nowrap rounded-md bg-gray-800 p-1 px-1.5 text-xs text-white duration-150 group-hover:inline-block group-focus:hidden">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ) : (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="group relative flex items-center justify-center gap-x-2 rounded-lg  p-2 text-gray-600 duration-150 hover:bg-gray-50 active:bg-gray-100"
                      >
                        <div className="text-gray-500">{item.icon}</div>
                        <span className="absolute left-14 z-[999999] hidden whitespace-nowrap rounded-md bg-gray-800 p-1 px-1.5 text-xs text-white duration-150 group-hover:inline-block group-focus:hidden">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
            <div>
              <ul className="space-y-1 px-4 pb-4 text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="group relative flex items-center justify-center gap-x-2 rounded-lg p-2  text-gray-600 duration-150 hover:bg-gray-50 active:bg-gray-100"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      <span className="absolute left-14 z-50 hidden whitespace-nowrap rounded-md bg-gray-800 p-1 px-1.5 text-xs text-white duration-150 group-hover:inline-block group-focus:hidden">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="relative border-t px-4 py-4">
                <button
                  className="flex h-12 w-12 cursor-pointer items-center gap-x-4 rounded-full ring-gray-800 ring-offset-2 duration-150 focus:ring-2"
                  onClick={() => setIsProfileActive(!isProfileActive)}
                >
                  <img
                    src="https://randomuser.me/api/portraits/women/79.jpg"
                    className="h-12 w-12 rounded-full"
                    alt=""
                  />
                </button>
                {isProfileActive ? (
                  <div className="absolute bottom-4 left-20 w-64 rounded-lg border bg-white text-sm text-gray-600 shadow-md">
                    <div className="p-2">
                      <span className="block p-2 text-gray-500/80">
                        vienna@gmail.com
                      </span>
                      <a
                        href="javascript:void(0)"
                        className="block w-full rounded-md p-2 text-left duration-150 hover:bg-gray-50 active:bg-gray-100"
                      >
                        Status
                      </a>
                      <div className="relative rounded-md duration-150 hover:bg-gray-50 active:bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="pointer-events-none absolute inset-y-0 right-1 my-auto h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <select className="w-full cursor-pointer appearance-none bg-transparent p-2 outline-none">
                          <option disabled selected>
                            Theme
                          </option>
                          <option>Dark</option>
                          <option>Light</option>
                        </select>
                      </div>
                      <button className="block w-full rounded-md p-2 text-left duration-150 hover:bg-gray-50 active:bg-gray-100">
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="ml-20 min-h-screen bg-[#F3F4F6] p-4 ">{children}</div>
    </div>
  );
};

export default Layout;
