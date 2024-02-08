'use client'

import Image from "next/image";
import { useState } from "react";

interface ImageCustomProps {
    alt: string;
    src: string;
    fill?: boolean;
    className?: string;
    loading?: "lazy" | "eager" | undefined;
    quality?: number;
}

const ImageCustom = ({ src, fill, alt, className, loading = undefined, quality = 75 }: ImageCustomProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return fill ? (
        <Image
            src={src}
            fill
            alt={alt}
            className={`object-cover ${isLoading ? "blur-3xl grayscale scale-110" : "blur-0 grayscale-0 scale-100"} ${className}`}
            onLoadingComplete={() => setIsLoading(false)}
            loading={loading}
            quality={quality}
        />
    ) : (
        <Image
            src={src}
            width={500}
            height={500}
            alt={alt}
            className={`object-cover ${isLoading ? "blur-3xl grayscale scale-110" : "blur-0 grayscale-0 scale-100"} ${className}`}
            onLoadingComplete={() => setIsLoading(false)}
            loading={loading}
            quality={quality}
        />
    )
}

export default ImageCustom