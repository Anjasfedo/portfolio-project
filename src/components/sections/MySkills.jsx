import React from "react";
import { FaHtml5, FaPython, FaVuejs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import {
    SiPhp,
    SiReact,
    SiNextdotjs,
    SiLaravel,
    SiExpress,
    SiVercel,
    SiMongodb,
    SiLaragon,
    SiFirebase,
    SiTailwindcss,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const MySkills = () => {
    return (
        <div
            className="space-y-2 text-center bg-slate-950 pb-8 w-full px-10 lg:h-screen border-t border-solid border-violet-950 pt-10"
            id="mySkills"
        >
            <div className="flex flex-col justify-center items-center gap-y-8">
                <h1 className="text-5xl font-semibold">
                    <span className="text-violet-400 font-bold poppins">My Skill</span>
                </h1>
                <div className="flex flex-col gap-y-10">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-2xl font-bold">Lenguages</h1>
                        <div className="flex gap-x-10 gap-y-4 grow flex-wrap justify-center items-center">
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <FaHtml5 className="text-2xl" />
                                <p>HTML</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <IoLogoCss3 className="text-2xl" />
                                <p>CSS</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <IoLogoJavascript className="text-2xl" />
                                <p>JavaScript</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <FaPython className="text-2xl" />
                                <p>Python</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <SiPhp className="text-2xl" />
                                <p>PHP</p>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-2xl font-bold">Frameworks</h1>
                        <div className="flex gap-x-10 gap-y-4 grow flex-wrap justify-center items-center">
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <SiReact className="text-2xl" />
                                <p>React.js</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <FaVuejs className="text-2xl" />
                                <p>Vue.js</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <SiNextdotjs className="text-2xl" />
                                <p>Next.js</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <SiLaravel className="text-2xl" />
                                <p>Laravel</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <SiExpress className="text-2xl" />
                                <p>Express.js</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <SiTailwindcss className="text-2xl" />
                                <p>Tailwind CSS</p>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-2xl font-bold">Others</h1>
                        <div className="flex gap-x-10 gap-y-4 grow flex-wrap justify-center items-center">
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <SiVercel className="text-2xl" />
                                <p>Vercel</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <FaGitAlt className="text-2xl" />
                                <p>Git</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <FaGithub className="text-2xl" />
                                <p>GitHub</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <GrMysql className="text-2xl" />
                                <p>MySQL</p>
                            </span>
                            <span className="flex items-center gap-2 text-lg font-semibold">
                                <SiMongodb className="text-2xl" />
                                <p>MongoDB</p>
                            </span>
                            <span className="flex items-center gap-2 text-xl font-semibold">
                                <SiLaragon className="text-2xl" />
                                <p>Laragon</p>
                            </span>
                            <span className="flex items-center gap-2 text-xl font-semibold">
                                <SiFirebase className="text-2xl" />
                                <p>Firebase</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
