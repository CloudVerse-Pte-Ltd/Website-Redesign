import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function Solutions() {
  return (
    <BaseLayout>
      <Section className="pt-32">
        <h1>Solutions</h1>
        <p className="text-xl text-muted-foreground mt-4">Solutions by persona.</p>
      </Section>
    </BaseLayout>
  );
}
