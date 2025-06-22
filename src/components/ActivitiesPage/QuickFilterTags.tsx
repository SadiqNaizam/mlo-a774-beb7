import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const filterTags: readonly string[] = [
  'Amusement Parks',
  'Tourist Attractions',
  'Gaming',
  'Adventure',
  'Nightlife',
  'Food and Drinks',
  'Parties',
  'Unique Tours',
] as const;

interface QuickFilterTagsProps {
  className?: string;
  onFilterChange?: (filter: string | null) => void;
}

const QuickFilterTags: React.FC<QuickFilterTagsProps> = ({ className, onFilterChange }) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleTagClick = useCallback((tag: string) => {
    const newActiveTag = activeTag === tag ? null : tag;
    setActiveTag(newActiveTag);
    if (onFilterChange) {
      onFilterChange(newActiveTag);
    }
  }, [activeTag, onFilterChange]);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center space-x-2 overflow-x-auto pb-3">
        {filterTags.map((tag) => (
          <Button
            key={tag}
            variant="outline"
            className={cn(
              "rounded-full whitespace-nowrap px-4 py-2 h-auto text-sm font-medium transition-colors",
              "border-border text-foreground bg-card hover:bg-muted",
              activeTag === tag && "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
            )}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickFilterTags;
