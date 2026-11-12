import { Link } from "react-router";
import { Mail } from "lucide-react";
import { course, isSet, site } from "../content/site";
import { img } from "../utils/img";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

// draft — check: the About copy is ours, not from the owner
const principles = [
  { title: "Practice first", text: "Every course step gives you one job and a place to try it, so you learn by making a clip, not by reading about one." },
  { title: "Exact prompts", text: "Example prompts you can copy and adapt, with subject, action, setting, camera, light and style spelled out." },
  { title: "Short by design", text: `Guides are a few steps long. Even the full practical course takes about ${course.minutes} minutes.` },
];

export default function About() {
  return (
    <>
      <section className="phero">
        <div className="halo" aria-hidden="true"><img src={img("/images/glow-flowers.webp")} alt="" /></div>
        <div className="container">
          <Split className="h-page" parts={[["Learn AI video"], ["\n"], ["by making one", true]]} />
          <Reveal as="p" className="lead" delay={200}>
            {site.brand} is a pocket course for creating video with AI tools such as Hailuo AI. Instead of long theory, each guide walks you to a result of your own.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <Reveal as="p" className="statement">
            Most people try an AI video tool, get a random clip and give up. We wrote guides that explain why a prompt works, <span className="dim">and give you one to start from.</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="head" style={{ alignItems: "flex-start", textAlign: "left" }}>
            <Split as="h2" className="h2" parts={[["How we teach"]]} />
          </div>
          <ul className="rows">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <Reveal className="mailcard">
            <span className="tag">{isSet(site.operator) ? `${site.brand} is made by ${site.operator}` : "Talk to the team"}</span>
            <a className="mailcard__mail" href={`mailto:${site.email}`}>{site.email}</a>
            <div className="cta-row" style={{ justifyContent: "flex-start" }}>
              <Link to="/contact" className="mailchip"><Mail size={18} aria-hidden="true" /><span>Send us a message</span></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
