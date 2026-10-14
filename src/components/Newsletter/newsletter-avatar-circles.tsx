"use client";

import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { cn } from "@/lib/utils";

// Avatares reales de testimonios
const avatars = [
    {
        imageUrl: "/testimonios/avatares/avatar_alfonso-valcarcel.jpg",
        profileUrl: "#",
    },
    {
        imageUrl: "/testimonios/avatares/avatar_cesar-salinas.jpg",
        profileUrl: "#",
    },
    {
        imageUrl: "/testimonios/avatares/avatar_juan-carlos.jpg",
        profileUrl: "#",
    },
    {
        imageUrl: "/testimonios/avatares/avatar_lucas-noailles.jpg",
        profileUrl: "#",
    },
    {
        imageUrl: "/testimonios/avatares/avatar_manel-hernandez.jpg",
        profileUrl: "#",
    },
    {
        imageUrl: "/testimonios/avatares/avatar_marcos-valverde.jpg",
        profileUrl: "#",
    },
];

interface NewsletterAvatarCirclesProps {
    className?: string;
    numPeople?: number;
    avatarsToShow?: number;
}

export function NewsletterAvatarCircles({
    className,
    numPeople = 400,
    avatarsToShow = 6,
}: NewsletterAvatarCirclesProps) {
    return (
        <div className={cn("flex flex-col items-center", className)}>
            <AvatarCircles
                numPeople={numPeople}
                avatarUrls={avatars.slice(0, avatarsToShow)}
                className="transform transition-all duration-300 hover:scale-105"
            />
        </div>
    );
}
