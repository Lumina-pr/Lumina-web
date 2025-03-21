import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button" }) => {
  return (
    <button 
      className="w-full bg-yellow-400 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
