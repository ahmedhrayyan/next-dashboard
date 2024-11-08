"use client";

import { useEffect } from "react";

import ErrorFeedback from "@/components/error-feedback";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="px-8 py-4">
      <ErrorFeedback
        action={{
          label: "Try again",
          onClick: reset,
        }}
      />
    </div>
  );
}
