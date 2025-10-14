import { FaGithub, FaTwitter, } from "react-icons/fa";
import { SiVrchat, SiBluesky } from "react-icons/si";

export default function HomePage() {
  const Links = [

    {
      title: "GitHub",
      url: "https://github.com/MarcelOwO",
      icon: <FaGithub />,
    },
    {
      title: "Twitter",
      url: "https://x.com/Marcel_OwO",
      icon: <FaTwitter />,
    },
    {
      title: "VRChat",
      url: "",
      icon: <SiVrchat />,
    },
    {
      title: "Blue Sky",
      url: "https://bsky.app/profile/marcelowo.bsky.social",
      icon: <SiBluesky />,
    }

  ];

  return (
    <section className="max-w-3xl mx-auto text-center mt-10">
      <div className="max-w-sm mx-auto mt-10 p-6 border border-gray rounded-2xl shadow-sm dark:bg-gray-800">
        <img
          src='sona.png'
          alt="sona"
          className="w-full h-40 object-cover"
        />
        <div>
          <ul>
            {Links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded transition-colors dark:hover:bg-gray-700"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}
