"use client";

import { useState } from "react";
import { Search, CalendarDays, ListFilter, TriangleAlert } from "lucide-react";
import { Popover, DatePicker } from "antd";
import { Table, Dropdown } from "antd";
import { MoreVertical } from "lucide-react";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";

//* interface
import { BorrowerData, UserData } from "@/interface/interface";

const UserManagement = () => {
  const router = useRouter();

  const filterPopoverContent = (
    <div className="">
      <div className="mb-3">
        <h2 className="text-base font-medium">Filters</h2>
      </div>
      <hr />
      <div className="mb-3">
        <div className="mb-3">
          <h3 className="text-sm mb-1 mt-3">Group</h3>
          <div className="flex gap-2 items-center">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="group"
                className="w-3 h-3 text-[#A2195E] border-gray-300"
              />
              <span className="text-[#555555]">Free</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="group"
                className="w-3 h-3 text-[#A2195E] border-gray-300"
              />
              <span className="text-[#555555]">Assistance Service</span>
            </label>
          </div>
        </div>
        <hr />

        <div className="mb-3">
          <h3 className="text-sm mb-1 mt-3">Warning status</h3>
          <div className="space-y-1">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded text-[#A2195E] border-gray-300"
              />
              <span className="text-[#555555]">None</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded text-[#A2195E] border-gray-300"
              />
              <span className="text-[#555555]">Yellow</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded text-[#A2195E] border-gray-300"
              />
              <span className="text-[#555555]">Red</span>
            </label>
          </div>
        </div>
        <hr />
        <div>
          <h3 className="text-sm mb-1 mt-3">Report Status</h3>
          <div className="space-y-1">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded text-[#A2195E] border-gray-300"
              />
              <span className="text-[#555555]">Unverified</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded text-[#A2195E] border-gray-300"
              />
              <span className="text-[#555555]">Resolved</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded text-[#A2195E] border-gray-300"
              />
              <span className="text-[#555555]">Under review</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <button className="bg-[#A2195E] rounded-lg text-white px-4 py-1.5">
            Apply
          </button>
        </div>
        <div>
          <p className="text-[#A2195E] cursor-pointer">Reset</p>
        </div>
      </div>
    </div>
  );

  const data: UserData[] = [
    {
      key: "1",
      name: "George Olufemi",
      id: "21 Dec, 2024",
      aadhar_number: "123456789012",
      pan_number: "4673829823",
      plan: "Free",
      status: "Deleted",
    },
    {
      key: "2",
      name: "Chris Mark",
      id: "21 Dec, 2024",
      aadhar_number: "123456789012",
      pan_number: "4673829823",
      plan: "Pro Individual",
      status: "Active",
    },
    {
      key: "3",
      name: "Anthony Roy",
      id: "21 Dec, 2024",
      aadhar_number: "123456789012",
      pan_number: "4673829823",
      plan: "Pro Business",
      status: "Suspended",
    },
    {
      key: "4",
      name: "Nischal",
      id: "21 Dec, 2024",
      aadhar_number: "123456789012",
      pan_number: "4673829823",
      plan: "Priority Business",
      status: "Active",
    },
    {
      key: "5",
      name: "Seyi",
      id: "21 Dec, 2024",
      aadhar_number: "123456789012",
      pan_number: "4673829823",
      plan: "Free",
      status: "Suspended",
    },
  ];

  const columns: ColumnsType<UserData> = [
    {
      title: (
        <div className="flex items-center gap-1">
          User
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "name",
      key: "name",
      // sorter: true,
    },
    {
      title: (
        <div className="flex items-center gap-1">
          ID
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "id",
      key: "id",
      // sorter: true,
    },
    {
      title: (
        <div className="flex items-center gap-1">
          Aadhar Number
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "aadhar_number",
      key: "aadhar_number",
      // sorter: true,
    },
    {
      title: (
        <div className="flex items-center gap-1">
          Pan Number
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "pan_number",
      key: "pan_number",
      // sorter: true,
    },
    {
      title: (
        <div className="flex items-center gap-1">
          Plan
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "plan",
      key: "plan",
      render: (status) => {
        const getPlanStyle = (plan: string) => {
          switch (plan) {
            case "Free":
              return "bg-[#8A8A8A] text-[#FFFFFF]";
            case "Pro Individual":
              return "bg-[#A2195E] text-[#FFFFFF]";
            case "Pro Business":
              return "bg-[#A2195E] text-[#FFFFFF]";
            case "Priority Business":
              return "bg-[#A2195E] text-[#FFFFFF]";
            default:
              return "";
          }
        };

        return (
          <span
            className={`px-2 py-1 rounded-full text-sm ${getPlanStyle(status)}`}
          >
            {status}
          </span>
        );
      },
      // sorter: true,
    },

    {
      title: (
        <div className="flex items-center gap-1">
          Report Status
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const getStatusStyle = (status: string) => {
          switch (status) {
            case "Active":
              return " text-[#2EA52E]";
            case "Suspended":
              return " text-[#E3B727]";
            case "Deleted":
              return " text-[#B02828]";
            default:
              return "";
          }
        };

        return (
          <span
            className={`px-2 py-1 rounded-full text-sm ${getStatusStyle(
              status
            )}`}
          >
            {status}
          </span>
        );
      },
      // sorter: true,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const actionItems = [
          {
            key: "1",
            label: "View",
            onClick: () => router.push(`/dashboard/usermanagement/${record.key}`),
          },
          {
            key: "2",
            label: "Resolve",
            onClick: () => router.push(`/dashboard/usermanagement/${record.key}/resolve`),
          },
        ];

        return (
          <div className="flex items-center gap-2">
            <Dropdown
              menu={{ items: actionItems }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
                <MoreVertical className="w-5 h-5" />
              </button>
            </Dropdown>
          </div>
        );
      },
    },
  ];

  return (
    <div className="px-5 py-6">
      <div className="mb-5 mt-3">
        <h1 className="text-2xl font-semibold">All Users</h1>
      </div>

      <div className="border border-[#CDCDCD] rounded-lg py-4">
        <div className="px-2.5 flex justify-between items-center mb-3">
          <div>
            {/* i should make this a component - not too neat */}
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
          </div>
          <div className="">
            <Popover
              content={filterPopoverContent}
              trigger="click"
              placement="bottomRight"
              overlayClassName="custom-popover"
              arrow={false}
            >
              <div className="border border-[#CDCDCD] shadow rounded-lg py-1.5 px-4 flex gap-2 items-center cursor-pointer">
                <div>
                  <p className="text-[#555555]">Filter</p>
                </div>
                <div>
                  <ListFilter className="text-[#555555] w-[18px] h-[18px]" />
                </div>
              </div>
            </Popover>
          </div>
        </div>

        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              showTotal: (total, range) =>
                `${range[0]} - ${range[1]} of ${total}`,
              showSizeChanger: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
