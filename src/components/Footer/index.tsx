import "./styles.scss";
import { Header } from "../Header";
import { Logo } from "../Logo";
import { SocialMediaLinks } from "../SocialMediaLinks";
import { NavLink } from "../NavLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="three-column">
          <div>
            <h2>Escola Tecnológica Bezerra</h2>
            <p>
              9999 lorem ipsum, dolor, ETC 9898
              <br />
              Brasil
            </p>
          </div>
          <div>
            <h2>Escritório Principal</h2>
            <p>
              +55 (88) 9 9999-9999 <br />
              8:00 – 18:00
            </p>
          </div>
          <div>
            <h2>Atendimento</h2>
            <p>
              +55 (88) 9 9999-9999 <br />
              email@example.com
            </p>
          </div>
        </div>
        <div className="">
          <Logo />
          <nav className="footer-nav">
            <ul className="footer-nav-links">
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
            </ul>
          </nav>
          <SocialMediaLinks />
        </div>
        <p className="copyright">
          Copyright © {year} School | Powered by School.
        </p>
      </div>
    </footer>
  );
}
