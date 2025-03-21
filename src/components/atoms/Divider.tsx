import React from "react";

interface DividerProps {
    text?: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
    return (
        <div className="flex items-center gap-4">
            <hr className="flex-grow border-t border-gray-300" />
                {text && <span className="text-gray-500 text-sm">{text}</span>}
            <hr className="flex-grow border-t border-gray-300" />
        </div>
    );
};

export default Divider;
