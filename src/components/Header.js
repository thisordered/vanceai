import React, { useState } from "react";
import { FaBars, FaCheckCircle, FaUser } from "react-icons/fa";
import Button from "./common/Button";

function createNavItem(id, label, children) {
  return {
    id,
    label,
    children,
  };
}

const middleNavItems = [
  createNavItem(0, "محصول", [
    {
      label: "menu 1",
    },
    {
      label: "menu 2۱",
    },
    {
      label: "menu 3",
    },
    {
      label: "menu 4",
    },
    {
      label: "menu 4",
    },
    {
      label: "menu 4",
    },
    {
      label: "menu 4",
    },
    {
      label: "menu 4",
    },
    {
      label: "menu 4",
    },
    {
      label: "menu 4",
    },
  ]),
  createNavItem(1, "VanceAI برای PC", null),
  createNavItem(2, "تعرفه‌ها", [
    {
      label: "menu 1",
    },
    {
      label: "menu 2۱",
    },
    {
      label: "menu 3",
    },
    {
      label: "menu 4",
    },
    {
      label: "menu 4",
    },
    {
      label: "menu 4",
    },
    {
      label: "menu 4",
    },
  ]),
  createNavItem(3, "API", null),
  createNavItem(4, "پشتیبانی", null),
];
const leftNavItems = [
  createNavItem(0, "ورود", null),
  createNavItem(1, "محیط کار", [
    {
      label: "menu 1",
    },
    {
      label: "menu 2۱",
    },
    {
      label: "menu 3",
    },
    {
      label: "menu 4",
    },
    {
      label: "menu 4",
    },
  ]),
];

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <header className="z-50 bg-white sticky top-0 flex items-center justify-between px-10">
        <div className="logo">
          <img src="logo.png" alt="logo_image" />
        </div>
        <nav className="relative hidden lg:flex items-center justify-between space-x-4 rtl:space-x-reverse py-8">
          {middleNavItems?.map(({ id, label, children }) => (
            <>
              <a
                key={id}
                href={`#${id}`}
                className="menu-item whitespace-nowrap py-4 px-8 hover:bg-primary rounded-full"
              >
                {label}
                {children && (
                  <nav className="absolute top-[80px] right-0 shadow-xl bg-white rounded-lg overflow-hidden grid grid-cols-4 gap-4 p-10">
                    {children?.map((child) => (
                      <a
                        className="px-4 py-4 whitespace-nowrap hover:text-blue-400 cursor-pointer"
                        href={`#${child.label}`}
                      >
                        {child.label}
                      </a>
                    ))}
                  </nav>
                )}
              </a>
            </>
          ))}
        </nav>
        <nav className="user-menu relative hidden lg:flex items-center justify-between space-x-10 rtl:space-x-reverse">
          {leftNavItems?.map(({ id, label, children }) => (
            <>
              <a
                key={id}
                href={`#${id}`}
                className="menu-item whitespace-nowrap py-4 px-8 hover:bg-primary rounded-full"
              >
                {label}
                {children && (
                  <nav className="absolute top-[50px] left-0 shadow-xl bg-white rounded-lg overflow-hidden grid grid-cols-4 gap-4 p-10 w-max">
                    {children?.map((child) => (
                      <a
                        className="px-4 py-4 whitespace-nowrap hover:text-blue-400 cursor-pointer"
                        href={`#${child.label}`}
                      >
                        {child.label}
                      </a>
                    ))}
                  </nav>
                )}
                {
                  <>
                    <div className="login-container absolute top-10 left-40 z-50 bg-white rounded-lg py-8 px-10 flex flex-col">
                      <div className="flex items-center justify-center rtl:space-x-reverse space-x-4">
                        <div className="rounded-full bg-foreground/10 w-12 h-12 flex items-center justify-center">
                          <FaUser />
                        </div>
                        <div>
                          <p>ورود</p>
                          <p>برای استفاده آزمایشی وارد شوید</p>
                        </div>
                      </div>
                      <div className="my-10 grid grid-cols-2 gap-4">
                        <div className="flex items-center rtl:space-x-reverse space-x-2">
                          <span className="text-green-500">
                            <FaCheckCircle />
                          </span>
                          <span>حذف واتر مارک</span>
                        </div>
                        <div className="flex items-center rtl:space-x-reverse space-x-2">
                          <span className="text-green-500">
                            <FaCheckCircle />
                          </span>
                          <span>حذف واتر مارک</span>
                        </div>
                        <div className="flex items-center rtl:space-x-reverse space-x-2">
                          <span className="text-green-500">
                            <FaCheckCircle />
                          </span>
                          <span>حذف واتر مارک</span>
                        </div>
                        <div className="flex items-center rtl:space-x-reverse space-x-2">
                          <span className="text-green-500">
                            <FaCheckCircle />
                          </span>
                          <span>حذف واتر مارک</span>
                        </div>
                      </div>
                      <Button label={"ورود"} sx={"w-full"} />
                    </div>
                  </>
                }
              </a>
            </>
          ))}
        </nav>
        <div
          className="lg:hidden flex items-center justify-center text-3xl"
          onClick={() => setOpenSidebar(true)}
        >
          <FaBars />
        </div>
      </header>
      <div
        className="w-full fixed top-0 right-0 bottom-0 left-0 z-50 transition-all duration-300 ease-in-out"
        style={
          openSidebar
            ? { transform: "translateX(0)" }
            : { transform: "translateX(100%)" }
        }
      >
        <div
          className="bg-black/50 w-full fixed top-0 right-0 bottom-0 left-0 z-0 delay-300 transition-all"
          style={openSidebar ? { opacity: 1 } : { opacity: 0 }}
          onClick={() => setOpenSidebar(false)}
        ></div>
        <aside className="relative w-2/3 bg-white h-screen shadow-lg z-10"></aside>
      </div>
    </>
  );
}
