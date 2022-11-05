import "./styles.scss";
import { NavLink as RouterLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps & {};

export function NavLink({ children, className = "", ...props }: Props) {
  console.log(className);
  return (
    <RouterLink
      className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
      {...props}
    >
      {children}
    </RouterLink>
  );
}
