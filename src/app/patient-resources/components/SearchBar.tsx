'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search resources..." }: SearchBarProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon name="MagnifyingGlassIcon" size={20} className="text-muted-foreground" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
      />
      {searchTerm && (
        <button
          onClick={() => onSearchChange('')}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-micro"
        >
          <Icon name="XMarkIcon" size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;