import { ReactElement } from "react";

type Variants = "primary" | "secondary";
export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullwidth?: boolean;
  loading?: boolean;
}

const defaultStyle = "rounded-md p-2 flex";
const variantStyles = {
  primary: "bg-[#4643dd] text-white",
  secondary: "bg-[#b9c9f3] text-white",
};

const sizeStyle = {
  sm: "py-2 px-4 rounded-sm",
  md: "py-4 px-6 rounded-md",
  lg: "py-6 px-8 rounded xl",
};

export function Button({
  variant,
  text,
  size,
  startIcon,
  onClick,
  fullwidth,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        variantStyles[variant] +
        " rounded " +
        defaultStyle +
        `${fullwidth ? " w-full" : ""} ${loading ? "opacity-45" : ""}`
      }
    >
      <div className="pr-2 mt-1.5">{startIcon}</div>
      <div className="mt-1">

      {text}
      </div>
    </button>
  );
}
