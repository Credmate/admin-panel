"use client";

import { useRouter } from "next/navigation";
import { EllipsisVertical } from "lucide-react";
import { Popover } from "antd";

//* components
import { BackButton } from "@/components/atoms/BackButton";

const payments = [
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
  {
    name: "George Olufemi",
    accountID: "1234567890",
    paymentID: "1234567890",
    status: "Successful",
    paymentDate: "3rd August, 2024",
    plan: "Pro Individual",
    amountPaid: "₹9,000",
  },
];

const UserPaymentDetails = () => {
  const router = useRouter();

  const handleGoToAccount = () => {
    router.push("/dashboard/usermanagement/1");
  };

  return (
    <div className="px-5 py-6">
      <div className="mt-3 mb-5">
        <BackButton onClick={() => router.back()} />
      </div>

      <div className="grid grid-cols-4 gap-5">
        {payments.map((payment, index) => (
          <PaymentCard
            key={index}
            payment={payment}
            onGoToAccount={handleGoToAccount}
          />
        ))}
      </div>
    </div>
  );
};


export default UserPaymentDetails;


const PaymentCard = ({ payment, onGoToAccount }: any) => {
  return (
    <div className="p-4 rounded-lg border shadow-sm bg-[#F7F7F7] flex flex-col gap-2 w-[287px]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-lg">{payment.name}</h2>
        <Popover
          content={
            <button onClick={onGoToAccount} className="text-[#555555]">
              Go to Account
            </button>
          }
          trigger="click"
          arrow={false}
        >
          <button className="text-[#A0A0A0]">
            <EllipsisVertical className="h-5 w-5" />
          </button>
        </Popover>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <p className="text-[#555555]">Account ID</p>
          <p className="text-[#1C1C1C] font-semibold">{payment.accountID}</p>
        </div>
        <div>
          <p className="text-[#555555]">Payment ID</p>
          <p className="text-[#A2195E] font-semibold">{payment.paymentID}</p>
        </div>
      </div>

      <hr className="dashed" />

      <div>
        <p className="text-[#555555]">
          Payment Status:{" "}
          <span className="text-[#2EA52E] font-semibold">{payment.status}</span>
        </p>
      </div>
      <div>
        <p className="text-[#555555]">
          Payment Date:{" "}
          <span className="text-[#1C1C1C] font-semibold">
            {payment.paymentDate}
          </span>
        </p>
      </div>
      <div>
        <p className="text-[#555555]">
          Plan:{" "}
          <span className="text-[#A2195E] font-semibold">@{payment.plan}</span>
        </p>
      </div>
      <div>
        <p className="text-[#555555]">
          Amount Paid:{" "}
          <span className="text-[#1C1C1C] font-semibold">
            {payment.amountPaid}
          </span>
        </p>
      </div>
    </div>
  );
};