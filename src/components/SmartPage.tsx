"use client";

import React from "react";
import AdminLayout from "@/components/AdminLayout";
import PageRenderer from "@/components/PageRenderer";
import StitchRenderer, { resolveStitchKey } from "@/components/StitchRenderer";

interface SmartPageProps {
  group: string;
  slug: string;
}

/**
 * Smart routing: 
 * - If a Stitch screen exists for this route → render full-page (no AdminLayout)
 * - Otherwise → AdminLayout + PageRenderer fallback
 */
export default function SmartPage({ group, slug }: SmartPageProps) {
  const path = `${group}/${slug}`;
  const stitchKey = resolveStitchKey(path);

  if (stitchKey) {
    return <StitchRenderer screenKey={stitchKey} />;
  }

  return (
    <AdminLayout>
      <PageRenderer group={group} slug={slug} />
    </AdminLayout>
  );
}
