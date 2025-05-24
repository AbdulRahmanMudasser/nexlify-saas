'use client'    // Render on Client Side

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";   // Get Current URL

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
]

const NavbarItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
                <Link href={href} key={label} className={cn(pathname === href && 'text-primary font-semibold')}>
                    {label}
                </Link>
            ))}
        </nav>
    )
}

export default NavbarItems;