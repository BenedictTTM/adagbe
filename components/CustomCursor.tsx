"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, [role='button']";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        let hideTimeout: NodeJS.Timeout;

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);

            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => setIsVisible(false), 800);
        };

        const handleMouseDown = () => setIsHovered(true);
        const handleMouseUp = () => setIsHovered(false);

        // Event delegation instead of MutationObserver — much cheaper
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as Element;
            if (target?.closest?.(INTERACTIVE_SELECTOR)) {
                setIsHovered(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as Element;
            if (target?.closest?.(INTERACTIVE_SELECTOR)) {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.body.addEventListener("mouseover", handleMouseOver, { passive: true });
        document.body.addEventListener("mouseout", handleMouseOut, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.removeEventListener("mouseover", handleMouseOver);
            document.body.removeEventListener("mouseout", handleMouseOut);
            clearTimeout(hideTimeout);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className={cn(
                "fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference",
                !isVisible && "opacity-0"
            )}
            style={{
                translateX: cursorX,
                translateY: cursorY,
                x: "-50%",
                y: "-50%",
            }}
            animate={{
                scale: isHovered ? 2.5 : 1,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                scale: { duration: 0.2 },
                opacity: { duration: 0.2 },
            }}
        >
            {isHovered && (
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-md" />
            )}
        </motion.div>
    );
}
