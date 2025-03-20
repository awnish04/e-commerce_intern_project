"use client";
type SearchProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const SearchBar: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="p-2 border rounded-md w-full"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
