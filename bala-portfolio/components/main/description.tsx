import theme from "@/config/theme.json";
import profile from "@/public/profile.json";

export default function Description() {
    return (profile?.description?.content ?
        <div className="text-center mx-[20%] my-25 text-2xl leading-12" style={{color: theme.text}}>
            <HighlightText text={profile?.description?.content} />
        </div> : <></>
    );
}

function Hl({ children }: { children: String }){
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