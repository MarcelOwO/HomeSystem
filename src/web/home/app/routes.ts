import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("blog", "./routes/blog.tsx"),
  route("projects", "./routes/projects.tsx"),
  route("about", "./routes/about.tsx"),
  route("contact", "./routes/contact.tsx"),
  route("projects", "./routes/projects.tsx"),

  layout("routes/auth/layout.tsx", [
    route("register", "./routes/auth/register.tsx"),
    route("login", "./routes/auth/login.tsx"),
    route("forgot-password", "./routes/auth/forgot-password.tsx"),
    route("reset-password", "./routes/auth/reset-password.tsx"),
    route("verify-email", "./routes/auth/verify-email.tsx")
  ]),
  layout("routes/dashboard/layout.tsx", [
    route("dashboard", "./routes/dashboard/dashboard.tsx"),
    route("user", "./routes/dashboard/user.tsx"),
    route("admin", "./routes/dashboard/admin.tsx"),
  ]),
] satisfies RouteConfig;
