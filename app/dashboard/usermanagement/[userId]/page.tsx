"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

//* components
import { BackButton } from "@/components/atoms/BackButton";
import MiscButton from "@/components/atoms/MiscButton";

const UserDetails = () => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  //* this is just dummy data for form fields
  const [formData, setFormData] = useState({
    accountID: "542312345",
    email: "george@credmate.ca",
    phoneNumber: "+9123456437",
    businessType: "Individual",
    aadharNumber: "123456789",
    panNumber: "123456789",
    plan: "Pro Individual",
    planPrice: "₹9,000",
    dob: "3rd of August, 1990",
    referralCode: "george.credmate",
    dateJoined: "3rd of August, 2023",
    credmateScore: "752/1000",
    creditScore: "70.3",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
    setIsEditing(false);
  };

  return (
    <div className="px-5 py-6 max-w-[900px]">
      <div className="mt-3 mb-5">
        <BackButton onClick={() => router.back()} />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-[65px] h-[65px] rounded-full bg-[#F4CE9B]"></div>
            <div>
              <div className="flex gap-2 items-center">
                <div>
                  <h1 className="font-semibold text-xl">George Olufemi</h1>
                </div>
                <div className="cursor-pointer">
                  <p
                    className="text-[#A2195E] text-[14px] transition-all duration-500"
                    onClick={handleEditToggle}
                  >
                    {isEditing ? "Cancel" : "Edit"}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#2EA52E] text-[14px]">Active</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <MiscButton
              variant="outline"
              color="success"
              onClick={() => console.log("Upgrade clicked")}
            >
              Upgrade
            </MiscButton>
            <MiscButton
              variant="outline"
              color="danger"
              onClick={() => console.log("Downgrade clicked")}
            >
              Downgrade
            </MiscButton>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label className="text-[#555555] capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
                />
              ) : (
                <p className="rounded-lg px-3 py-2.5 bg-[#F2F2F2]">{value}</p>
              )}
            </div>
          ))}
        </div>

        {isEditing && (
          <div className="mt-5 flex justify-end transition-all duration-500">
            <MiscButton variant="solid" color="primary" onClick={handleSave}>
              Save Changes
            </MiscButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
