"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

//* static data
import { menuItems } from "@/data/sidebarMenuItems";

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 z-40 w-[261px] h-screen bg-white border-r border-gray-200 
        transform transition-transform duration-200 ease-in-out
        lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between p-4 mb-[50px]">
          <div className="ml-5 mt-3">
            <Image
              src="/credmate.svg"
              alt="Credmate logo"
              width={160}
              height={37}
            />
          </div>
          <button className="lg:hidden" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <nav className="px-4 mt-4">
          {menuItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`flex items-center gap-3 pl-3.5 py-2 rounded-lg mb-2 hover:bg-gray-50 transition-colors duration-200 ${
                pathname === item.path
                  ? "bg-[#A2195E] text-white hover:bg-[#A2195E]"
                  : "text-[#8A8A8A]"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className={pathname === item.path ? "brightness-0 invert" : ""}
              />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
