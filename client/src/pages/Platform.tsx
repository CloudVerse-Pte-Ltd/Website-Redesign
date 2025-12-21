import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function Platform() {
  return (
    <BaseLayout>
      <Section className="pt-32">
        <h1>Platform Overview</h1>
        <p className="text-xl text-muted-foreground mt-4">This page is under construction.</p>
        <div className="mt-8">
           <Button>Coming Soon</Button>
        </div>
      </Section>
    </BaseLayout>
  );
}
