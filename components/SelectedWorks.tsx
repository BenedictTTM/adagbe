"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const works = [
    {
        id: 1,
        title: "VOID WALKER",
        date: "FW 24",
        img: "https://images.unsplash.com/photo-1618232468971-54188a224417?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwZHJlc3NlcyUyMGZvciUyMHNhbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 2,
        title: "ASHES TO ASHES",
        date: "SS 25",
        img: "https://i.pinimg.com/736x/17/58/2a/17582ae8a331fe4b4fc94ace4aa24fd7.jpg",
    },
    {
        id: 3,
        title: "CHROMATIC FLESH",
        date: "FW 25",
        img: "https://images.unsplash.com/photo-1583333001978-8c57d752ce5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3NlcyUyMHdpdGhvdXQlMjBwb2VwbGV8ZW58MHx8MHx8fDA%3D",
    },
];

export default function SelectedWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="relative w-full py-40 bg-background overflow-hidden">
            {/* Section Header */}
            <div className="px-4 md:px-12 mb-20 flex justify-between items-end border-b border-white/10 pb-8 mx-4 md:mx-12">
                <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent stroke-text" style={{ WebkitTextStroke: "1px #333" }}>
                    WORKS
                </h2>
                <Link href="/collection" className="hidden md:block text-sm font-mono uppercase hover:text-accent transition-colors">
                    ( View All Collections )
                </Link>
            </div>

            <div className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {works.map((work, i) => (
                    <WorkItem key={work.id} work={work} index={i} scrollProgress={scrollYProgress} />
                ))}
            </div>
        </section>
    );
}

function WorkItem({ work, index, scrollProgress }: { work: any; index: number; scrollProgress: any }) {
    // Parallax effect diferent for each item
    const y = useTransform(scrollProgress, [0, 1], [0, index * 50]);

    return (
        <motion.div style={{ y }} className="group relative w-full aspect-[4/5] cursor-none overflow-hidden bg-white/5">
            <Link href={`/collection/${work.id}`} className="block w-full h-full">
                <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale opacity-80 group-hover:opacity-100"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-xs font-mono text-accent mb-2">{work.date}</span>
                    <h3 className="text-3xl font-bold uppercase tracking-tighter translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {work.title}
                    </h3>
                </div>
            </Link>
        </motion.div>
    );
}
