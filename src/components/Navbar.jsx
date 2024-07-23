import React from "react";

export const Navbar = () => {
  return (
    <nav class="border border-[#1A1A40] px-2 sm:px-4 py-2.5 text-[#1A1A40] shadow">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center">
          <span class="self-center text-xl bg-gradient-to-r from-white via-[#1A1A40] to-white text-transparent bg-clip-text font-semibold whitespace-nowrap">
            TODO-LIST
          </span>
        </a>

        <div class="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg hover:bg-[#1A1A40] focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div class="w-full md:block md:w-auto hidden">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/home"
                class="block py-2 pr-4 pl-3 text-white bg-[#1A1A40] rounded md:bg-transparent md:text-white md:p-0 hover:font-bold hover:text-[#1A1A40] tracking-wider"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="login"
                class="block py-2 pr-4 pl-3 text-white bg-[#1A1A40] rounded md:bg-transparent md:text-white md:p-0 hover:font-bold hover:text-[#1A1A40] tracking-wider"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="signup"
                class="block py-2 pr-4 pl-3 text-white bg-[#1A1A40] rounded md:bg-transparent md:text-white md:p-0 hover:font-bold hover:text-[#1A1A40] tracking-wider"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

