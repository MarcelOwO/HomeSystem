import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "OwO" },
    { name: "description", content: "OwO" },
  ];
}


export default function Home() {

  const links = [
    { label: "Discord", Icon: "", link: "" },
    { label: "Telegram", Icon: "", link: "" },
    { label: "Steam", Icon: "", link: "" },
    { label: "Barq", Icon: "", link: "" },
    { label: "Furtrack", Icon: "", link: "" },
    { label: "Instagram", Icon: "", link: "" },
    { label: "Furaffinity", Icon: "", link: "" },
    { label: "Twitter", Icon: "", link: "" },
    { label: "BlueSky", Icon: "", link: "" },
  ];
  return <div className="flex flex-row gap-10 items-center">
    <div className="flex flex-col gap-10 items-center">
      <h2>Welcome to my Homepage</h2>
      <img className="max-w-9/10 rounded-4xl" src="owo.jpg" />
    </div>

    <div className="flex max-w-3/10 flex-col items-stretch gap-2">
      {links.map(({ label, icon, link }) =>
        <a
          className="flex text-center  flex-row gap-2 items-center hover:bg-gray-700 max-w-2xl outline-1 outline-gray-600 rounded-4xl p-2">
          <div className="items-center text-center">{label}</div>
        </a>

      )}
    </div>
  </div>;
}
