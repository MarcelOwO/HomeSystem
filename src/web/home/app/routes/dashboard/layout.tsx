import { Outlet, NavLink } from "react-router";

export default function layout() {
  const links = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/user", label: "User" },
    { to: "/naming", label: "Naming" },
    { to: "/settings", label: "Settings" },
  ];
  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col divide-y divide-gray-600 items-center gap-5 outline-1 outline-gray-600 p-5 m-5 rounded-4xl bg-gray-900">
        {links.map(({ to, label }) =>
          <NavLink to={to}> {label}</NavLink>
        )}
      </div>
      <Outlet />
    </div>
  );
}
