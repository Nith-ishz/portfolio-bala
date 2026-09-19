"use client"

import profile from '@/public/profile.json';
import theme from '@/config/theme.json';
import { useState } from 'react';

type NavItem = { label: string; href: string };

export default function AppBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { label: "About", href: "#about" },
        ...(profile?.skills?.length ? [{ label: "Skills", href: "#skills" }] : []),
        ...(profile?.projects?.length ? [{ label: "Projects", href: "#projects" }] : []),
        ...(profile?.experience?.length ? [{ label: "Experience", href: "#experience" }] : []),
    ];

    const initial = profile?.firstName?.[0]?.toLocaleUpperCase() ?? profile?.name?.[0]?.toLocaleUpperCase() ?? "?";

    const scrollTo = (href: string) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex py-5 justify-center sticky top-0 z-50 px-3">
            <div className="w-full max-w-4xl p-3 rounded-2xl backdrop-blur bg-white/8 border-white/8 border font-sansflex">
                <div className='flex justify-between items-center gap-2'>

                    {/* Name badge*/}
                    <div className='flex gap-2 justify-center items-center min-w-0'>
                        <div
                            className='w-8 h-8 shrink-0 rounded border flex items-center justify-center font-bold text-lg sm:text-2xl'
                            style={{
                                borderColor: theme.leading,
                                boxShadow: `0 0 4px ${theme.leading}`,
                            }}>
                            {initial}
                        </div>

                        {profile?.name && <h2 className='font-urbanist font-bold text-lg sm:text-2xl truncate'>{profile.name}</h2>}
                    </div>

                    {/* Menu (desktop) */}
                    {navItems.length > 0 && (
                        <div className="hidden md:block">
                            <ul className='flex gap-3 justify-center'>
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <button
                                            onClick={() => scrollTo(item.href)}
                                            className="cursor-pointer hover:opacity-70 transition-opacity"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex items-center gap-2 shrink-0">
                        {/*Contact*/}
                        <button
                            onClick={() => scrollTo("#contact")}
                            className='w-auto rounded backdrop-blur bg-white/8 border-white/8 border cursor-pointer hover:bg-white/15 transition-colors'
                        >
                            <p className='p-2 text-sm sm:text-base whitespace-nowrap'>Contact me</p>
                        </button>

                        {/* Hamburger (mobile) */}
                        {navItems.length > 0 && (
                            <button
                                aria-label="Toggle menu"
                                className="md:hidden flex flex-col gap-1.5 p-2"
                                onClick={() => setMenuOpen((v) => !v)}
                            >
                                <span className="w-5 h-0.5 bg-white block" />
                                <span className="w-5 h-0.5 bg-white block" />
                                <span className="w-5 h-0.5 bg-white block" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Menu (mobile) */}
                {navItems.length > 0 && (
                    <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-40 mt-3" : "max-h-0"}`}>
                        <ul className='flex flex-col gap-2 items-center'>
                            {navItems.map((item) => (
                                <li key={item.href} className="w-full text-center">
                                    <button
                                        onClick={() => scrollTo(item.href)}
                                        className="cursor-pointer hover:opacity-70 transition-opacity p-1 w-full"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
