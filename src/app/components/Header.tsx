import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { nav, app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

/** Floating pill header — always on screen (sticky, never hides on scroll). */
export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    // lock scrolling on <html>, not <body>, so the fixed header stays put
    document.documentElement.classList.toggle("lock", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="header">
        <div className="header__bar">
          <Link to="/" className="logo" aria-label={`${site.brand} home`}>
            <img src={img("/images/app-icon.png")} alt="" width={30} height={30} />
            <span>{site.brand}</span>
          </Link>
          <nav className="header__nav" aria-label="Main">
            <NavLink to="/" end className={({ isActive }) => `navlink${isActive ? " is-active" : ""}`}>Home</NavLink>
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `navlink${isActive ? " is-active" : ""}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Btn href={app.url} variant="white" size="sm" className="header__cta">Download</Btn>
          <button
            className={`burger${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mmenu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div id="mmenu" className={`mmenu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <Link to="/" className="mmenu__link" tabIndex={open ? 0 : -1}>Home</Link>
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="mmenu__link" tabIndex={open ? 0 : -1}>
            {n.label}
          </Link>
        ))}
        <Btn href={app.url}>Download on the App Store</Btn>
      </div>
    </>
  );
}
