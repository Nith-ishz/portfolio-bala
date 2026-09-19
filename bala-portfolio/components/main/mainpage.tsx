"use client"

import Image from "next/image";
import profile from "@/public/profile.json";
import theme from "@/config/theme.json";
import Reveal from "@/components/common/reveal";

export default function MainIndex() {
    const resume = (profile as { resume?: string }).resume;

    const scrollToContact = () => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div id="about" className="m-5 flex flex-col gap-5 scroll-mt-24">
            <Reveal className="flex justify-center items-center">
                <div className="font-caveat text-lg sm:text-xl text-center">
                    <Image
                        src={profile.avatarDir}
                        width={100}
                        height={100}
                        className="w-24 h-24 sm:w-[100px] sm:h-[100px] rounded-full object-cover mx-auto"
                        alt={profile?.name ? `${profile.name} profile photo` : "profile photo"}
                    />
                    {profile?.professional && <p>{profile.professional}</p>}
                </div>
            </Reveal>

            {profile?.description?.main && (
                <Reveal delay={100} className="flex justify-center text-center m-3">
                    <pre className="whitespace-pre-wrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-light leading-tight font-bold font-sans" style={{ color: theme.leading }}>
                        {profile.description.main}
                    </pre>
                </Reveal>
            )}

            {profile?.description?.sub && (
                <Reveal delay={200} className="flex justify-center text-center">
                    <pre className="whitespace-pre-wrap font-sans text-sm sm:text-base" style={{ color: theme.text }}>
                        {profile.description.sub}
                    </pre>
                </Reveal>
            )}

            <Reveal delay={300} className="flex flex-wrap justify-center font-sansflex gap-3 m-4">
                {resume && (
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/15 p-2 rounded-md justify-center hover:bg-white/25 transition-colors"
                    >
                        Lookout Resume
                    </a>
                )}
                <button
                    className="bg-white p-2 rounded-md font-bold cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ color: theme.primary }}
                    onClick={scrollToContact}
                >
                    Contact me
                </button>
            </Reveal>
        </div>
    );
}
