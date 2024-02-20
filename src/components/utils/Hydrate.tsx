"use client"

import { useEffect, useState } from "react"

const Hydrate = ({ children }: { children: React.ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted ? <>{children}</> : <span>Carregando...</span>
}

export default Hydrate