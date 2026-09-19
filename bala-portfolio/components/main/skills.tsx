import theme from "@/config/theme.json";
import profile from "@/public/profile.json";
import Reveal from "@/components/common/reveal";

export default function Skills() {
    if (!profile?.skills?.length) return null;

    return (
        <div id="skills" className="m-6 sm:m-10 flex gap-x-8 sm:gap-x-18 gap-y-6 w-auto flex-wrap justify-center scroll-mt-24" style={{ color: theme.leading }}>
            {
                profile.skills.map(
                    (v, i) =>
                        <Reveal key={i} delay={i * 60} className="p-2 sm:p-4 text-base sm:text-xl capitalize">
                            {`#${v}`}
                        </Reveal>
                )
            }
        </div>
    );
}
