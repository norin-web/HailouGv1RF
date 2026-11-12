// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Facts come from the app's own screens (Figma "Hailou-Guides-v1"). Values marked
// PLACEHOLDER wait for the owner's documents or the App Store release — anything
// still PLACEHOLDER is hidden on the page instead of being shown.

export const PLACEHOLDER = "PLACEHOLDER";
export const isSet = (v: string) => !!v && v !== PLACEHOLDER;

export const site = {
  brand: "Hailou Guides",
  email: "mijacic@duomagnet.store",
  year: new Date().getFullYear(),
  // operator and trademark wording come from the Privacy Policy / Terms (not received yet)
  operator: PLACEHOLDER,
  disclaimer: PLACEHOLDER,
};

export const app = {
  id: "6810614815",
  url: "https://apps.apple.com/app/id6810614815",
  // Not on the App Store yet (iTunes lookup returns 0 results, 2026-11-12).
  // Refresh from https://itunes.apple.com/lookup?id=6810614815 after release.
  minIOS: PLACEHOLDER,
  category: PLACEHOLDER,
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export type Topic =
  | "Photo Animation"
  | "Marketing & Ads"
  | "Storytelling"
  | "Prompt Engineering"
  | "Social Media"
  | "Creative Effects"
  | "AI Tools & Tech";

export const topics: Topic[] = [
  "Photo Animation",
  "Marketing & Ads",
  "Storytelling",
  "Prompt Engineering",
  "Social Media",
  "Creative Effects",
  "AI Tools & Tech",
];

// The 21 guide cards exactly as they read on the app's main screen.
export const guides: { img: string; topic: Topic; title: string; text: string }[] = [
  { img: "family", topic: "Photo Animation", title: "Bring a Family Photo to Life", text: "Make old photos breathe, blink, and smile with AI animation" },
  { img: "embrace", topic: "Photo Animation", title: "Two Photos — One Embrace", text: "Turn two separate photos into one video where people hug" },
  { img: "statue", topic: "Photo Animation", title: "Animate Objects, Not Just People", text: "Make statues turn, flowers bloom, and clock hands move" },
  { img: "sneaker", topic: "Marketing & Ads", title: "Smooth 360° Spin from a Single Photo", text: "Create a smooth product turntable from a single photo" },
  { img: "bottle", topic: "Marketing & Ads", title: "Create a Professional Ad with Zero Budget", text: "Create a professional ad for free — from idea to final cut" },
  { img: "ugc", topic: "Marketing & Ads", title: "UGC Ads Without Filming", text: "Make user-style ad content with an AI host and handheld energy" },
  { img: "host", topic: "Storytelling", title: "One Host for Every Episode", text: "Create a consistent AI host using Subject Reference across videos" },
  { img: "boats", topic: "Storytelling", title: "Stitch Clips into a Story", text: "Connect short 6-second clips into a seamless 20-second narrative" },
  { img: "mood", topic: "Storytelling", title: "Set the Mood Through Style", text: "Same script, different emotion — change palette, contrast, and pacing" },
  { img: "dog", topic: "Prompt Engineering", title: "The Perfect 6-Part Prompt", text: "Subject, action, setting, camera, light, style — the universal formula" },
  { img: "city", topic: "Prompt Engineering", title: "Control Camera via Prompt", text: "Pan, tilt, push-in, pull-out, orbit — full command reference" },
  { img: "glasses", topic: "Prompt Engineering", title: "Photorealism in 4 Vocabularies", text: "Lens, light, texture, imperfection — keys to realistic AI video" },
  { img: "tiktok", topic: "Social Media", title: "Vertical Video for TikTok", text: "Quick hooks, silent-friendly format, and seamless loops" },
  { img: "insta", topic: "Social Media", title: "Infinite Loop for Instagram", text: "Create a never-ending video — perfect for Reels and Stories" },
  { img: "logo", topic: "Social Media", title: "Logo Animation in Seconds", text: "Bring your logo to life with motion, light, and transitions" },
  { img: "ash", topic: "Creative Effects", title: "Ash in the Wind Dissolve", text: "Subject crumbles to ash — angle, particle physics, and wind direction" },
  { img: "cartoon", topic: "Creative Effects", title: "Turn Yourself into an Animated Character", text: "Turn your real photo into a cartoon character that moves" },
  { img: "apple", topic: "Creative Effects", title: "Glass Fruit ASMR Video", text: "Hyperrealistic ASMR clips — no camera needed, pure visual triggers" },
  { img: "faces", topic: "AI Tools & Tech", title: "How to Fix Drifting Faces in Your AI Video", text: "Step-by-step fix for faces that change mid-clip — simple to advanced" },
  { img: "blurry", topic: "AI Tools & Tech", title: "Why Your Video Is Blurry", text: "Add 4K resolution, sharp focus, and proper export settings" },
  { img: "flowers", topic: "AI Tools & Tech", title: "Image-to-Video Explained", text: "How I2V works — give AI a photo, describe motion, get a living clip" },
];

// Featured course card on the main screen + its preview screen (8 Steps · 45 min).
export const course = {
  title: "A Full Practical Course in Hailuo AI Video",
  text: "Create a complete 3-scene AI video from scratch. Ready-made prompts, pro tips, lighting rules, and hands-on practice at every step.",
  steps: 8,
  minutes: 45,
  // what the step screens cover, in order (from the course's step texts)
  covers: ["A three-act script", "A master reference image", "One consistent main character", "Camera and lighting control", "Review and final assembly"],
};

export const features = [
  {
    tag: "Practical course",
    title: "A full course, from script to final cut",
    text: course.text,
    checks: [`${course.steps} steps, about ${course.minutes} minutes`, "One 3-scene video by the end", "Practice inside every step"],
    phone: "phone-course",
  },
  {
    tag: "Step by step",
    title: "Every step starts with your job",
    text: "Each step opens with one clear task, then the theory behind it, pro tips and the key principle to remember — with a progress bar across the whole course.",
    checks: ["“Your job” block at the top", "Pro tips and key principles", "Progress across all 8 steps"],
    phone: "phone-step",
  },
  {
    tag: "Guide library",
    title: "21 short guides, seven topics",
    text: "Photo animation, ads, storytelling, prompts, social video, creative effects and AI tools. Each guide shows its steps and time before you start.",
    checks: ["Filter by topic on the main screen", "Steps and minutes on every guide", "Completed badge when you finish"],
    phone: "phone-guide",
  },
  {
    tag: "Practice",
    title: "Copy the prompt, try it on the spot",
    text: "Example prompts sit in their own card with a copy button, and practice blocks inside the course let you generate your result right in the app.",
    checks: ["Example prompts you can copy", "Practice blocks in the course", "Completed badge on every guide"],
    // shown flat: the practice block from a course step, not a whole screen
    card: "practice-card",
  },
] as { tag: string; title: string; text: string; checks: string[]; phone?: string; card?: string }[];

export const stats = [
  { n: "21", label: "guides", text: "Short, single-result guides." },
  { n: "7", label: "topics", text: "From photo animation to AI tools." },
  { n: "8", label: "course steps", text: "One practical course, start to finish." },
  { n: "45", label: "minutes", text: "Length of the practical course." },
];

export const steps = [
  { title: "Get the app", text: "Download Hailou Guides from the App Store." },
  { title: "Pick a guide", text: "Choose a topic or start the practical course. Each guide shows its steps and time." },
  { title: "Make the video", text: "Follow the steps, copy the example prompts and practice right in the app." },
];

export const specs: [string, string][] = [
  ["Platform", "iPhone"],
  ["Compatibility", `iOS ${app.minIOS} or later`],
  ["Category", app.category],
  ["Content", "21 guides · 7 topics · 1 practical course"],
  ["Practical course", `${course.steps} steps · about ${course.minutes} min`],
  ["Access", "Subscription inside the app, billed by Apple"],
  ["Language", "English"],
  ["Developer", site.operator],
].filter(([, v]) => !v.includes(PLACEHOLDER)) as [string, string][];

export const faq = [
  { q: "What's inside the app?", a: "21 short guides in seven topics — Photo Animation, Marketing & Ads, Storytelling, Prompt Engineering, Social Media, Creative Effects and AI Tools & Tech — plus a practical course that takes you from a script to a finished 3-scene AI video." },
  { q: "How do I start a guide?", a: "On the main screen pick a topic, or stay on All, and tap a guide. Guide Preview shows how many steps it has and how long it takes. Tap Start Guide to begin." },
  { q: "What is the practical course?", a: `The card at the top of the main screen. It has ${course.steps} steps and takes about ${course.minutes} minutes: you write a three-act script, create a master reference image and a consistent main character, control camera and lighting, then review your clips and assemble the story.` },
  { q: "How do I use the example prompts?", a: "Example prompts sit inside the steps in their own card. Tap the copy icon on the card and paste the prompt into your video tool, then adjust it to your idea." },
  { q: "How is my progress tracked?", a: "Every guide shows Completed or Uncompleted, and the main screen counts how many of the 21 guides you've finished. The course shows a progress bar across its 8 steps." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are billed through your Apple Account. Manage or cancel them in your iPhone's Settings → your name → Subscriptions. Deleting the app doesn't cancel an active subscription." },
  { q: "How do I restore a purchase?", a: "Open the subscription screen and tap Restore. Use the same Apple Account the purchase was made with. Refunds and billing are handled by Apple." },
  { q: "How do I contact you?", a: "Open Settings → Contact Us in the app, or write to us at the email below. Settings also has Support, Privacy Policy and Terms of Use." },
];
