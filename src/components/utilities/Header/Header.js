"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // Import useRouter
import Dropdown from "./helper/Dropdown";
import { Accordion } from "rsuite";
import "./Header.css";
import { headerOptions } from "./helper/headerData";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showBackground, setShowBackground] = useState("bg-black");
  const router = useRouter(); // Use useRouter hook
  const pathname = usePathname();
  // const searchPrams = useSearchParams()
  const [openPanel, setOpenPanel] = useState(null);

  // console.log(pathname);
  // console.log(searchPrams);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  // Function to toggle the open/close status of an accordion panel
  const handleAccordionToggle = (eventKey) => {
    setOpenPanel(openPanel === eventKey ? null : eventKey);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setShowBackground("bg-[#d17a29]");
      } else {
        setShowBackground("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-10 bg-gray-900 opacity-50 transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}

      <nav
        className={`fixed w-full z-[1000] top-0 left-0 border-b border-gray-600 bg-opacity-95 ${showBackground}`}
      >
        <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            href="/"
            className="text-white hover:text-white hover:no-underline no-underline"
          >
            <div className="flex items-center space-x-2 cursor-pointer xl:ml-5">
              <img src="/jaipur.png" className="h-12" alt="Logo" />
              {/* <span className="self-center text-sm font-thin whitespace-nowrap text-white">
                <p className="m-0">Jaipur,</p>
                <p className="m-0">Mansarovar</p>
              </span> */}
            </div>
          </Link>

          <div className="flex gap-x-10">
            <div className="hidden lg:flex space-x-4">
              <ul className="flex m-0 flex-col lg:flex-row lg:items-center font-medium text-white">
                <li>
                  <Link
                    href="/"
                    className="active:no-underline hover:no-underline text-white focus:no-underline hover:text-white active:text-white"
                  >
                    <div className={`block py-1 px-3 rounded`}>Home</div>
                  </Link>
                </li>
                {headerOptions.map((hopt, i) => (
                  <li key={i}>
                    <div className="block py-1 px-3 rounded">
                      <Dropdown title={hopt.title} options={hopt.options} />
                    </div>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="active:no-underline hover:no-underline text-white focus:no-underline hover:text-white active:text-white"
                  >
                    <div className={`block py-1 px-3 rounded`}>Contact Us</div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center lg:space-x-4 space-x-2">
              <Link
                href={"/explore-more"}
                type="button"
                className="text-white hover:no-underline hover:text-white bg-gradient-to-r from-green-400 to-blue-500 xl:mr-5 hover:from-pink-500 hover:to-yellow-500 font-medium rounded-full text-sm px-4 py-2 text-center"
              >
                Donate
              </Link>

              <button
                type="button"
                className="lg:hidden inline-flex items-center lg:p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                onClick={toggleDrawer}
              >
                <svg
                  className="w-7 h-7 text-white"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {isDrawerOpen && (
            <div
              className="bg-[#e5b776] fixed top-0 right-0 w-64 h-full shadow-lg z-30 transition-transform transform duration-300 ease-in-out overflow-y-scroll"
              style={{
                transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
              }}
            >
              <ul className="flex flex-col p-4">
                <button
                  type="button"
                  className="self-end p-2"
                  onClick={closeDrawer}
                >
                  <svg
                    className="w-7 h-7 text-white"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <Link
                  href={"/explore-more"}
                  className="w-full flex justify-center pt-5 hover:no-underline no-underline hover:text-white text-white"
                >
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 font-medium rounded-full text-sm px-4 py-2 text-center"
                  >
                    Donate
                  </button>
                </Link>

                <div className="pt-10">
                  <Accordion>
                    <div className="p-[10px] font-bold text-[16px]">
                      <Link
                        href="/"
                        className={`hover:text-black text-black hover:no-underline no-underline ${""}`}
                      >
                        Home
                      </Link>
                    </div>
                    {headerOptions.map((hopt, i) => (
                      <Accordion.Panel
                        key={i}
                        header={hopt.title}
                        eventKey={i} // Use a unique event key for each panel
                        expanded={openPanel === i} // Set expanded prop based on controlled state
                        onSelect={() => handleAccordionToggle(i)}
                      >
                        {hopt.options.map((option, ind) => (
                          <div
                            key={ind}
                            className="p-[2px] font-bold text-[14px]"
                          >
                            <Link
                              href={option.link}
                              className={`hover:text-black text-black hover:no-underline no-underline`}
                            >
                              {option.subtitle}
                            </Link>
                          </div>
                        ))}
                      </Accordion.Panel>
                    ))}
                    <div className="p-[10px] font-bold text-[16px]">
                      <Link
                        href="/contact"
                        className={`hover:text-black text-black hover:no-underline no-underline ${
                          router.pathname === "/contact"
                            ? "text-orange-500"
                            : ""
                        }`}
                      >
                        Contact Us
                      </Link>
                    </div>
                    <hr className="m-0 mx-[20px]" />
                  </Accordion>
                </div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
