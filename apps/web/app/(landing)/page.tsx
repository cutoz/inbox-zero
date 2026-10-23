import type { Metadata } from "next";
import Link from "next/link";
import { Testimonials } from "@/components/new-landing/sections/Testimonials";
import { Hero, HeroContent } from "@/app/(landing)/home/Hero";
import { Pricing } from "@/components/new-landing/sections/Pricing";
import { Awards } from "@/components/new-landing/sections/Awards";
import { EverythingElseSection } from "@/components/new-landing/sections/EverythingElseSection";
import { StartedInMinutes } from "@/components/new-landing/sections/StartedInMinutes";
import { BulkUnsubscribe } from "@/components/new-landing/sections/BulkUnsubscribe";
import { OrganizedInbox } from "@/components/new-landing/sections/OrganizedInbox";
import { PreWrittenDrafts } from "@/components/new-landing/sections/PreWrittenDrafts";
import { ManageFromAnywhere } from "@/components/new-landing/sections/ManageFromAnywhere";
import {
  EMAIL_CLIENT_SECTION_ID,
  EmailClient,
} from "@/components/new-landing/sections/EmailClient";
import { BasicLayout } from "@/components/layouts/BasicLayout";
import { FAQs } from "@/app/(landing)/home/FAQs";
import { FinalCTA } from "@/app/(landing)/home/FinalCTA";
import { WordReveal } from "@/components/new-landing/common/WordReveal";
import { SectionLink } from "@/components/new-landing/common/SectionLink";
import { env } from "@/env";
import { BRAND_NAME } from "@/utils/branding";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  verification: {
    google: "fgcPdlurkHfpPNM6RPD7tDIjBCTT29gzSiLiqyKnaxI",
  },
};

export default function NewLanding() {
  if (env.NEXT_PUBLIC_BYPASS_PREMIUM_CHECKS) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 leading-7">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Private self-hosted email client
        </p>
        <h1 className="mt-4 text-4xl font-semibold">{BRAND_NAME}</h1>
        <p className="mt-6 text-lg">
          {BRAND_NAME} connects an authorised Google or Microsoft mailbox to a
          private email workspace. It helps the account owner read, organise,
          search, and manage messages and mailbox settings from one place.
        </p>
        <p className="mt-4">
          This deployment is restricted to its approved accounts. Connecting a
          mailbox requires the account owner to review and approve the
          permissions on Google or Microsoft. The application never asks for the
          mailbox password.
        </p>
        <p className="mt-4">
          Mail data and account settings are processed on the operator&apos;s
          self-hosted server. AI features and automated sending are disabled in
          this deployment. Read the privacy notice for the data stored and the
          providers involved.
        </p>
        <nav className="mt-8 flex flex-wrap gap-5 underline underline-offset-4">
          <Link href="/login">Sign in</Link>
          <Link href="/privacy">Privacy and data handling</Link>
        </nav>
      </main>
    );
  }

  return (
    <BasicLayout>
      <Hero
        badge={
          <SectionLink sectionId={EMAIL_CLIENT_SECTION_ID}>
            New: Inbox Zero Mail app →
          </SectionLink>
        }
        title={
          <WordReveal
            spaceBetween="w-2 md:w-3"
            words={[
              "Meet",
              "your",
              "AI",
              "email",
              "assistant",
              "that",
              <em key="actually">actually</em>,
              "works",
            ]}
          />
        }
        subtitle={`${BRAND_NAME} organizes your inbox and calendar, drafts replies in your voice, and helps you reach inbox zero fast. Never miss an important email again.`}
      >
        <HeroContent />
      </Hero>
      <OrganizedInbox
        title={
          <>
            Automatically organized.
            <br />
            Never miss an important email again.
          </>
        }
        subtitle="Drowning in emails? Don't waste energy trying to prioritize your emails. Our AI assistant will label everything automatically."
      />
      <PreWrittenDrafts
        title="Pre-written drafts waiting in your inbox"
        subtitle="When you check your inbox, every email needing a response will have a pre-drafted reply in your tone, ready for you to send."
      />
      <ManageFromAnywhere />
      <EmailClient />
      <StartedInMinutes
        title="Get started in minutes"
        subtitle="One-click setup. Start organizing and drafting replies in minutes."
      />
      <BulkUnsubscribe />
      <EverythingElseSection />
      <Awards />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <FAQs />
    </BasicLayout>
  );
}
