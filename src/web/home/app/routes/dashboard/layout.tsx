
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="rounded-2xl outline-2 outline-white">
      <Outlet />
    </div>
  );
}
