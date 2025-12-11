"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import Operatives from "@/components/Operatives";

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-black font-sans">

            {/* Header Section - Awwwards Monolith Redesign */}
            <div className="h-[100dvh] relative flex flex-col items-center justify-center overflow-hidden border-b border-white/10 select-none bg-[#0a0a0a]">

                {/* Noise Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-30"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />

                {/* Top Data Bar */}
                <div className="absolute top-0 w-full p-4 md:p-8 flex justify-between items-start font-mono text-[10px] text-accent/60 uppercase tracking-widest z-40">
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            SYS.ONLINE
                        </span>
                    </div>
                    {/* Center ticker or decoration */}
                    <div className="hidden md:block w-32 h-[1px] bg-white/10 mt-2"></div>
                    <div>
                        <span>[ SECURE ]</span>
                    </div>
                </div>

                {/* Background Graphics - Subtle Depth */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Large Faint Glow */}
                    <div className="absolute w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[100px] opacity-20" />

                    {/* Architectural Lines */}
                    <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent top-1/2 transform -translate-y-1/2" />
                    <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent left-1/2 transform -translate-x-1/2" />
                </div>

                {/* Main Hero Content - The Monolith */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center mix-blend-screen">

                    {/* Line 1: BUREAU */}
                    <div className="relative leading-[0.75] tracking-tighter hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <TextReveal mode="char" trigger="mount" className="text-[18vw] md:text-[14vw] font-black uppercase text-white block">
                            BUREAU
                        </TextReveal>
                    </div>

                    {/* Middle: OF (Bridge) */}
                    <div className="relative w-full flex items-center justify-center py-2 md:py-4 overflow-hidden group">
                        <div className="w-12 md:w-32 h-[1px] bg-white/20 scale-x-50 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                        <span className="font-serif italic text-2xl md:text-5xl text-accent mx-4 md:mx-6 relative z-10 px-4">
                            of
                        </span>
                        <div className="w-12 md:w-32 h-[1px] bg-white/20 scale-x-50 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                    </div>

                    {/* Line 2: FLESH */}
                    <div className="relative leading-[0.75] tracking-tighter hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <TextReveal mode="char" trigger="mount" className="text-[18vw] md:text-[14vw] font-black uppercase text-white block">
                            FLESH.
                        </TextReveal>
                    </div>

                    {/* Editorial Description */}
                    <div className="mt-12 max-w-sm md:max-w-md text-center opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards">
                        <p className="font-mono text-[10px] md:text-xsd text-muted/60 uppercase tracking-[0.2em] leading-loose">
                            Digital Brutality <span className="text-accent mx-2">//</span> Organic Decay <br />
                        </p>
                    </div>
                </div>

                {/* Bottom Data Bar */}
                <div className="absolute bottom-0 w-full p-4 md:p-8 flex justify-between items-end font-mono text-[10px] text-muted/40 uppercase z-40">
                    <div className="flex flex-col gap-1 text-left">
                        <span>COORDS: 35.6895° N</span>
                        <span>SECTOR: 7G [LOCKED]</span>
                    </div>
                    {/* Scroll Indicator */}
                    <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex flex-col items-center animate-bounce duration-[2000ms]">
                        <span className="text-[10px] mb-2">SCROLL</span>
                        <div className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent"></div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                        <span>INITIATE_SEQUENCE</span>
                        <span>V.3.1.0</span>
                    </div>
                </div>
            </div>

            <div ref={containerRef}>

                {/* Content Column */}
                <div className="w-full p-4 md:p-12 space-y-16 md:space-y-32">

                    {/* Philosophy / Manifesto - Aggressive Type */}
                    <div className="py-12 md:py-24 max-w-[90vw] mx-auto">
                        <span className="font-mono text-xs text-accent mb-8 block">[ 001_PHILOSOPHY ]</span>
                        <TextReveal className="text-3xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.1] tracking-tight">
                            We do not design for the gallery. We design for the flesh. A raw dialogue between structure and self, noise and silence. Kæst is the armor for the modern obscure.
                        </TextReveal>
                    </div>

                    {/* Section 01 - Broken Grid Layout */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-7 relative group">
                            <div className="aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1955&auto=format&fit=crop"
                                    alt="Origin"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100" />
                            </div>
                        </div>
                        <div className="md:col-span-5 md:pl-12">
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="font-mono text-accent text-sm">[01]</span>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Origin</h2>
                            </div>
                            <p className="text-lg text-muted leading-relaxed">
                                Born from a collision of brutalist architecture and organic form. We replicate the chaos of the natural world through precision engineering.
                            </p>
                            <div className="mt-8 font-mono text-[10px] text-accent border border-accent/20 px-2 py-1 inline-block">
                                REF: BRUTAL_NATURE_01
                            </div>
                        </div>
                    </section>

                    {/* Section 02 - Inverted Layout */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-24 border-b border-white/10">
                        <div className="md:col-span-5 md:pr-12 md:text-right order-2 md:order-1">
                            <div className="flex items-baseline gap-4 mb-4 justify-end">
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Process</h2>
                                <span className="font-mono text-accent text-sm">[02]</span>
                            </div>
                            <p className="text-lg text-muted leading-relaxed">
                                Deconstruction is creation. We strip away functionality to find the aesthetic core, then rebuild it stronger. Every seam is a scar.
                            </p>
                        </div>
                        <div className="md:col-span-7 order-1 md:order-2 relative group">
                            <div className="aspect-video relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1617293851568-bac1f3af7e09?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww"
                                    alt="Process"
                                    fill
                                    className="object-cover"
                                />
                                {/* Crosshair Overlay */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-4 left-4 w-4 h-[1px] bg-white mix-blend-difference" />
                                    <div className="absolute top-4 left-4 h-4 w-[1px] bg-white mix-blend-difference" />
                                    <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-white mix-blend-difference" />
                                    <div className="absolute bottom-4 right-4 h-4 w-[1px] bg-white mix-blend-difference" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team Section */}
                    <Operatives />

                </div>
            </div>

            <Footer />
        </main>
    );
}
