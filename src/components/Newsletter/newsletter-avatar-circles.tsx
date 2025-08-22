"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { cn } from "@/lib/utils";
import { beehiivService } from "@/services/beehiiv";

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
        imageUrl: "/testimonios/avatares/avatar_juan-carlos.jfif",
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
    totalPlazas?: number;
    avatarsToShow?: number;
}

const BASE_SUSCRIBERS = 13; // Número base de suscriptores

export function NewsletterAvatarCircles({
    className,
    totalPlazas = 50,
    avatarsToShow = 6,
}: NewsletterAvatarCirclesProps) {
    const [visibleAvatars] = useState(avatars.slice(0, avatarsToShow));
    const [plazasOcupadas, setPlazasOcupadas] = useState(BASE_SUSCRIBERS);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSubscriberCount = async () => {
            try {
                setIsLoading(true);
                // Obtener el conteo de nuevos suscriptores
                const newSubscribers = await beehiivService.getSubscriberCount();

                // Sumar el conteo base (13) más los nuevos suscriptores
                const totalSubscribers = BASE_SUSCRIBERS + newSubscribers;

                setPlazasOcupadas(totalSubscribers);
            } catch (error) {
                console.error("Error al obtener el conteo de suscriptores:", error);
                // En caso de error, mantenemos el valor base
                setPlazasOcupadas(BASE_SUSCRIBERS);
            } finally {
                setIsLoading(false);
            }
        };

        // Cargar inmediatamente al montar el componente
        fetchSubscriberCount();

        // También configuramos un intervalo para actualizar cada 2 minutos
        // para usuarios que mantengan la página abierta mucho tiempo
        const intervalId = setInterval(fetchSubscriberCount, 2 * 60 * 1000);

        // Limpieza al desmontar
        return () => clearInterval(intervalId);
    }, []);

    // Función para crear avatares con efecto de animación
    const avatarsWithAnimation = () => (
        <AvatarCircles
            numPeople={40}
            avatarUrls={visibleAvatars}
            className={cn("transform transition-all duration-300 hover:scale-105", className)}
        />
    );

    return (
        <div className={cn("flex flex-col items-center", className)}>
            {/* Avatares con efecto de hover */}
            {avatarsWithAnimation()}
        </div>
    );
}
