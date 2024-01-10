import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";

const Background = () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        setShowBackground(true);
    }, []);

    return (
        <>
            <div className={cn("fixed inset-0 bg-[#090580] -z-10")} />
            <div
                className={cn(
                    "bg-black fixed inset-0 transition-opacity duration-[3000ms]",
                    !showBackground ? "opacity-100" : "opacity-0"
                )}
            />
        </>
    );
};

export default Background;
