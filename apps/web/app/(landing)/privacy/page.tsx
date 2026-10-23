import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Inbox Zero Private",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 text-sm leading-7">
      <h1 className="mb-6 text-3xl font-semibold">Inbox Zero Private: data handling</h1>
      <p className="mb-4">
        This is a private, self-hosted email application for its authorised
        account owner. For questions or a request to disconnect an account,
        use the support email shown on the provider consent screen.
      </p>
      <h2 className="mb-2 mt-8 text-xl font-semibold">Access to mail</h2>
      <p>
        You sign in through Google or Microsoft. The application receives OAuth
        tokens, not your provider password. Its requested permissions can read
        and modify mail and mailbox settings. Google&apos;s Gmail permission can
        also compose and send mail. Connecting an account requires your consent
        at the provider.
      </p>
      <h2 className="mb-2 mt-8 text-xl font-semibold">Stored data</h2>
      <p>
        The server stores encrypted provider tokens, account configuration,
        message metadata, and content you create or generate in the app, such
        as drafts and rules. It may temporarily cache message content while
        processing mail. The provider remains the source of your mailbox.
        Some email content may be stored in the app database when you use
        features that save it. The server is hosted by the deployment operator.
      </p>
      <h2 className="mb-2 mt-8 text-xl font-semibold">Sharing and control</h2>
      <p>
        The application exchanges data with Google or Microsoft to provide
        the connected mailbox. Optional AI integrations can send selected mail
        content to their provider if enabled. You can revoke the connection
        from your Google or Microsoft account settings and request deletion of
        data held by this deployment through the contact above.
      </p>
    </main>
  );
}
