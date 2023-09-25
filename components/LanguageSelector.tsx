"use client";

import { Menu } from "@headlessui/react";
import Link from 'next-intl/link';
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

function MyDropdown() {
  return (
    <motion.div 
      className="fixed top-[75px] right-0 lg:right-5 z-[999]"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      >
      <Menu>
        <Menu.Button className='inline-flex w-full items-center justify-center rounded-md bg-white border border-gray-200 px-4 py-2 text-sm md:text-lg  font-medium text-gray-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          Language
          <BiChevronDown />
        </Menu.Button>
          <Menu.Items className="absolute flex flex-col right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            >
              <Menu.Item>
                {({ active }) => (
                  <Link className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-lg`} href="/" locale="en">English</Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-lg`} href="/" locale="ua">Українська</Link>
                )}
              </Menu.Item>
            </motion.div>
          </Menu.Items>
      </Menu>
    </motion.div>
  );
}

export default MyDropdown;
