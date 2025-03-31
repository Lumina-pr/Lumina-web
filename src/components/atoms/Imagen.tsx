    import React from "react";

    interface ImagenProps {
        src: string;
        alt: string;
        className?: string;
    }

    const Imagen: React.FC<ImagenProps> = ({ src, alt, className }) => {
        return <img src={src} alt={alt} className={`object-cover ${className}`} />;
    };
    
    export default Imagen;
