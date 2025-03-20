// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function SortSelect({
//   onSort,
// }: {
//   onSort: (value: string) => void;
// }) {
//   return (
//     <Select onValueChange={onSort}>
//       <SelectTrigger className="w-fit border p-2 mb-4">
//         <SelectValue placeholder="Sort by Price" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="price-asc">Sort by Price: Low to High</SelectItem>
//         <SelectItem value="price-desc">Sort by Price: High to Low</SelectItem>
//       </SelectContent>
//     </Select>
//   );
// }

"use client";
// components/SortSelect.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortSelect({
  onSort,
}: {
  onSort: (value: string) => void;
}) {
  return (
    <Select onValueChange={onSort}>
      <SelectTrigger className="w-fit border mb-4">
        <SelectValue placeholder="Sort by Price" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="price-asc">Sort by Price: Low to High</SelectItem>
        <SelectItem value="price-desc">Sort by Price: High to Low</SelectItem>
      </SelectContent>
    </Select>
  );
}
