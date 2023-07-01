/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import { LayoutDashboard, User, ShoppingBag } from "lucide-react";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const profileRef = useRef();

  const [isProfileActive, setIsProfileActive] = useState(false);

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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
    {
      href: "javascript:void(0)",
      name: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      href: "javascript:void(0)",
      name: "Logout",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="">
      <nav className="fixed left-0 top-0 z-20 h-full w-20 space-y-8 border-r bg-white">
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-center px-8">
            <a href="javascript:void(0)" className="flex-none">
              <img
                src="https://floatui.com/logo-letter.png"
                width={35}
                className="mx-auto"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex h-full flex-1 flex-col">
            <ul className="flex-1 space-y-8 px-4 text-sm font-medium">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="group relative flex items-center justify-center gap-x-2 rounded-lg bg-gray-100  p-2 text-gray-600 duration-150 hover:bg-gray-50 active:bg-gray-100"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    <span className="absolute left-14 z-[999999] hidden whitespace-nowrap rounded-md bg-gray-800 p-1 px-1.5 text-xs text-white duration-150 group-hover:inline-block group-focus:hidden">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <ul className="px-4 pb-4 text-sm font-medium">
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
