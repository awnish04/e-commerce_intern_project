"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LayoutGrid } from "lucide-react";
import { categories } from "@/constants/categories"; // Import shared categories

export default function FilterCategory({
  onFilter,
}: {
  onFilter: (category: string) => void;
}) {
  return (
    <div>
      <Select onValueChange={(value) => onFilter(value)}>
        <SelectTrigger className="w-fit border">
          <LayoutGrid className="text-gray-500" />
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
