import React from "react";
import Image from "next/image";

interface CredInputProps {
  type: string;
  placeholder: string;
  icon: string;
  value: string | undefined;
  onChange: (value: string) => void;
}

const CredInput: React.FC<CredInputProps> = ({
  type,
  placeholder,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className="bg-[#F2F2F2] px-4 py-3.5 flex gap-2 items-center rounded-md">
      <div>
        <Image src={icon} alt={`${type} icon`} width={22} height={22} />
      </div>
      <div>
        <input
          type={type}
          className="bg-transparent w-[350px] focus:outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CredInput;
