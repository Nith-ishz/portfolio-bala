import exp from "@/public/icons/experience.png"
import Image from "next/image";
import profile from "@/public/profile.json";
import theme from "@/config/theme.json";

export default function Experience() {

    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-18">
                <div className="rounded-4xl p-3 border border-white/10 backdrop-blur bg-white/5 relative">
                    <Image src={exp} alt="projects" width={35} height={35} className="invert" />
                    {/* <div className="absolute h-full w-full top-0 left-0 bg-clip-border" style={{ backgroundColor: theme.leading}}></div> */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundColor: theme.leading,
                            maskImage: `url(${exp.src})`,
                            WebkitMaskImage: `url(${exp.src})`,
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskSize: "35px 35px",
                            WebkitMaskSize: "35px 35px",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                        }}
                    />
                </div>

                <h2 className=" text-4xl tracking-light leading-tight font-bold" style={{ color: theme.leading }}>Experience</h2>

                {profile?.description?.experience && <div className="flex justify-center text-center my-6" style={{ color: theme.text }}>
                    <pre className="font-sans">{profile?.description?.experience}</pre>
                </div>}

            </div>

            <div className="flex flex-col mt-10 items-center gap-12">

                {
                    profile.experience.map((val, ind) => <div key={ind} className="w-[75%] bg-white/10 border border-white/20 rounded-md p-5">
                        <div className="flex flex-col">
                            <div>
                                <div className="flex capitalize text-2xl font-jost justify-between">
                                    <p>{val.role}</p>
                                    <p className="text-xl font-sans">{val.name}</p>
                                </div>

                                <p className="font-sansflex text-white/45">{`${val.timeline.from} - ${val.timeline.to ?? "Present"}  `}<span className="font-medium text-white/75">{`( ${val.exp} ${val.timeline.to === null ? '+' : ''} )`}</span></p>
                            </div>

                            <div className="flex flex-wrap my-4">
                                {val.work.map(
                                    (val, ind) => <div key={ind} className="border-white/10 flex-1 min-w-[30%] border bg-white/10 text-center first-letter:capitalize p-5 text-xl m-1">
                                        <p>{val}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    )
                }

            </div>
        </div>
    );
}