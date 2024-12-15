import "./Header.css";
import Image from "next/image";
import profilePic from "@/components/header_name.png";

export default function Header() {
  return (
    <div>
      <div className="header">
        <Image
          className="header"
          src={profilePic}
          alt="Krishna Chaitanya Arige"
          width={300}
          height={80}
          priority
        />
      </div>

      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-center">
          <div className="place-content-center hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <div
                href="#"
                className="rounded-md getunderline px-3 py-2 text-sm text-white"
                aria-current="page"
              >
                Dashboard
              </div>
              <a
                href="#"
                className="rounded-md getunderline px-3 py-2 text-sm hover:bg-gray-700 hover:text-white"
              >
                Team
              </a>
              <a
                href="#"
                className="rounded-md getunderline px-3 py-2 text-sm hover:bg-gray-700 hover:text-white"
              >
                Projects
              </a>
              <a
                href="#"
                className="rounded-md getunderline px-3 py-2 text-sm hover:bg-gray-700 hover:text-white"
              >
                Calendar
              </a>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="block rounded-md underline hover:underline-offset-4 px-3 py-2 text-base  text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>

      <div className="menu_divider"></div>
    </div>
  );
}
