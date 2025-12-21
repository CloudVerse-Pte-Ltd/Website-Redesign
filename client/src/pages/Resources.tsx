import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";

export default function Resources() {
  return (
    <BaseLayout>
      <Section className="pt-32">
        <h1>Resources</h1>
        <p className="text-xl text-muted-foreground mt-4">Blog and Guides.</p>
      </Section>
    </BaseLayout>
  );
}
