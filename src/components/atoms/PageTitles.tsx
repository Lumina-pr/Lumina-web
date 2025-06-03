import React from "react";

const PageTitles: React.FC = () => {
  return (
    <tr className="bg-amber-400 text-white font-bold">
      <th className="w-1/4 py-2 text-center">ID</th>
      <th className="w-1/4 py-2 text-center">Nombre</th>
      <th className="w-1/4 py-2 text-center">Estado</th>
      <th className="w-1/4 py-2 text-center">Acciones</th>
    </tr>
  );
};

export default PageTitles;
