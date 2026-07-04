"use client";

import React, { useEffect } from "react";
import { STITCH_HTML, STITCH_ALIASES } from "@/data/stitchHtml";

interface StitchRendererProps {
  screenKey: string;
}

/**
 * Renders a Stitch-generated HTML screen directly as a full page.
 * No AdminLayout wrapping — Stitch screens already include their own
 * sidebar, header, and complete layout.
 */
export default function StitchRenderer({ screenKey }: StitchRendererProps) {
  const screen = STITCH_HTML[screenKey];

  useEffect(() => {
    if (!screen) return;
    const container = document.getElementById("stitch-screen-container");
    if (!container) return;

    const scripts = container.querySelectorAll("script");
    const spawned: HTMLScriptElement[] = [];

    scripts.forEach((old) => {
      const s = document.createElement("script");
      if (old.src) {
        s.src = old.src;
      } else {
        // Wrap in IIFE to scope variables and prevent redeclaration errors
        s.textContent = `(function(){${old.textContent}})();`;
      }
      document.body.appendChild(s);
      spawned.push(s);
    });

    return () => {
      spawned.forEach((s) => s.remove());
    };
  }, [screen]);

  if (!screen) return null;

  return (
    <div
      id="stitch-screen-container"
      className={`${screen.bodyClass} min-h-screen`}
      dangerouslySetInnerHTML={{ __html: screen.html }}
    />
  );
}

/**
 * Resolve a route path (e.g. "dashboard/analytics") to a Stitch screen key.
 * Returns the key if a direct match or valid alias exists, null otherwise.
 */
export function resolveStitchKey(path: string): string | null {
  if (STITCH_HTML[path]) return path;
  const alias = STITCH_ALIASES[path];
  if (alias && STITCH_HTML[alias]) return alias;
  return null;
}
