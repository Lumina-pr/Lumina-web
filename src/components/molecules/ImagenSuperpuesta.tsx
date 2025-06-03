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
        <div className="relative w-[200px] sm:w-[250px] h-[250px] sm:h-[300px]">
            <div className="absolute -top-2 -right-10 sm:-right-20 w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <Imagen src={imagenTrasera} alt={altTrasera} className="w-full h-full rounded-2xl" />
            </div>

            <div className="absolute top-12 sm:top-20 right-10 sm:right-20 w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Imagen src={imagenFrontal} alt={altFrontal} className="w-full h-full rounded-2xl" />
            </div>
        </div>
    );
};

export default ImagenSuperpuesta;
