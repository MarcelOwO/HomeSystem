import { NavLink } from "react-router";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/blog", label: "Blog" },
    { to: "/login", label: "Login" }
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 m-10 bg-gray-900 outline-1 outline-gray-600 rounded-4xl p-2">
      <ul className="flex flex-row gap-2 m-2 p-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink className="outline-1 outline-gray-600 rounded-4xl m-2 p-2 "
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

