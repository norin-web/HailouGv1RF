import { Link, useLocation } from "react-router";
import { Mail } from "lucide-react";
import { app, guides, isSet, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Reveal from "./Reveal";
import Split from "./Split";

// Contact, Support and the legal pages skip the big download CTA above the footer.
const NO_CTA = ["/contact", "/feedback", "/support", "/privacy", "/terms"];

export const Faces = () => (
  <span className="stack">
    <span className="stack__faces" aria-hidden="true">
      {["family", "host", "tiktok", "cartoon", "glasses"].map((k) => (
        <img key={k} src={img(`/images/${k}.webp`)} alt="" width={36} height={36} loading="lazy" />
      ))}
    </span>
    <span><b>{guides.length} guides</b>7 topics, one course</span>
  </span>
);

export default function Footer() {
  const { pathname } = useLocation();
  const cta = !NO_CTA.includes(pathname.replace(/\/$/, ""));
  return (
    <footer className={`footer${cta ? "" : " footer--plain"}`}>
      {cta && (
        <div className="fcta">
          <div className="halo" aria-hidden="true"><img src={img("/images/glow-flowers.webp")} alt="" /></div>
          <Reveal><Faces /></Reveal>
          <Split as="h2" className="tagline" parts={[["Turn your ideas"], ["\n"], ["into finished films.", true]]} />
          <Reveal className="cta-row" delay={200}>
            <Btn href={app.url}>Download on the App Store</Btn>
            <Link to="/app" className="bracket">See the app</Link>
          </Reveal>
        </div>
      )}

      <div className="container">
        <div className="footer__card">
          <Link to="/" className="logo">
            <img src={img("/images/app-icon.png")} alt="" width={40} height={40} loading="lazy" />
            <span>{site.brand}</span>
          </Link>
          <a className="mailchip" href={`mailto:${site.email}`}>
            <Mail size={18} aria-hidden="true" />
            <span>{site.email}</span>
          </a>
          <nav className="flinks" aria-label="Footer">
            <Link to="/app">App</Link>
            <Link to="/about">About</Link>
            <Link to="/support">Support</Link>
            <Link to="/feedback">Feedback</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a>
          </nav>
          {isSet(site.disclaimer) && <p className="footer__legal">{site.disclaimer}</p>}
          <div className="footer__copy">
            <span>
              © {site.year} {isSet(site.operator) ? site.operator : site.brand}
            </span>
            <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
