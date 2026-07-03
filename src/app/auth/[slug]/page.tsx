import PageRenderer from "@/components/PageRenderer";
import { ALL_PAGES } from "@/data/pagesDb";

export function generateStaticParams() {
  return ALL_PAGES
    .filter((p) => p.group === "auth")
    .map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <PageRenderer group="auth" slug={slug} />
    </div>
  );
}
