import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileHeader = () => {
    return (
        <div className="fixed md:hidden right-5 top-5 z-20 h-full w-2/5">
            <div className="flex flex-col gap-y-8 justify-center items-center w-fit">
                <div className="flex flex-col gap-y-5 font-semibold">
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
        </div>
    );
};

const Header = () => {
    const [openBurger, setOpenBurger] = useState(false);

    const changeBurger = () => {
        setOpenBurger((prevBurger) => !prevBurger);
    };

    return (
        <header>
            <div className="w-full py-4 px-12 z-10 fixed flex justify-between">
                <div className="flex items-center w-full justify-between md:w-fit">
                    <span className="flex items-center text-white font-bold gap-x-2 text-xl">
                        <FaReact className="text-2xl" />
                        <p>Anjasfedo</p>
                    </span>
                    <button
                        className="md:hidden text-3xl z-50"
                        onClick={changeBurger}
                        aria-label="Toggle Mobile Menu"
                        aria-expanded={openBurger}
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>
                <div className="hidden md:flex gap-x-8 items-center">
                    <div className="flex gap-x-5 font-semibold ">
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
                {openBurger && (<MobileHeader />)}
            </div>
        </header>
    );
};

export default Header;
