import theme from "@/config/theme.json";
import profile from "@/public/profile.json";
export default function Skills() {
    return (
        <div className="m-10 flex gap-x-18 gap-y-6 w-auto flex-wrap justify-center" style={{color: theme.leading}}>
            {
                profile.skills.map(
                    (v,i) => 
                        <div key={i} className="p-4 text-xl capitalize">
                            {`#${v}`}
                        </div>
                )
            }
        </div>
    );
}