import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function BlogSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // TODO: Implement search functionality
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search articles..."
        className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
      />
      <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
    </div>
  );
}