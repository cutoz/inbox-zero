import type { Metadata } from "next";

const PRIVACY_CONTACT = "dev@taar.ai";

export const metadata: Metadata = {
  title: "Privacy | Inbox Zero Private",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-sm leading-7">
      <h1 className="mb-6 text-3xl font-semibold">
        Inbox Zero Private: privacy and data handling
      </h1>
      <p className="mb-4">
        This notice describes the private Inbox Zero deployment at i33.taar.ltd.
        It is operated by Taar for its authorised account owner. Contact{" "}
        <a className="underline" href={`mailto:${PRIVACY_CONTACT}`}>
          {PRIVACY_CONTACT}
        </a>{" "}
        with questions, access requests, or deletion requests.
      </p>
      <h2 className="mb-2 mt-8 text-xl font-semibold">
        Data we collect and why
      </h2>
      <p>
        You sign in with Google or Microsoft. We receive account identity, email
        address, and OAuth access and refresh tokens, never your provider
        password. We use those tokens to connect your mailbox and maintain your
        session. The app can read message headers and bodies, attachments when
        needed for a feature, labels or folders, and mailbox settings. It uses
        this data to display, search, and organise mail and to apply actions you
        request. It can store preferences, rules, drafts, and action history.
      </p>
      <h2 className="mb-2 mt-8 text-xl font-semibold">
        Permissions and control
      </h2>
      <p>
        Google permissions include reading and changing mail and Gmail settings.
        The Gmail mail permission also permits composing and sending mail,
        although automated sending is disabled in this deployment. Microsoft
        permissions cover reading and changing mail and mailbox settings; its
        app registration does not include Mail.Send. You approve these
        permissions at the provider before any mailbox is connected. You can
        revoke access in your Google or Microsoft account settings at any time.
      </p>
      <h2 className="mb-2 mt-8 text-xl font-semibold">Storage and security</h2>
      <p>
        The server stores encrypted OAuth tokens, account settings, message
        metadata, and content created or saved by app features. Message bodies
        are fetched for processing and may be cached temporarily; some content
        can persist in saved drafts, rules, and related app records. Database
        backups are encrypted and kept in private object storage for seven days.
        The mailbox provider remains the source of your original messages.
        Access to this deployment is restricted to approved accounts.
      </p>
      <h2 className="mb-2 mt-8 text-xl font-semibold">
        Service providers and sharing
      </h2>
      <p>
        The app exchanges mailbox data with Google or Microsoft to provide
        requested features. Cloudflare handles traffic to the website and
        encrypted backups; Taar&apos;s server hosts the app and database. AI
        integrations and external API actions are disabled in this deployment,
        so mail content is not sent to an AI provider by this configuration. We
        do not sell mailbox data or use Google user data for advertising. Use of
        information received from Google APIs follows the{" "}
        <a
          className="underline"
          href="https://developers.google.com/terms/api-services-user-data-policy"
        >
          Google API Services User Data Policy
        </a>
        , including its Limited Use requirements.
      </p>
      <h2 className="mb-2 mt-8 text-xl font-semibold">
        Retention and deletion
      </h2>
      <p>
        App records remain until removed by the operator or requested for
        deletion. To disconnect an account or delete its app data, email{" "}
        <a className="underline" href={`mailto:${PRIVACY_CONTACT}`}>
          {PRIVACY_CONTACT}
        </a>
        . Revoking provider access stops new mailbox retrieval; contact us as
        well to remove existing app records. Encrypted backup copies age out
        after their seven-day retention period.
      </p>
    </main>
  );
}
