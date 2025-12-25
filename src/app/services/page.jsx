import PageHeader from "@/components/PageHeader";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="E-Government Services"
        breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        ]}
      />

    </div>
  );
}
