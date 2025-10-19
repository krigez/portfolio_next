// src/components/TimelineItem.tsx
import React, { useRef, useEffect, useState } from "react";
import type { TimelineEntry } from "./Timelinedata";
import "./timeline.css"; // We'll add styles next

interface TimelineItemProps {
  item: TimelineEntry;
  position: "left" | "right";
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  position,
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Reveal animation on scroll
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`item ${position} ${visible ? "visible" : ""}`}
      id={`item-${item.id}`}
    >
      <div className="node" aria-hidden="true"></div>
      <div className="card" tabIndex={0}>
        <h3>{item.title}</h3>
        <div className="org">
          {item.organization}
          {item.location ? ` — ${item.location}` : ""}
        </div>
        <time className="dates">
          {item.start} — {item.end}
        </time>

        <p className="summary">{item.summary}</p>
        <ul className="bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="tech" aria-hidden="true">
          {item.tech.map((t, i) => (
            <span className="tag" key={i}>
              {t}
            </span>
          ))}
        </div>

        {item.links && (
          <div className="links">
            {item.links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
