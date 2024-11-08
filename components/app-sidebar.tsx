import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import LogoutButton from "@/components/logout-button";
import NavLink from "@/components/nav-link";
import { SearchForm } from "@/components/search-form";

const data = {
  navMain: [
    {
      title: "Main",
      hideLabel: true,
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/",
          matchExact: true,
        },
        {
          title: "Products",
          url: "/products",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupContent>
            <h1 className="text-lg">Next Dashboard</h1>
          </SidebarGroupContent>
        </SidebarGroup>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className={cn(item.hideLabel && "hidden")}>
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        href={item.url}
                        matchExact={item.matchExact}
                        className="[&.active]:bg-muted [&.active]:font-bold"
                      >
                        {item.title}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <LogoutButton />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
