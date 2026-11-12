import { useState, type FormEvent } from "react";
import { site } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const kinds = ["Question", "Feedback", "Problem", "Billing"];

/**
 * No backend on a static site: the form checks itself and opens the visitor's
 * mail app with everything filled in. The message box looks like the app's
 * prompt card; the topic picker uses the app's topic tiles.
 */
export default function Contact() {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [kind, setKind] = useState(kinds[0]);
  const [err, setErr] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const check = () => {
    const e: Record<string, string> = {};
    if (!v.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "That email doesn’t look right. Check for typos.";
    if (!v.message.trim()) e.message = "Please write a message.";
    return e;
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next = check();
    setErr(next);
    const first = Object.keys(next)[0];
    if (first) return document.getElementById(`f-${first}`)?.focus();
    const body = `Name: ${v.name}\nEmail: ${v.email}\nTopic: ${kind}\n\n${v.message}`;
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${site.brand} — ${kind}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <section className="phero">
        <div className="halo" aria-hidden="true"><img src={img("/images/glow-tiktok.webp")} alt="" /></div>
        <div className="container">
          <Split className="h-page" parts={[["Write to us"]]} />
          <Reveal as="p" className="lead" delay={200}>
            Questions, ideas for a new guide, a step that didn’t work: we read every message.
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(56px, 7vw, 96px)" }}>
        <div className="container">
          <div className="contact">
            <Reveal className="mailcard">
              <span className="tag">Email</span>
              <a className="mailcard__mail" href={`mailto:${site.email}`}>{site.email}</a>
              <p className="muted">You can also open Settings → Contact Us in the app.</p>
            </Reveal>

            <Reveal as="form" className="form" onSubmit={submit} noValidate delay={120}>
              <div className="row2">
                <div className="field">
                  <label htmlFor="f-name">Name</label>
                  <input id="f-name" autoComplete="name" value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="f-email">Email <span aria-hidden="true">*</span></label>
                  <input
                    id="f-email"
                    type="email"
                    autoComplete="email"
                    value={v.email}
                    aria-invalid={!!err.email}
                    aria-describedby={err.email ? "f-email-err" : undefined}
                    onChange={(e) => setV({ ...v, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                  {err.email && <span className="err" id="f-email-err" role="alert">{err.email}</span>}
                </div>
              </div>

              <div className="field" role="radiogroup" aria-labelledby="f-kind">
                <span id="f-kind">Topic</span>
                <div className="topicpick">
                  {kinds.map((k) => (
                    <button type="button" key={k} role="radio" aria-checked={kind === k} className={`chiptile${kind === k ? " is-on" : ""}`} onClick={() => setKind(k)}>
                      {k}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="f-message">Message <span aria-hidden="true">*</span></label>
                <div className="prompt">
                  <div className="prompt__head" aria-hidden="true"><span>Your message</span><span>{v.message.length}</span></div>
                  <textarea
                    id="f-message"
                    value={v.message}
                    aria-invalid={!!err.message}
                    aria-describedby={err.message ? "f-message-err" : undefined}
                    onChange={(e) => setV({ ...v, message: e.target.value })}
                    placeholder="Which guide or step is it about? What happened?"
                  />
                </div>
                {err.message && <span className="err" id="f-message-err" role="alert">{err.message}</span>}
              </div>

              <div className="form__send">
                <Btn type="submit">Send message</Btn>
                <span className="note">Opens your mail app</span>
              </div>
              {sent && <p className="ok" role="status">Your mail app should open with the message ready. If it didn’t, write to {site.email}.</p>}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
