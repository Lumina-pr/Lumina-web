import React from "react";

interface LabelProps {
  text: string;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return <label htmlFor={htmlFor} className="font-semibold text-xs text-gray-600">{text}</label>;
};

export default Label;
