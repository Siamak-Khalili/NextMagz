"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export default function BottomSheet({
  isOpen,
  onClose,
  title = "فیلترها",
  children,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setStartY(clientY);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const diff = clientY - startY;
    if (diff > 0) {
      setCurrentTranslate(diff);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (currentTranslate > 150) {
      onClose();
    } else {
      setCurrentTranslate(0);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 transition-opacity duration-300"
          onClick={handleBackdropClick}
        />
      )}

      <div
        className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          transform: isOpen
            ? `translateY(${currentTranslate}px)`
            : "translateY(100%)",
        }}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="bg-white adfadfafaasda dark:bg-neutral-900 rounded-t-3xl shadow-2xl max-h-[90vh] overflow-hidden">
          <div
            className="flex justify-center pt-4 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <div className="w-12 h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
          </div>

          <div className="flex items-center justify-between px-6 pt-4 pb-2">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            </button>
          </div>

          <div className="px-6 pb-8 pt-2 overflow-y-auto max-h-[70vh]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
