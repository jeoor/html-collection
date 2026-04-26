import React from "react";
import { createRoot } from "react-dom/client";
import { site } from "./site.generated";
import { sections } from "./works.generated";
import "./styles.css";

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <h1 className="page-title">{site.name}</h1>
      </header>

      {sections.map((section) => (
        <section className="section" key={section.title}>
          <h2 className="section-title">{section.title}</h2>
          <nav className="list" aria-label={section.title}>
            {section.items.map((item) => (
              <a className="item" href={item.href} key={item.href}>
                <span className="item-title">{item.title}</span>
                <span className="item-meta">{item.meta}</span>
              </a>
            ))}
          </nav>
        </section>
      ))}

      <footer className="footer">
        <p>{site.footer.copyright}</p>
        <p className="footer-links">
          {site.footer.links.map((link) => (
            <a href={link.href} key={link.href} rel="noreferrer noopener" target="_blank">
              {link.text}
            </a>
          ))}
        </p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
