import React from "react";
import logo from "../../assets/capy-logo.png"

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full p-3 border-b-2 border-gray-200 rounded bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="h-6 mr-3 sm:h-10"
            alt="Capybara"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            CSS Playground
          </span>
        </a>
        <a className="text-sky-400" href='https://www.youtube.com/watch?v=NwOvu-j_WjY'>
          Fujii Kaze - Matsuri
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                HTML
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                CSS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
