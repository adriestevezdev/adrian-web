"use client";

import { Lock, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { WaitlistForm } from "@/components/Waitlist/waitlist-form";

const UNLOCK_KEY = "arquitectos-ia:video-desbloqueado";

interface HeroVideoProps {
  src: string;
  poster: string;
}

function readUnlocked() {
  try {
    return window.localStorage.getItem(UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

function saveUnlocked() {
  try {
    window.localStorage.setItem(UNLOCK_KEY, "1");
  } catch {
    // Sin almacenamiento (modo privado): se volverá a pedir el email en la próxima visita
  }
}

// Vídeo bloqueado: al pulsar play se pide el email (que apunta a la lista de espera) y después se reproduce.
// Con preload="none" el vídeo no se descarga hasta que se reproduce.
export function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsUnlocked(readUnlocked());
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isModalOpen]);

  const play = () => {
    setIsPlaying(true);
    // Si el navegador bloquea la reproducción automática, quedan los controles para darle a play
    videoRef.current?.play().catch(() => undefined);
  };

  const handlePlayClick = () => {
    if (isUnlocked) play();
    else setIsModalOpen(true);
  };

  const handleUnlocked = () => {
    saveUnlocked();
    setIsUnlocked(true);
    setIsModalOpen(false);
    play();
  };

  return (
    <>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/60">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          playsInline
          controls={isPlaying}
          className="h-full w-full object-cover"
        />
        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlayClick}
            aria-label={isUnlocked ? "Reproducir el vídeo" : "Desbloquear el vídeo"}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/30 transition-colors hover:bg-black/15"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 text-black" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            {!isUnlocked && (
              <span className="flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
                <Lock className="h-3 w-3" />
                Únete a la lista para verlo
              </span>
            )}
          </button>
        )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="desbloquear-titulo"
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0d0c0b] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Cerrar"
              className="absolute right-4 top-4 text-white/50 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8C98F]/15 text-[#E8C98F]">
              <Lock className="h-5 w-5" />
            </span>
            <h2 id="desbloquear-titulo" className="mt-4 text-2xl font-bold text-white">
              Muy pronto: masterclass gratuita
            </h2>
            <p className="mt-2 mb-6 text-white/65">
              Estoy preparando una masterclass gratuita para construir tu producto con agentes de IA. Únete a la lista de espera y
              te la envío por email en cuanto esté lista. Mientras tanto, te desbloqueo este vídeo al momento.
            </p>
            <WaitlistForm stacked buttonLabel="Unirme y ver el vídeo" onSuccess={handleUnlocked} />
          </div>
        </div>
      )}
    </>
  );
}
