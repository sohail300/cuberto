import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface IProjectCard {
    videoSrc: string;
    imageSrc: string;
    name: string;
    description: string;
    setCursorState?: (state: { isHoveringOnVideo: boolean; isVideoPlaying: boolean }) => void;
}

const ProjectCard = ({
    videoSrc,
    imageSrc,
    name,
    description,
    setCursorState
}: IProjectCard) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Track mouse movement over the card
    const [isMouseMoving, setIsMouseMoving] = useState<boolean>(false);
    const mouseTimer = useRef<NodeJS.Timeout | null>(null);

    const startMouseMovementTimer = () => {
        // Clear any existing timer
        if (mouseTimer.current) {
            clearTimeout(mouseTimer.current);
        }

        // Set mouse as moving
        setIsMouseMoving(true);

        // Set a timer to mark mouse as stopped after 100ms of no movement
        mouseTimer.current = setTimeout(() => {
            setIsMouseMoving(false);
        }, 100);
    };

    const handleMouseMove = () => {
        startMouseMovementTimer();
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        startMouseMovementTimer();
        if (setCursorState) {
            setCursorState({ isHoveringOnVideo: true, isVideoPlaying: true });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (mouseTimer.current) {
            clearTimeout(mouseTimer.current);
        }
        if (setCursorState) {
            setCursorState({ isHoveringOnVideo: false, isVideoPlaying: false });
        }
    };

    // Effect for managing video playback based on hover state
    useEffect(() => {
        if (isHovered && videoRef.current) {
            videoRef.current.play().catch(e => console.error("Video play error:", e));
        }
    }, [isHovered]);

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (mouseTimer.current) {
                clearTimeout(mouseTimer.current);
            }
        };
    }, []);

    return (
        <div className="h-8/10 flex flex-col gap-6 md:gap-6">
            <div
                ref={containerRef}
                className="relative aspect-square md:aspect-square h-full w-full overflow-hidden rounded-4xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                <motion.img
                    src={imageSrc}
                    className="absolute inset-0 h-full w-full object-cover rounded-4xl"
                    style={{ pointerEvents: "none" }}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered && (isMouseMoving || !isMouseMoving) ? 0 : 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover rounded-4xl"
                    style={{ pointerEvents: "none" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered && (isMouseMoving || !isMouseMoving) ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>
            <h1 className="font-light-regular text-white text-2xl">
                <span className="font-regular">{name}</span> - {description}
            </h1>
        </div>
    );
};

export default ProjectCard;