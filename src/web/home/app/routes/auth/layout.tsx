import { Outlet } from "react-router";

export function layout() {
  return (
    <div className="m-10 p-10">
      <Outlet />
    </div>
  );
}
