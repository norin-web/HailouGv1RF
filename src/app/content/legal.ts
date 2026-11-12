// Privacy Policy and Terms of Use come from the owner and go here VERBATIM.
// Only markup may change: section headings become "## " lines (the page numbers
// them itself), bullets become "- " lines. Never edit the wording.
//
// Not received yet (2026-11-12) — while `body` is null the page shows a short
// "coming soon" note with the support email instead of a made-up text.

type Doc = {
  title: string;
  current: string;
  body: string | null;
  glance?: [string, string][];
  other: { to: string; label: string };
};

export const privacy: Doc = {
  title: "Privacy Policy",
  current: "privacy",
  body: null,
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms: Doc = {
  title: "Terms of Use",
  current: "terms",
  body: null,
  other: { to: "/privacy", label: "Privacy Policy" },
};
