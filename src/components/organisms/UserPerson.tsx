"use client"

import React, { useState } from "react";
import Title from "@/components/atoms/Title";
import Button from "@/components/atoms/Button";
import Imagen from "@/components/atoms/Imagen";
import LabeledInput from "@/components/molecules/LabeledInput";

const UserPerson: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "Luis",
        fullName: "Torres",
        email: "LTorres@gmail",
        phone: "(+57) 302 4248167",
        location: "Medellin, Colombia",
        postalCode: "050031",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSave = () => {
        console.log("Saved:", formData);
    };

    return (
        <div className="flex flex-col items-center bg-white rounded-md shadow-md justify-center p-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-black">
                <Imagen
                src="https://i.pinimg.com/736x/c9/26/54/c92654f51926c675ea63f5ba4460941c.jpg"
                alt="User avatar"
                className="w-24 h-24 rounded-full shadow-md"
                />
                <Title text={`${formData.name} ${formData.fullName}`} className="text-xl font-bold" />
                {/*<span className="text-gray-500 text-sm">Ciudad</span>*/}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-6">
                <LabeledInput
                id="name"
                label="Name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                />
                <LabeledInput
                id="fullName"
                label="Full Name"
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                />
                <LabeledInput
                id="email"
                label="Email Address"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                />
                <LabeledInput
                id="phone"
                label="Phone Number"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                />
                <LabeledInput
                id="location"
                label="Location"
                type="text"
                placeholder="e.g. New York, USA"
                value={formData.location}
                onChange={handleChange}
                />
                <LabeledInput
                id="postalCode"
                label="Postal Code"
                type="text"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                />
            </div>

            <div className="mt-6">
                <Button
                text="Save Changes"
                type="button"
                onClick={handleSave}
                className="bg-yellow-500 text-white px-6 py-2 mt-20 rounded-md hover:bg-yellow-600 shadow-md"
                />
            </div>
        </div>
    );
};

export default UserPerson;
