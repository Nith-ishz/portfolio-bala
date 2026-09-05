"use client"

import Image from "next/image";
import profile from "@/public/profile.json";
import profileImage from "@/public/assets/profile.avif";
import theme from "@/config/theme.json";

export default function MainIndex() {
    return (
        <div className="m-5 flex flex-col gap-5">
            <div className="flex justify-center items-center">
                <div className="font-caveat text-xl text-center">
                    <Image src={profileImage.src} width={100} height={100} className="w-full h-auto" alt="profile_image" />
                    <p>{profile.professional}</p>
                </div>
            </div>

            {profile?.description?.main && <div className="flex justify-center text-center m-3">
                <pre className="text-6xl tracking-light leading-tight font-bold font-sans" style={{color : theme.leading}}>
                    {profile?.description?.main}
                </pre>
            </div>}

            {profile?.description?.sub && <div className="flex justify-center text-center" style={{color: theme.text}}>
                <pre className="font-sans">
                    {profile?.description?.sub}
                </pre>
            </div>}

            <div className="flex justify-center font-sansflex gap-3 m-4">
                <button className="bg-white/15 p-2 rounded-md justify-center" onClick={() => alert("this is alert")}>Lookout Resume</button>
                <button className="bg-white p-2 rounded-md font-bold" style={{color: theme.primary}} onClick={() => alert("this is alert")}>Contact me</button>
            </div>
        </div>
    );
}