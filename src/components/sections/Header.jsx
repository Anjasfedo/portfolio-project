import React from "react";
import { FaReact } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header className="w-full py-4 px-8 z-10 fixed flex justify-between">
            <span className="flex items-center text-white font-bold gap-x-2 text-xl">
                <FaReact className="text-2xl" />
                <p>Anjasfedo</p>
            </span>
            <div className="flex gap-x-8 items-center">
                <div className="flex gap-x-5 font-semibold">
                    <a href="#aboutMe">About Me</a>
                    <a href="#mySkills">My Skills</a>
                    <a href="#myProjects">My Projects</a>
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
