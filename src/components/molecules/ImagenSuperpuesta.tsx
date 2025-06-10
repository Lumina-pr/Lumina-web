import React from "react";
import Imagen from "../atoms/Imagen";

interface ImagenSuperpuestaProps {
    imagenFrontal: string;
    imagenTrasera: string;
    altFrontal?: string;
    altTrasera?: string;
}

const ImagenSuperpuesta: React.FC<ImagenSuperpuestaProps> = ({
    imagenFrontal,
    imagenTrasera,
    altFrontal = "Imagen Frontal",
    altTrasera = "Imagen Trasera",
}) => {
    return (
        <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] mx-auto md:mx-0">
            {/* Imagen trasera */}
            <div className="absolute -top-2 -right-4 sm:-right-6 md:-right-8 lg:-right-10 w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <Imagen
                    src={imagenTrasera}
                    alt={altTrasera}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            {/* Imagen frontal */}
            <div className="absolute top-8 right-4 sm:top-10 sm:right-6 md:top-12 md:right-8 lg:top-14 lg:right-10 w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Imagen
                    src={imagenFrontal}
                    alt={altFrontal}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
        </div>
    );
};

export default ImagenSuperpuesta;
