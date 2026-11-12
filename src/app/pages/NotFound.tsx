import { Link } from "react-router";
import Btn from "../components/Btn";
import Split from "../components/Split";

export default function NotFound() {
  return (
    <section className="nf">
      <span className="topic">Error 404</span>
      <Split className="h-page" parts={[["This page"], ["\n"], ["isn't here", true]]} />
      <p className="lead">The link may be old or mistyped.</p>
      <div className="cta-row">
        <Btn to="/">Back to Home</Btn>
        <Link to="/support" className="bracket">Support</Link>
      </div>
    </section>
  );
}
