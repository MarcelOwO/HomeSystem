"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/login", label: "Login" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex gap-6 items-center">
            <span className="font-bold text-xl">HomeSystem</span>
            <div className="flex gap-4">
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`hover:text-blue-600 transition-colors ${
                            pathname === href ? "text-blue-600 font-semibold" : ""
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
