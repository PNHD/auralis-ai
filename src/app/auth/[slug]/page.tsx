import SmartPage from "@/components/SmartPage";
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
  return <SmartPage group="auth" slug={slug} />;
}
