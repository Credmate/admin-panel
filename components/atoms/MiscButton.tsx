import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "solid" | "outline";
type ButtonColor = "primary" | "danger" | "warning" | "success";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

type VariantStyles = {
  [key in ButtonVariant]: {
    [key in ButtonColor]: string;
  };
};

const MiscButton: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  color = "primary",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "px-5 py-2 rounded-lg font-medium transition-all duration-200 text-base";

  const variants: VariantStyles = {
    solid: {
      primary: "bg-[#B4245D] hover:bg-[#B4245D] text-white",
      danger: "bg-[#B02828] hover:bg-red-600 text-white",
      warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
      success: "bg-[#2EA52E] hover:bg-green-600 text-white",
    },
    outline: {
      primary:
        "border border-[#B4245D] text-[#B4245D] hover:bg-[#B4245D] hover:text-white",
      danger:
        "border border-[#B02828] text-[#B02828] hover:bg-[#B02828] hover:text-white",
      warning:
        "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white",
      success:
        "border border-[#2EA52E] text-[#2EA52E] hover:bg-[#2EA52E] hover:text-white",
    },
  };

  const variantStyles = variants[variant][color];
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MiscButton;
