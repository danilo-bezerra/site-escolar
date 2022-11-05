import "./styles.scss";
import { useRef } from "react";
import { Logo } from "../Logo";
import { SocialMediaLinks } from "../SocialMediaLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "../NavLink";
import { Nav } from "../Nav";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <SocialMediaLinks />
    </header>
  );
}
