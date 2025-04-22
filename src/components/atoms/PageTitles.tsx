import React from "react";

const PageTitles: React.FC = () => {
    return (
        <div className="grid grid-cols-4 bg-amber-400 text-white font-bold px-4 py-2 rounded-t-lg ">
            <span className="flex justify-center">Id</span>
            <span className="flex justify-center">Dispositivos</span>
            <span className="flex justify-center">Estado</span>
            <span className="flex justify-center">Acción</span>
        </div>
    );
};

export default PageTitles;

