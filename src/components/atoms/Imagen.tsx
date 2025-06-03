    import React from "react";

    interface ImagenProps {
        src: string;
        alt: string;
        className?: string;
    }

    const Imagen: React.FC<ImagenProps> = ({ src, alt, className }) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt={alt} className={`object-cover ${className}`} />;
    };
    
    export default Imagen;
