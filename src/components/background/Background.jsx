import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";

const Background = () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        setShowBackground(true);
    }, []);

    return (
        <>
            <div className={cn("fixed inset-0 bg-[#090580] -z-10 w-screen")} />
            <div
                className={cn(
                    "bg-black fixed inset-0 transition-all duration-[5000ms]",
                    !showBackground ? "opacity-100 z-50" : "opacity-0 -z-10"
                )}
            />
        </>
    );
};

export default Background;
