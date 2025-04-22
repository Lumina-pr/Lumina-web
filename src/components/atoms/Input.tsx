import React from "react";

interface InputProps {
  id?: string;  
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, value, onChange }) => {
  return (
    <input
      id={id}  
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border bg-customBlue text-xs border-transparent px-4 shadow-lg py-2 rounded-lg w-full focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-black"
    />
  );
  
};

export default Input;
