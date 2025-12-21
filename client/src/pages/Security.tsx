import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";

export default function Security() {
  return (
    <BaseLayout>
      <Section className="pt-32">
        <h1>Security</h1>
        <p className="text-xl text-muted-foreground mt-4">Enterprise-grade security and compliance.</p>
      </Section>
    </BaseLayout>
  );
}
