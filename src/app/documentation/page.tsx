import AdminLayout from "@/components/AdminLayout";
import PageRenderer from "@/components/PageRenderer";

export default function Page() {
  return (
    <AdminLayout>
      <PageRenderer group="docs" slug="documentation" />
    </AdminLayout>
  );
}
