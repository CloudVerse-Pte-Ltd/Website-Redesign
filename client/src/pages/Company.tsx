import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";

export default function Company() {
  return (
    <BaseLayout>
      <Section className="pt-32">
        <h1>Company</h1>
        <p className="text-xl text-muted-foreground mt-4">About CloudVerse.</p>
      </Section>
    </BaseLayout>
  );
}
