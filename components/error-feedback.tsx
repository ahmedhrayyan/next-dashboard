import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ErrorComponentProps {
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function ErrorFeedback({
  title = "An error occurred",
  description = "There was a problem with your request.",
  action,
}: ErrorComponentProps) {
  return (
    <Alert variant="destructive" className="mx-auto my-10 max-w-md">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="mb-2">{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      {action && (
        <div>
          <Button variant="outline" size="sm" onClick={action.onClick} className="mt-4">
            {action.label}
          </Button>
        </div>
      )}
    </Alert>
  );
}
