// src/components/Timeline.tsx
import React from "react";
import { timelineData } from "../components/Timelinedata";
import { TimelineItem } from "./TimelineItem";
import "./timeline.css";

export const Timeline: React.FC = () => {
  return (
    <div className="timeline-root" aria-labelledby="timeline-title">
      <h3 id="timeline-title" className="sr-only">Career timeline</h3>
      <section className="timeline" aria-label="Career timeline">
        {timelineData.map((item, idx) => (
          <TimelineItem
            key={item.id}
            item={item}
            position={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
      </section>
    </div>
  );
};
