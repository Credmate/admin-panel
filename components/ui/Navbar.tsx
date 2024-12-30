"use client";

import React from "react";
import { Menu, Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Dropdown, Space } from "antd";
import { CiLogout } from "react-icons/ci";
import { IoChevronDownOutline } from "react-icons/io5";

const items = [
  {
    key: "1",
    label: (
      <div className="text-red-500 flex gap-2 items-center">
        <CiLogout className="mr-2" />
        Log Out
      </div>
    ),
  },
];

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <div className="h-auto min-h-[72px] bg-white border-b border-gray-200 flex flex-col lg:flex-row lg:items-center justify-between px-4 lg:px-6 py-4 fixed top-0 right-0 left-0 lg:left-[240px] z-20 w-auto">
      <div className="flex items-center justify-between mb-4 lg:mb-0">
        <button className="lg:hidden" onClick={onMenuClick}>
          <Menu size={24} />
        </button>

        <div className="flex flex-col pl-5">
          <h1 className="text-xl font-base">Welcome to the Admin Dashboard</h1>
          <p className="text-sm text-gray-500 hidden sm:block">
            Monitor and track borrowers and lenders activities
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 mr-5">
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by phone number or name"
            className="w-full sm:w-[360px] bg-[#F2F2F2] rounded-lg px-4 py-2.5 pl-10"
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1C1C1C]"
            size={20}
          />
        </div>

        <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-start">
          <div className="relative bg-[#F2F2F2] p-3 rounded-lg">
            <Bell size={18} className="text-[#555555]" />
          </div>
          <div className="bg-[#FFE8F4] cursor-pointer rounded-lg w-[147px] h-[44px] flex items-center justify-center">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img
                    src="/logo.svg"
                    alt="User Avatar"
                    className="w-6 h-6 rounded-full mt-2"
                  />
                  <p className="mt-2">George</p>
                  <IoChevronDownOutline className="mt-2" />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
