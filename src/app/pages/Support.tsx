import { useState } from "react";
import { CircleHelp, Flag } from "lucide-react";
import { faq, site } from "../content/site";
import { img } from "../utils/img";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

/** Questions as the app's topic tiles; the answer opens in a "Your job"-style box. */
export default function Support() {
  const [i, setI] = useState(0);
  const item = faq[i];

  return (
    <>
      <section className="phero">
        <div className="halo" aria-hidden="true"><img src={img("/images/glow-logo.webp")} alt="" /></div>
        <div className="container">
          <Split className="h-page" parts={[["How can"], ["\n"], ["we help?", true]]} />
          <Reveal as="p" className="lead" delay={200}>
            Pick a question to see the answer. Didn’t find yours? Write to us, the address is below.
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(56px, 7vw, 96px)" }}>
        <div className="container">
          <div className="ask">
            <Reveal className="ask__list" role="tablist" aria-label="Questions">
              {faq.map((f, k) => (
                <button
                  key={f.q}
                  role="tab"
                  id={`q-${k}`}
                  aria-selected={k === i}
                  aria-controls="answer"
                  className={`chiptile${k === i ? " is-on" : ""}`}
                  onClick={() => {
                    setI(k);
                    // on narrow screens the answer sits below the list — bring it into view
                    if (innerWidth < 900) document.getElementById("answer")?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  <CircleHelp aria-hidden="true" />
                  {f.q}
                </button>
              ))}
            </Reveal>

            <Reveal className="jobbox" id="answer" role="tabpanel" aria-labelledby={`q-${i}`} delay={120}>
              <span className="jobbox__head"><Flag aria-hidden="true" />Answer</span>
              <h2 className="ask__q">{item.q}</h2>
              <p>{item.a}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <Reveal className="mailcard">
            <span className="tag">Still stuck? Email support</span>
            <a className="mailcard__mail" href={`mailto:${site.email}?subject=${encodeURIComponent(`${site.brand} support`)}`}>{site.email}</a>
            <p className="muted">Tell us your iPhone model and which guide or step you were on.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
