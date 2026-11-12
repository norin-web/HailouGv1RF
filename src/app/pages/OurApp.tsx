import { app, guides, site, specs, steps, topics } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const screens = [
  { src: "phone-home", cap: "Main screen" },
  { src: "phone-course", cap: "Practical course" },
  { src: "phone-step", cap: "A course step" },
  { src: "phone-guide", cap: "Guide preview" },
];

export default function OurApp() {
  return (
    <>
      <section className="phero">
        <div className="halo" aria-hidden="true"><img src={img("/images/glow-cartoon.webp")} alt="" /></div>
        <div className="container">
          <Split className="h-page" parts={[["Guides that end"], ["\n"], ["in a finished video", true]]} />
          <Reveal as="p" className="lead" delay={200}>
            {site.brand} puts short AI video guides, example prompts and a full practical course on your iPhone. Every guide shows its steps and time before you start.
          </Reveal>
          <Reveal delay={300}><Btn href={app.url}>Download on the App Store</Btn></Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(64px, 8vw, 112px)" }}>
        <div className="container">
          <div className="screens">
            {screens.map((s, i) => (
              <Reveal as="figure" key={s.src} delay={i * 80}>
                <img src={img(`/images/${s.src}.webp`)} alt={`${s.cap} in ${site.brand}`} width={900} height={1931} loading="lazy" />
                <figcaption>{s.cap}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head">
            <Split as="h2" className="h2" parts={[["How to start"]]} />
          </div>
          <ol className="track">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100}>
                <span className="track__n" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head">
            <Split as="h2" className="h2" parts={[["Seven topics"], ["\n"], ["three guides in each", true]]} />
          </div>
          <Reveal as="ul" className="topics" style={{ justifyContent: "center" }}>
            {topics.map((t) => (
              <li key={t}>
                {t}
                <small>{guides.filter((g) => g.topic === t).length} guides</small>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="head">
            <Split as="h2" className="h2" parts={[["Details"]]} />
          </div>
          <Reveal as="dl" className="specs">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
