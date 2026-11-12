import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Check, Cpu, Film, Image, LayoutGrid, Link2, Palette, Settings2, TrendingUp, type LucideIcon } from "lucide-react";
import { app, course, features, guides, site, topics, type Topic } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { Faces } from "../components/Footer";

// same icons as the topic tiles on the app's main screen
const icons: Record<Topic | "All", LucideIcon> = {
  All: LayoutGrid,
  "Photo Animation": Image,
  "Marketing & Ads": TrendingUp,
  Storytelling: Film,
  "Prompt Engineering": Settings2,
  "Social Media": Link2,
  "Creative Effects": Palette,
  "AI Tools & Tech": Cpu,
};

const FIRST = 9;

export const Checks = ({ items, accent }: { items: string[]; accent?: boolean }) => (
  <ul className={`checks${accent ? " checks--accent" : ""}`}>
    {items.map((c) => (
      <li key={c}><Check size={18} strokeWidth={2.4} aria-hidden="true" />{c}</li>
    ))}
  </ul>
);

export function GuideCard({ g }: { g: (typeof guides)[number] }) {
  return (
    <article className="gcard">
      <img src={img(`/images/${g.img}.webp`)} alt="" width={360} height={360} loading="lazy" />
      <div className="gcard__body">
        <span className="topic">{g.topic}</span>
        <h3>{g.title}</h3>
        <p>{g.text}</p>
      </div>
    </article>
  );
}

function Library() {
  const [topic, setTopic] = useState<Topic | "All">("All");
  const [all, setAll] = useState(false);
  const list = useMemo(() => guides.filter((g) => topic === "All" || g.topic === topic), [topic]);
  const shown = topic === "All" && !all ? list.slice(0, FIRST) : list;

  return (
    <section className="section" id="guides">
      <div className="container">
        <div className="head">
          <div className="halo" aria-hidden="true"><img src={img("/images/glow-tiktok.webp")} alt="" /></div>
          <Reveal><Faces /></Reveal>
          <Split as="h2" className="h2" parts={[["Pick a guide"], ["\n"], ["and make it today", true]]} />
        </div>

        <Reveal className="chips" role="group" aria-label="Filter guides by topic">
          {(["All", ...topics] as const).map((t) => {
            const Icon = icons[t];
            return (
              <button key={t} className={`chiptile${topic === t ? " is-on" : ""}`} aria-pressed={topic === t} onClick={() => setTopic(t)}>
                <Icon aria-hidden="true" />
                {t}
              </button>
            );
          })}
        </Reveal>

        <div className="guides" aria-live="polite">
          {shown.map((g) => <GuideCard key={g.title} g={g} />)}
        </div>

        {topic === "All" && !all && (
          <div className="guides__more">
            <Btn variant="dark" onClick={() => setAll(true)}>Show all {guides.length} guides</Btn>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* S01 Hero */}
      <section className="hero">
        <div className="halo halo--hero" aria-hidden="true"><img src={img("/images/glow-family.webp")} alt="" /></div>
        <Reveal as="span" className="pill">
          <img src={img("/images/app-icon.png")} alt="" width={22} height={22} />
          AI video guides for iPhone
        </Reveal>
        <Split className="h-hero" parts={[["Master AI Video,"], ["\n"], ["Step by Step", true]]} />
        <div className="hero__stage">
          <img
            className="hero__phone"
            src={img("/images/phone-home.webp")}
            alt={`${site.brand} main screen: the practical course card, topics and guides`}
            width={900}
            height={1931}
          />
          <img className="hero__icon" src={img("/images/app-icon.png")} alt="" width={132} height={132} />
        </div>
        <Split as="p" className="tagline hero__tagline" parts={[["Ready-made prompts and tips."], ["\n"], ["Practical AI workflows, fast.", true]]} />
        <Reveal className="hero__cta" delay={150}>
          <div className="cta-row">
            <Btn href={app.url}>Download on the App Store</Btn>
            <a href="#guides" className="bracket">See the guides</a>
          </div>
          <span className="note">Free to download on the App Store</span>
        </Reveal>
      </section>

      {/* S02 Features */}
      <section className="section" id="features">
        <div className="container">
          <div className="head">
            <div className="halo" aria-hidden="true"><img src={img("/images/glow-cartoon.webp")} alt="" /></div>
            <Reveal as="span" className="pill">Features</Reveal>
            <Split as="h2" className="h2" parts={[["Learn AI video"], ["\n"], ["by actually making it", true]]} />
          </div>

          <div className="fcards">
            {features.map((f, i) => (
              <Reveal key={f.title} className={`fcard card${i % 2 ? " fcard--flip" : ""}`}>
                <div className="fcard__text">
                  <span className={`tag${i === 0 ? " tag--accent" : ""}`}>{f.tag}</span>
                  <h3 className="h3">{f.title}</h3>
                  <p>{f.text}</p>
                  <Checks items={f.checks} accent={i === 0} />
                </div>
                <div className="fcard__media">
                  {f.card ? (
                    <div className="practice">
                      <img src={img(`/images/${f.card}.webp`)} alt="Practice block from a course step: Generate Your Master Reference Image" width={900} height={1461} loading="lazy" />
                    </div>
                  ) : (
                    <img className="fcard__phone" src={img(`/images/${f.phone}.webp`)} alt={`${f.tag} screen in ${site.brand}`} width={900} height={1931} loading="lazy" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* S03 Guide library */}
      <Library />

      {/* S04 What's inside */}
      <section className="section" id="inside">
        <div className="container">
          <div className="head">
            <div className="halo" aria-hidden="true"><img src={img("/images/glow-logo.webp")} alt="" /></div>
            <Reveal as="span" className="pill">Inside the app</Reveal>
            <Split as="h2" className="h2" parts={[["Short guides"], ["\n"], ["and one full course", true]]} />
          </div>

          <div className="plans">
            <Reveal className="plan">
              <div className="plan__top">
                <span className="tag">Guide library</span>
                <b className="plan__n">{guides.length}<small>guides</small></b>
                <p>Single-result guides across seven topics. Each shows its steps and time before you start.</p>
                <Btn variant="dark" href="#guides">Browse the guides</Btn>
              </div>
              <Checks items={topics} />
            </Reveal>

            <Reveal className="plan plan--accent" delay={120}>
              <div className="plan__top">
                <span className="tag tag--accent">Practical course</span>
                <b className="plan__n">{course.steps}<small>steps · about {course.minutes} min</small></b>
                <p>{course.text}</p>
                <Btn href={app.url}>Start on the App Store</Btn>
              </div>
              <Checks items={course.covers} accent />
            </Reveal>
          </div>
          <Reveal className="center" style={{ marginTop: 28 }}>
            <Link to="/support" className="bracket">Read the FAQ</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
