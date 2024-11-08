"use server";

import { redirect } from "next/navigation";

import { FormState, LoginFormSchema } from "@/lib/definitions";
import { createSession, deleteSession } from "@/lib/session";

export async function login(state: FormState, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (
    validatedFields.data.email === "test@test.com" &&
    validatedFields.data.password === "password"
  ) {
    await createSession(123);
    redirect("/");
  }

  return {
    message: "Invalid email or password",
  };
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
