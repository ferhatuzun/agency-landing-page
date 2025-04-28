import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  href: string;
  size: "sm" | "md" | "lg";
  color?: "colored" | "default";
}

const CustomButton = ({
  children,
  href,
  size,
  color = "default",
}: CustomButtonProps) => {
  return (
    <a
      href={`${href}`}
      className={`block w-fit rounded-lg  ${
        color == "colored" ? "bg-green text-white" : "text-green bg-transparent"
      } ${
        size == "sm"
          ? "py-2 px-4"
          : size == "md"
          ? "py-3 px-5"
          : size == "lg" && "py-4 px-8"
      }`}
    >
      {children}
    </a>
  );
};

export default CustomButton;
