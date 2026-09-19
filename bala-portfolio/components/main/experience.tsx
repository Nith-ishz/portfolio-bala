import exp from "@/public/icons/experience.png"
import Image from "next/image";
import profile from "@/public/profile.json";
import theme from "@/config/theme.json";
import Reveal from "@/components/common/reveal";

export default function Experience() {
    const experience = profile?.experience ?? [];

    return (
        <div id="experience" className="scroll-mt-24">
            <Reveal className="flex flex-col justify-center items-center mt-18">
                <div className="rounded-4xl p-3 border border-white/10 backdrop-blur bg-white/5 relative">
                    <Image src={exp} alt="experience" width={35} height={35} className="invert" />
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

                <h2 className="text-3xl sm:text-4xl tracking-light leading-tight font-bold text-center px-4" style={{ color: theme.leading }}>Experience</h2>

                {profile?.description?.experience && <div className="flex justify-center text-center my-6 px-4" style={{ color: theme.text }}>
                    <pre className="whitespace-pre-wrap font-sans text-sm sm:text-base">{profile.description.experience}</pre>
                </div>}

            </Reveal>

            <div className="flex flex-col mt-10 items-center gap-8 sm:gap-12">

                {
                    experience.length > 0 ? experience.map((val, ind) => (
                        <Reveal key={ind} delay={ind * 100} className="w-[92%] sm:w-[85%] md:w-[75%] bg-white/10 border border-white/20 rounded-md p-4 sm:p-5">
                            <div className="flex flex-col">
                                <div>
                                    <div className="flex flex-col sm:flex-row capitalize text-xl sm:text-2xl font-jost sm:justify-between gap-1">
                                        {val.role && <p>{val.role}</p>}
                                        {val.name && <p className="text-lg sm:text-xl font-sans">{val.name}</p>}
                                    </div>

                                    {val.timeline && (
                                        <p className="font-sansflex text-white/45 text-sm sm:text-base">
                                            {`${val.timeline.from ?? "—"} - ${val.timeline.to ?? "Present"}  `}
                                            {val.exp && <span className="font-medium text-white/75">{`( ${val.exp} ${val.timeline.to == null ? '+' : ''} )`}</span>}
                                        </p>
                                    )}
                                </div>

                                {val.work?.length > 0 && (
                                    <div className="flex flex-wrap my-4">
                                        {val.work.map(
                                            (item, i) => <div key={i} className="border-white/10 flex-1 min-w-full sm:min-w-[45%] md:min-w-[30%] border bg-white/10 text-center first-letter:capitalize p-4 sm:p-5 text-base sm:text-xl m-1">
                                                <p>{item}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    )) : (
                        <p className="text-center">No experience yet</p>
                    )
                }

            </div>
        </div>
    );
}
