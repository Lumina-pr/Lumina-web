import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", className=""}) => {
  return (
    <button 
      className={className}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
