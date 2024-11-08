"use client";

import { ComponentProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarLinkProps extends ComponentProps<typeof Link> {
  matchExact?: boolean;
}

export default function NavLink({ matchExact = false, className, ...rest }: SidebarLinkProps) {
  const pathname = usePathname();
  const linkPath = typeof rest.href === "string" ? rest.href : rest.href.pathname;

  const isActive = matchExact ? pathname === linkPath : pathname.startsWith(linkPath ?? "");

  return <Link className={cn(className, isActive && "active")} {...rest} />;
}
