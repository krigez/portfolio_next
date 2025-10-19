// src/components/Timeline.tsx
import React from "react";
import { timelineData } from "../components/Timelinedata";
import { TimelineItem } from "./TimelineItem";
import "./timeline.css";

export const Timeline: React.FC = () => {
  return (
    <main className="wrap" aria-labelledby="timeline-title">
      <h1 id="timeline-title">Career & Education — Timeline</h1>
      <section className="timeline" aria-label="Career timeline">
        {timelineData.map((item, idx) => (
          <TimelineItem
            key={item.id}
            item={item}
            position={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
      </section>
    </main>
  );
};
