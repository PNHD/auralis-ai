import AdminLayout from "@/components/AdminLayout";
import PageRenderer from "@/components/PageRenderer";
import { ALL_PAGES } from "@/data/pagesDb";

export function generateStaticParams() {
  return ALL_PAGES
    .filter((p) => p.group === "hr")
    .map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return (
    <AdminLayout>
      <PageRenderer group="hr" slug={slug} />
    </AdminLayout>
  );
}
