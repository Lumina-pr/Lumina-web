import React from "react";

interface ChartContainerProps {
    children: React.ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ children }) => {
    return (
        <div className="w-full max-w-lg mx-auto bg-white p-4 rounded-lg shadow-lg">
            {children}
        </div>
    );
};

export default ChartContainer;
