import React from "react";

//* interface
import { CredButtonProps } from "@/interface/interface";

const CredButton: React.FC<CredButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="w-full font-semibold py-4 bg-[#A2195E] text-white rounded-md hover:bg-[#870f4c] transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CredButton;
