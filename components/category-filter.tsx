"use client";

import { useQueryState } from "nuqs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategoryFilterProps {
  categories: string[];
  queryKey?: string;
}

export default function CategoryFilter({ categories, queryKey = "category" }: CategoryFilterProps) {
  const [category, setCategory] = useQueryState(queryKey, {
    defaultValue: "",
    shallow: false,
    throttleMs: 300,
  });

  return (
    <Select
      onValueChange={(value) => {
        value = value === "all" ? "" : value;
        void setCategory(value);
      }}
      defaultValue={category}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
