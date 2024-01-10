import { useEffect, useState } from "react";
import { assets } from "../../../lib/assets";
import { cn } from "../../../lib/utils";

const Background = () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        setShowBackground(true);
    }, []);

    return (
        <>
            <div
                className={cn("fixed inset-0 bg-slate-950 -z-10")}
            />
            <img src={assets.gradient} alt="Gradient" className="h-screen w-screen object-cover" />
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
