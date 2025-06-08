import React from "react";
import HomeInfo from "../molecules/HomeInfo";
import HomeHeader from "../molecules/HomeHeader";
import ImagenSuperpuesta from "../molecules/ImagenSuperpuesta";

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen px-4 sm:px-8 md:px-16 py-4 sm:py-8 bg-white">
            <HomeHeader />

            <div className="flex flex-col max-w-screen-xl mx-auto md:flex-row items-center justify-between gap-8 md:gap-12 mt-8 sm:mt-12">
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
