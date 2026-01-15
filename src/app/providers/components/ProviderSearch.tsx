'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProviderSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const ProviderSearch = ({ onSearch, placeholder = "Search providers by name, specialty, or condition..." }: ProviderSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className="relative">
      <div className="relative">
        <Icon 
          name="MagnifyingGlassIcon" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-micro"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-micro"
          >
            <Icon name="XMarkIcon" size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProviderSearch;