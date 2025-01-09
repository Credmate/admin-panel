import React from "react";

//* interface
import { BackButtonProps } from "@/interface/interface";

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow rounded-lg px-2 py-1 flex gap-1 items-center w-[70px] h-[25.78px] cursor-pointer"
    >
      <div>
        <img src="/arrow.svg" alt="arrow" />
      </div>
      <div>
        <p>Back</p>
      </div>
    </div>
  );
};
