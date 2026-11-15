import { useState } from "react";
import { Collapsible } from "@cloudflare/kumo/components/collapsible";
import "@cloudflare/kumo/styles/standalone";
import styles from "./styles.module.css";
import { experiences } from "./data";

const panelClassName = [
  "h-[var(--collapsible-panel-height)]",
  "overflow-hidden",
  "transition-[height,opacity]",
  "duration-100",
  "ease-out",
  "data-starting-style:h-0",
  "data-starting-style:opacity-0",
  "data-ending-style:h-0",
  "data-ending-style:opacity-0",
  "[&[hidden]:not([hidden='until-found'])]:hidden",
].join(" ");

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className={styles.list}>
      {experiences.map((item, index) => (
        <Collapsible.Root
          key={item.company}
          className={styles.item}
          open={activeIndex === index}
          onOpenChange={(open) => setActiveIndex(open ? index : null)}
        >
          <Collapsible.Trigger className={styles.summary}>
            <span className={styles.company}>{item.company}</span>
            <span className={styles.role}>{item.role}</span>
            <span className={styles.period}>
              {item.start} - {item.end || "Now"}
            </span>
            <span className={styles.icon} aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Collapsible.Trigger>
          <Collapsible.Panel className={panelClassName}>
            <div className={styles.body}>
              {item.description.map((paragraph) => (
                <p key={paragraph} className={styles.description}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Collapsible.Panel>
        </Collapsible.Root>
      ))}
    </div>
  );
};

export default Experience;
