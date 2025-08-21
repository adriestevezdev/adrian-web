"use client";

import { ReactNode } from "react";

interface StickyBannerProps {
  message: string | ReactNode;
  isVisible?: boolean;
  className?: string;
}

export function StickyBanner({ 
  message, 
  isVisible = true, 
  className = "" 
}: StickyBannerProps) {
  if (!isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm z-50 ${className}`}>
      {message}
    </div>
  );
}