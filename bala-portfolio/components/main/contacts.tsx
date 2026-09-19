"use client"

import contact from "@/public/icons/contacts.svg";
import copy from "@/public/icons/copy.svg";
import Image from "next/image";
import profile from "@/public/profile.json";
import theme from "@/config/theme.json";
import { useState } from "react";
import Reveal from "@/components/common/reveal";

export default function Contacts() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!profile?.email) return;
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // clipboard unavailable, ignore silently
        }
    };

    return (
        <div id="contact" className="scroll-mt-24">
            <Reveal className="flex flex-col justify-center items-center mt-18">
                <div className="rounded-4xl p-3 border border-white/10 backdrop-blur bg-white/5">
                    <Image src={contact} alt="contact" width={32} height={32} />
                </div>

                <h2 className="text-3xl sm:text-4xl tracking-light leading-tight font-bold text-center px-4" style={{ color: theme.leading }}>Want to Connect ?</h2>

                {profile?.description?.contact && <div className="flex justify-center text-center my-6 px-4" style={{ color: theme.text }}>
                    <pre className="whitespace-pre-wrap font-sans text-sm sm:text-base">{profile.description.contact}</pre>
                </div>}

            </Reveal>

            {profile?.email && (
                <Reveal delay={150} className="flex justify-center my-2 px-4">
                    <button
                        onClick={handleCopy}
                        className="p-3 text-black rounded-md flex w-full sm:w-auto max-w-full text-sm sm:text-xl items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{
                            backgroundColor: `color-mix(in srgb, ${theme.leading} 40%, white)`,
                        }}
                    >
                        <span className="min-w-0 flex-1 sm:flex-none break-words text-center">{copied ? "Copied!" : profile.email}</span>
                        <Image src={copy} alt="copy" width={25} height={25} className="shrink-0" />
                    </button>
                </Reveal>
            )}
        </div>
    );
}
