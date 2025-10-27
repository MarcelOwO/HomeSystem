import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "OwO" },
    { name: "description", content: "OwO" },
  ];
}

export default function Home() {
  return <div>
    OwO
  </div>;
}
