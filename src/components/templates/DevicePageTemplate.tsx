import React from "react";
import DeviceTable from "@/components/organisms/DeviceTable";

const DevicePageTemplate: React.FC = () => {
    return (
        <main className="p-6 bg-gray-100 min-h-screen">
        <DeviceTable />
        </main>
    );
};

export default DevicePageTemplate;
