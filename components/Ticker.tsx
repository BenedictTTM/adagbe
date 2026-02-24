"use client";

export default function Ticker() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-40 bg-background/80 backdrop-blur-sm border-t border-white/10 overflow-hidden py-2 pointer-events-none mix-blend-difference text-white">
            <div className="flex whitespace-nowrap overflow-hidden">
                <div className="flex gap-16 animate-marquee">
                    {Array(4).fill(null).map((_, i) => (
                        <div key={i} className="flex gap-16 items-center text-xs font-mono uppercase tracking-widest text-[#E8E9EB]/70">
                            <span>KÆST Ventures ©2024</span>
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span>System Status: Optimal</span>
                            <span>[ lat: 51.5074° N, long: 0.1278° W ]</span>
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span>Collection 003: &quot;Raw Structure&quot;</span>
                            <span>Loading Assets...</span>
                        </div>
                    ))}
                </div>
                <div className="flex gap-16 animate-marquee" aria-hidden="true">
                    {Array(4).fill(null).map((_, i) => (
                        <div key={i} className="flex gap-16 items-center text-xs font-mono uppercase tracking-widest text-[#E8E9EB]/70">
                            <span>KÆST Ventures ©2024</span>
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span>System Status: Optimal</span>
                            <span>[ lat: 51.5074° N, long: 0.1278° W ]</span>
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span>Collection 003: &quot;Raw Structure&quot;</span>
                            <span>Loading Assets...</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
