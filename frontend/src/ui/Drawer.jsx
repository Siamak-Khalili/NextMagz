"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function Drawer({ open, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800 bg-opacity-30 ${
          open ? "block" : "pointer-events-none hidden"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 w-[250px] h-full transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-secondary-0 max-h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
}

export default Drawer;
