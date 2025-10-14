"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {href: "/", label: "Home"},
    {href: "/blog", label: "Blog"},
    {href: "/projects", label: "Projects"},
    {href: "/login", label: "Login"},
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="px-6  flex gap-6 items-center">
            <div className="flex gap-10">
                {links.map(({href, label}) => (
                    <div key={label} className="bg-gray-800 pt-5 pb-2 pl-4 pr-4  items-center top-0  rounded-b-2xl">
                        <Link
                            key={href}
                            href={href}
                            className={`hover:text-blue-600 transition-colors mt-10 ${
                                pathname === href ? "text-blue-600 font-semibold" : ""
                            }`}
                        >
                            {label}
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
    );
}
