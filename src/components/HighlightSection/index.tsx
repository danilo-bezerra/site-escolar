import { ReactNode } from "react";

import "./styles.scss";

type Props = { children: ReactNode; className?: string };

export function HighlightSection({ children, className }: Props) {
  const sectionClassName = className ? `container ${className}` : "container";

  return (
    <section className="highlight-section">
      <div className={sectionClassName}>{children}</div>
    </section>
  );
}
