"use client";

import { ComponentProps } from "react";
import { useQueryState } from "nuqs";

import { Input } from "@/components/ui/input";

interface QuerySearchProps extends ComponentProps<typeof Input> {
  queryKey?: string;
}

export default function QuerySearch({ queryKey = "search", ...props }: QuerySearchProps) {
  const [search, setSearch] = useQueryState(queryKey, {
    defaultValue: "",
    shallow: false,
    throttleMs: 500,
  });

  return (
    <Input
      {...props}
      defaultValue={search}
      onChange={(evt) => {
        void setSearch(evt.target.value);
      }}
    />
  );
}
