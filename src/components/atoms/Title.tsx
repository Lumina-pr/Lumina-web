import React from "react";

interface TitleProps {
    text?: string;
}

const Title: React.FC<TitleProps> = ({}) => {
    return (
        <h1 className="text-4xl font-semibold text-yellow-400">Lumina</h1>
    );
};

export default Title;