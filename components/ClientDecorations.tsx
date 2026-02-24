"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
    ssr: false,
});

const GrainOverlay = dynamic(() => import("@/components/GrainOverlay"), {
    ssr: false,
});

export default function ClientDecorations() {
    return (
        <>
            <CustomCursor />
            <GrainOverlay />
        </>
    );
}
