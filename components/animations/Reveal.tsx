"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
    duration?: number;
    className?: string; // Added className support
}

export const Reveal = ({
    children,
    width = "fit-content",
    direction = "up",
    delay = 0.2,
    duration = 0.5,
    className = ""
}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -75 : direction === "right" ? 75 : 0,
            y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                position: "relative",
                width,
                overflow: "hidden",
            }}
        >
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: "easeOut" }}
                style={{ height: "100%" }} // Ensure motion div preserves height
            >
                {children}
            </motion.div>
        </div>
    );
};
