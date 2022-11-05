import LogoImage from "../../assets/site-logo.svg";

import "./styles.scss";

export function Logo() {
  return (
    <img
      className="logo"
      src={LogoImage}
      alt="school logo with no relevant text"
    />
  );
}
