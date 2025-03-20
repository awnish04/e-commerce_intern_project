import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LayoutGrid } from "lucide-react";
export default function FilterCategory({
  onFilter,
}: {
  onFilter: (category: string) => void;
}) {
  const categories = [
    "All",
    "Accessories",
    "Computers",
    "Electronics",
    "Footwear",
    "Furniture",
    "Home Appliances",
    "Photography",
    "Wearables",
    "Audio",
  ];

  return (
    <div>
      <Select onValueChange={(value) => onFilter(value)}>
        <SelectTrigger className="w-fit border mb-4">
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
