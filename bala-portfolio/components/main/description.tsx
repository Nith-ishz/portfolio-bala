import theme from "@/config/theme.json";
import profile from "@/public/profile.json";
import Reveal from "@/components/common/reveal";

export default function Description() {
    return (profile?.description?.content ?
        <Reveal className="text-center mx-4 sm:mx-10 md:mx-[15%] lg:mx-[20%] my-16 sm:my-25 text-lg sm:text-xl md:text-2xl leading-8 sm:leading-10 md:leading-12" style={{ color: theme.text }}>
            <HighlightText text={profile?.description?.content} />
        </Reveal> : null
    );
}

function Hl({ children }: { children: React.ReactNode }){
    return (<span className="font-medium" style={{color: theme.leading}}>{children}</span>)
}

function HighlightText({ text }: { text: string }) {
    const parts = text.split("**");

    return (
        <>
            {parts.map((part, index) =>
                index % 2 === 1 ? (
                    <Hl key={index}>{part}</Hl>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </>
    );
}
