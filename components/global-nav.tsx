"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface GlobalNavProps {
  data: Category[];
}

const GlobalNav: React.FC<GlobalNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }));
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link key={routes.href} href={routes.href}
          className={cn("text-sm font-medium transition-colors hover:text-black",
            routes.active ? "text-black" : "text-neutral-500")}
        >
          {routes.label}
        </Link>
      ))}
    </nav>
  );
}

export default GlobalNav;