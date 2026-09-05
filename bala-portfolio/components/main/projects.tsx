"use client"

import verified from "@/public/icons/verified.svg"
import Image from "next/image";
import profile from "@/public/profile.json";
import theme from "@/config/theme.json";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {

    const [showProjects, setShowProjects] = useState(false);

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="rounded-4xl p-3 border border-white/10 backdrop-blur bg-white/5">
                    <Image src={verified} alt="projects" width={35} height={35} />
                </div>

                <h2 className=" text-4xl tracking-light leading-tight font-bold" style={{ color: theme.leading }}>Projects I've Done</h2>

                {profile?.description?.project && <div className="flex justify-center text-center my-6" style={{ color: theme.text }}>
                    <pre className="font-sans">{profile?.description?.project}</pre>
                </div>}

            </div>

            <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-[15%]">
                    {
                        profile.projects.length > 0 ?
                            profile.projects.slice(0, showProjects ? profile.projects.length : 3).map(
                                (val, ind) => <Link href={val.url} key={ind} className="backdrop-filter bg-white/10 rounded-md border-2 p-2 border-white/10">
                                    <Image src={`/assets/projects/${val.images}`} alt={val.tittle} width={500} height={100} className="w-100 mx-auto" />
                                    <p className="mt-4 text-3xl capitalize font-jost line-clamp-2">{val.tittle}</p>
                                    <p className="first-letter:uppercase text-xl my-2 line-clamp-3 h-20">{val.desc}</p>
                                    <p className="text-xl font-bold line-clamp-1">Role : <span className="italic font-normal">{val.role}</span></p>
                                </Link>
                            )
                            : <div>
                                <p>No Projects yet</p>
                            </div>
                    }
                </div>

                {
                    profile.projects.length > 3 && <button 
                        onClick={()=> setShowProjects(!showProjects)}
                        className="my-8 p-2 bg-white rounded text-black w-25 mx-auto"
                    >
                            {`Show ${showProjects ? 'less' : 'more'}`}
                    </button>
                }
            </div>
        </div>
    );
}