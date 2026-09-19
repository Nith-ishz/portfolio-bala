"use client"

import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    style?: React.CSSProperties;
};

export default function Reveal({ children, className = "", delay = 0, style }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            // No bottom shrink: content flush against the end of a short page
            // (nothing left to scroll) must still be able to satisfy this, or
            // it stays invisible forever.
            { threshold: 0.05, rootMargin: "0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
            style={{ ...style, transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
