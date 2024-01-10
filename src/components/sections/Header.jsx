import React from "react";
import { FaReact } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header className="w-full py-4 px-8 z-10 fixed flex justify-between">
            <span className="flex items-center text-white  gap-x-2">
                <FaReact className="text-2xl" />
                <p>Anjasfedo</p>
            </span>
            <div className="flex gap-x-8 items-center">
                <div className="flex gap-x-5">
                    <a href="#aboutMe">About Me</a>
                    <a href="#myTech">My Tech</a>
                    <a href="#myProject">My Project</a>
                </div>
                <div className="flex gap-x-4 text-2xl">
                    <VscGithub />
                    <AiOutlineInstagram />
                    <AiOutlineLinkedin />
                </div>
            </div>
        </header>
    );
};

export default Header;
