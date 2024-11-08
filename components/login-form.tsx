"use client";

import { useEffect } from "react";
import { login } from "@/app/actions/auth";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [state, action] = useFormState(login, undefined);

  useEffect(() => {
    if (state?.message) {
      toast.error("Error", {
        description: state.message,
      });
    }
  }, [state]);
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Use <code className="bg-muted">test@test.com</code> and{" "}
          <code className="bg-muted">password</code> to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} noValidate>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="m@example.com" required />
              {state?.errors?.email && (
                <p className="text-sm text-destructive">{state.errors.email}</p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" name="password" type="password" required />
              {state?.errors?.password && (
                <p className="text-sm text-destructive">{state.errors.password}</p>
              )}
            </div>
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Loading..." : "Login"}
    </Button>
  );
}
