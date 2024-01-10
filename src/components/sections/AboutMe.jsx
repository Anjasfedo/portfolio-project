import React, { useEffect, useState } from "react";
import { VALUE } from "../../../lib/constants";
import { assets } from "../../../lib/assets";

const AboutMe = () => {
    const [showRole, setShowRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowRole((prevShowRole) => (prevShowRole < VALUE.role.length - 1 ? prevShowRole + 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full">
            <img src={assets.gradient} alt="Gradient" className="h-full w-full object-cover absolute inset-0 z-0" />
            <div className="h-full flex flex-col justify-center items-center relative z-10">
                <div className="text-white text-center p-8">
                    <h1 className="text-5xl font-semibold">
                        Hello, I'm <span className="text-violet-400 font-bold poppins">Anjasfedo</span>
                    </h1>
                    <p className="text-2xl font-semibold">
                        I'm a<span className="text-violet-400 font-semibold"> {VALUE.role[showRole]}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
