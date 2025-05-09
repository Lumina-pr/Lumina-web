import React from "react";
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";

interface LabeledInputProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
    id,
    label,
    type,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
        <Label text={label} htmlFor={id} />
        <Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        </div>
    );
};

export default LabeledInput;
