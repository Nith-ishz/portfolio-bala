import profile from '@/public/profile.json';
import theme from '@/config/theme.json';

export default function AppBar() {
    return (
        <div className="flex py-5 justify-center">
            <div className="w-4xl p-3 rounded-2xl backdrop-blur bg-white/8 border-white/8 border font-sansflex">
                <div className='flex justify-between items-center'>

                    {/* Name badge*/}
                    <div className='flex gap-2 justify-center items-center'>
                        <div 
                            className='w-8 h-8 p-4 rounded border flex items-center justify-center font-bold text-2xl' 
                            style={{
                                borderColor: theme.leading,
                                boxShadow: `0 0 4px ${theme.leading}`,
                            }}>
                                {profile.firstName[0].toLocaleUpperCase()}
                        </div>

                        <h2 className='font-urbanist font-bold text-2xl'> {profile.name} </h2>
                    </div>

                    {/* Menu */}
                    <div>
                        <ul className='flex gap-3 justify-center'>
                            <li>About</li>
                            <li>Resume</li>
                            <li>Skills</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                        
                    {/*Contact*/}
                    <div className='w-auto rounded backdrop-blur bg-white/8 border-white/8 border'>
                        <p className='p-2'>Contact me</p>
                    </div>
                </div>
            </div>
        </div>
    );
}