import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";

const SearchBar = () => {
  const { searchQuery, setSearchQuery, isSearchOpen, toggleSearch, performSearch } = useSearch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch();
    toggleSearch();
  };

  return (
    <Dialog open={isSearchOpen} onOpenChange={toggleSearch}>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-6 text-lg focus:ring-2 focus:ring-primary"
            autoFocus
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;