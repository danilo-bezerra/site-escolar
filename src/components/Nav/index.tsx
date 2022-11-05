import "./styles.scss";
import { useRef } from "react";
import { NavLink } from "../NavLink";
import { SocialMediaLinks } from "../SocialMediaLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export function Nav() {
  const navRef = useRef<HTMLElement | null>(null);
  const navLinksRef = useRef<HTMLUListElement | null>(null);

  function toggleNavVisibility() {
    navRef.current?.classList.toggle("active");
    navLinksRef.current?.classList.toggle("active");
  }

  return (
    <>
      <nav ref={navRef} className="nav">
        <ul ref={navLinksRef} className="nav-links">
          <li>
            <NavLink to="/">Início</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/academico">Académico</NavLink>
          </li>
          <li>
            <NavLink to="/atividades">Atividades</NavLink>
          </li>
          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>
          <li className="social-links">
            <SocialMediaLinks />
          </li>
          <button className="btn btn-close-nav" onClick={toggleNavVisibility}>
            <AiOutlineClose size={24} />
          </button>
        </ul>
      </nav>
      <button className="btn btn-open-nav" onClick={toggleNavVisibility}>
        <AiOutlineMenu size={24} />
      </button>
    </>
  );
}
