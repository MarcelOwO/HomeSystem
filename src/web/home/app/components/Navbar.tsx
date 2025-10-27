import { NavLink } from "react-router";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/dashboard", label: "Dashboard" }
  ];

  return (
    <nav>
      <ul className="flex flex-row gap-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink className="outline-2 outline-gray-100 rounded-2xl mx-2 "
              to={to}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

