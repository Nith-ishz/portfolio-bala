"use client"

import verified from "@/public/icons/verified.svg"
import Image from "next/image";
import profile from "@/public/profile.json";
import theme from "@/config/theme.json";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/common/reveal";

export default function Projects() {

    const [showProjects, setShowProjects] = useState(false);
    const projects = profile?.projects ?? [];

    return (
        <div id="projects" className="scroll-mt-24">
            <Reveal className="flex flex-col justify-center items-center">
                <div className="rounded-4xl p-3 border border-white/10 backdrop-blur bg-white/5">
                    <Image src={verified} alt="projects" width={35} height={35} />
                </div>

                <h2 className="text-3xl sm:text-4xl tracking-light leading-tight font-bold text-center px-4" style={{ color: theme.leading }}>Projects I&apos;ve Done</h2>

                {profile?.description?.project && <div className="flex justify-center text-center my-6 px-4" style={{ color: theme.text }}>
                    <pre className="whitespace-pre-wrap font-sans text-sm sm:text-base">{profile.description.project}</pre>
                </div>}

            </Reveal>

            <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-4 sm:mx-8 md:mx-[10%] lg:mx-[15%]">
                    {
                        projects.length > 0 ?
                            projects.slice(0, showProjects ? projects.length : 3).map(
                                (val, ind) => (
                                    <Reveal key={ind} delay={(ind % 3) * 100}>
                                        <Link
                                            href={val.url ?? "#"}
                                            target={val.url ? "_blank" : undefined}
                                            rel={val.url ? "noopener noreferrer" : undefined}
                                            className="block h-full backdrop-filter bg-white/10 rounded-md border-2 p-2 border-white/10 transition-transform duration-300 hover:-translate-y-1 hover:border-white/30"
                                        >
                                            {val.images && (
                                                <div className="relative w-full aspect-video overflow-hidden rounded">
                                                    <Image
                                                        src={`/assets/projects/${val.images}`}
                                                        alt={val.tittle ?? "project image"}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                        className="object-cover"
                                                    />
                                                </div>
                                            )}
                                            {val.tittle && <p className="mt-4 text-2xl sm:text-3xl capitalize font-jost line-clamp-2">{val.tittle}</p>}
                                            {val.desc && <p className="first-letter:uppercase text-base sm:text-xl my-2 line-clamp-3 h-auto sm:h-20">{val.desc}</p>}
                                            {val.role && <p className="text-lg sm:text-xl font-bold line-clamp-1">Role : <span className="italic font-normal">{val.role}</span></p>}
                                        </Link>
                                    </Reveal>
                                )
                            )
                            : <div className="col-span-full text-center">
                                <p>No Projects yet</p>
                            </div>
                    }
                </div>

                {
                    projects.length > 3 && <button
                        onClick={() => setShowProjects(!showProjects)}
                        className="my-8 p-2 bg-white rounded text-black w-28 mx-auto cursor-pointer hover:opacity-90 transition-opacity"
                    >
                        {`Show ${showProjects ? 'less' : 'more'}`}
                    </button>
                }
            </div>
        </div>
    );
}
