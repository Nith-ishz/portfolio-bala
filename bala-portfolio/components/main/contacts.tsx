import contact from "@/public/icons/contacts.svg";
import copy from "@/public/icons/copy.svg";
import Image from "next/image";
import profile from "@/public/profile.json";
import theme from "@/config/theme.json";

export default function Contacts() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-18">
                <div className="rounded-4xl p-3 border border-white/10 backdrop-blur bg-white/5">
                    <Image src={contact} alt="projects" width={32} height={32} />
                </div>

                <h2 className=" text-4xl tracking-light leading-tight font-bold" style={{ color: theme.leading }}>Want to Connect ?</h2>

                {profile?.description?.contact && <div className="flex justify-center text-center my-6" style={{ color: theme.text }}>
                    <pre className="font-sans">{profile?.description?.contact}</pre>
                </div>}

            </div>

            <div className="flex justify-center my-2">
                <button className="p-3 text-black rounded-md flex text-xl items-center gap-2" style={{
                    backgroundColor: `color-mix(in srgb, ${theme.leading} 40%, white)`,
                }}
                >{profile.email} <Image src={copy} alt="copy" width={25} height={25} /></button>
            </div>
        </div>
    );
}