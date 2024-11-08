"use client";

import { logout } from "@/app/actions/auth";

import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <Button variant="outline" className="w-full" onClick={logout}>
      Log Out
    </Button>
  );
}
