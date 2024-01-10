import React, { useEffect, useState } from "react";
import { VALUE } from "../../../lib/constants";

const AboutMe = () => {
    const [showRole, setShowRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowRole((prevShowRole) => (prevShowRole < VALUE.role.length - 1 ? prevShowRole + 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-2 text-center p-2 h-screen container" id="aboutMe">
            <div className="mt-48">
                <h1 className="text-5xl font-semibold">
                    Hello, I'm <span className="text-violet-400 font-bold poppins">Anjasfedo</span>
                </h1>
                <p className="text-2xl font-semibold">
                    I'm a<span className="text-violet-400 font-semibold"> {VALUE.role[showRole]}</span>
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
