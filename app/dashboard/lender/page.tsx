"use client";

import { useState } from "react";
import { Search, CalendarDays, ListFilter } from "lucide-react";
import { Popover, DatePicker, Table, Dropdown, Drawer } from "antd";
import { MoreVertical } from "lucide-react";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";

//* interface
import { BorrowerData } from "@/interface/interface";

//* components
import { BorrowerCard } from "@/components/ui/BorrowerCard";

const Lender = () => {
  const router = useRouter();
  const [dateRange, setDateRange] = useState(null);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleDateChange = (dates: any) => {
    setDateRange(dates);
  };

  const sortPopoverContent = (
    <div>
      <div className="mb-3">
        <h2 className="text-base">Date Selector</h2>
      </div>
      <hr />
      <div className="mb-4 mt-5">
        <DatePicker.RangePicker
          onChange={handleDateChange}
          dropdownClassName="custom-date-picker"
          placement="bottomLeft"
          allowClear={false}
        />
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

  const data: BorrowerData[] = [
    {
      key: "1",
      borrower: "George Olufemi",
      dateReported: "21 Dec, 2024",
      group: "Free",
      warningStatus: "---",
      reportStatus: "Resolved",
    },
    {
      key: "2",
      borrower: "Chris Mark",
      dateReported: "21 Dec, 2024",
      group: "Assistance Service",
      warningStatus: "yellow",
      reportStatus: "Under review",
    },
    {
      key: "3",
      borrower: "Anthony Roy",
      dateReported: "21 Dec, 2024",
      group: "Assistance Service",
      warningStatus: "---",
      reportStatus: "Resolved",
    },
    {
      key: "4",
      borrower: "Nischal",
      dateReported: "21 Dec, 2024",
      group: "Free",
      warningStatus: "red",
      reportStatus: "Unverified",
    },
    {
      key: "5",
      borrower: "Seyi",
      dateReported: "21 Dec, 2024",
      group: "Free",
      warningStatus: "yellow",
      reportStatus: "Unverified",
    },
  ];

  const columns: ColumnsType<BorrowerData> = [
    {
      title: (
        <div className="flex items-center gap-1">
          Lender
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "borrower",
      key: "borrower",
      // sorter: true,
    },
    {
      title: (
        <div className="flex items-center gap-1">
          Borrower
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "borrower",
      key: "borrower",
      // sorter: true,
    },
    {
      title: (
        <div className="flex items-center gap-1">
          Report ID
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "group",
      key: "group",
      // sorter: true,
    },
    {
      title: (
        <div className="flex items-center gap-1">
          Date Submitted
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "dateReported",
      key: "dateReported",
      render: (date) => (
        <div className="flex items-center gap-2">
          <span className="text-[#B0B0B0]">
            <CalendarDays className="w-4 h-4" />
          </span>
          {date}
        </div>
      ),
      // sorter: true,
    },
    {
      title: (
        <div className="flex items-center gap-1">
          Report Status
          <span className="text-xs">↑↓</span>
        </div>
      ),
      dataIndex: "reportStatus",
      key: "reportStatus",
      render: (status) => {
        const getStatusStyle = (status: string) => {
          switch (status) {
            case "Resolved":
              return "bg-[#ECFFEC] text-[#2EA52E] border border-[#2EA52E]";
            case "Under review":
              return "bg-[#FFFCF3] text-[#E3B727] border border-[#E3B727]";
            case "Unverified":
              return "bg-[#FFFFFF] text-[##555555] border border-[#555555]";
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
            onClick: showLoading,
          },
          {
            key: "2",
            label: "Resolve",
            onClick: showLoading,
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
      <div className="flex gap-4 mb-8">
        {/* when we have api i'll make this dynamic */}
        <div className="">
          <p className="text-[#555555] text-sm mb-2">Total reports submitted</p>
          <h1 className="text-black font-bold text-4xl">10,457</h1>
        </div>
      </div>

      <div>
        <h2 className="mb-2">Reports submitted by lenders</h2>

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
            <div className="flex gap-3 items-center">
              <Popover
                content={sortPopoverContent}
                trigger="click"
                placement="bottom"
                overlayClassName="custom-popover"
                arrow={false}
              >
                <div className="border border-[#CDCDCD] shadow rounded-lg py-1.5 px-4 flex gap-2 items-center cursor-pointer">
                  <div>
                    <p className="text-[#555555]">Sort by date</p>
                  </div>
                  <div>
                    <CalendarDays className="text-[#555555] w-[18px] h-[18px]" />
                  </div>
                </div>
              </Popover>
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
      <Drawer
        closable
        destroyOnClose
        title={
          <p>
            Report <span className="text-[#8A8A8A]">#1309438233</span>
          </p>
        }
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>live data from api goes here</p>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default Lender;
