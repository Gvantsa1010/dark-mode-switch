import { useState, useEffect } from "react";

const breakPoint = 600;
const decectDevice = () => {
    return document.documentElement.getBoundingClientRect().width > breakPoint ? "desktop" : "mobile";
}

const useDetectDevice = () => {
    const [device, setDevice] = useState(decectDevice());


    useEffect (() => {
        const handleResize = () => {
            setDevice(decectDevice());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return device;
}

export default useDetectDevice;