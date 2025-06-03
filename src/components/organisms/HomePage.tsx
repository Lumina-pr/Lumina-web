import React from "react";
import HomeInfo from "../molecules/HomeInfo";
import HomeHeader from "../molecules/HomeHeader";
import ImagenSuperpuesta from "../molecules/ImagenSuperpuesta";

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen px-6 sm:px-16 py-8 bg-white">
            <HomeHeader />

            <div className="flex flex-col max-w-screen-lg md:flex-row items-center justify-between mt-12 gap-10">
                <HomeInfo />

                <ImagenSuperpuesta
                    imagenFrontal="/images/Imagen1.jpg"
                    imagenTrasera="/images/Imagen2.jpg"
                />
            </div>
        </div>
    );
};

export default HomePage;
