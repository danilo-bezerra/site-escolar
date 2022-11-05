import "./styles.scss";
import { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  title: string;
  description: string;
};

export function InfoBox({ icon, title, description }: Props) {
  return (
    <div className="info-box">
      {icon && icon}
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
