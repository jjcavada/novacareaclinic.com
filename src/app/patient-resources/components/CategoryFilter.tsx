'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CategoryFilterProps {
  categories: Array<{
    id: string;
    name: string;
    icon: string;
    count: number;
  }>;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="font-headline font-semibold text-lg text-card-foreground mb-4">
        Resource Categories
      </h3>

      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all text-left ${activeCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted text-card-foreground'
              }`}
          >
            <div className="flex items-center gap-3">
              <Icon
                name={category.icon as any}
                size={20}
                className={activeCategory === category.id ? 'text-primary-foreground' : 'text-muted-foreground'}
              />
              <span className="font-medium">{category.name}</span>
            </div>
            <span className={`text-sm px-2 py-1 rounded-full ${activeCategory === category.id
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted text-muted-foreground'
              }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;