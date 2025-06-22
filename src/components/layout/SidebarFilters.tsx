import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

interface FilterSectionProps {
  value: string;
  title: string;
  children: React.ReactNode;
}

const FilterAccordionItem: React.FC<FilterSectionProps> = ({ value, title, children }) => (
  <AccordionItem value={value} className="border-b border-border">
    <AccordionTrigger className="py-4 text-sm font-semibold text-foreground hover:no-underline">
        <div className="flex justify-between items-center w-full">
            <span>{title}</span>
            <Button variant="link" className="h-auto p-0 text-xs text-muted-foreground hover:text-primary">Clear</Button>
        </div>
    </AccordionTrigger>
    <AccordionContent className="pb-4">
      {children}
    </AccordionContent>
  </AccordionItem>
);

const SidebarFilters: React.FC = () => {
  const [activeDateFilter, setActiveDateFilter] = useState<string>('Today');

  const dateFilters = ['Today', 'Tomorrow', 'This Weekend'] as const;

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0 border-r bg-card h-full">
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Filters</h2>
        
        <Accordion type="multiple" defaultValue={['date']} className="w-full">
          
          <AccordionItem value="date" className="border-b border-border">
            <AccordionTrigger className="py-4 text-sm font-semibold text-foreground hover:no-underline">
              <div className="flex justify-between items-center w-full">
                  <span>Date</span>
                  <Button 
                    variant="link" 
                    onClick={(e) => { e.stopPropagation(); setActiveDateFilter(''); }}
                    className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                  >
                    Clear
                  </Button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {dateFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveDateFilter(filter)}
                    className={cn(
                      'rounded-md font-normal',
                      activeDateFilter === filter && 'border-primary text-primary bg-secondary'
                    )}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="date-range" />
                <Label htmlFor="date-range" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Date Range
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>

          <FilterAccordionItem value="categories" title="Categories">
            <p className="text-sm text-muted-foreground">Category options will be listed here.</p>
          </FilterAccordionItem>

          <FilterAccordionItem value="more-filters" title="More Filters">
             <p className="text-sm text-muted-foreground">Additional filter options will be listed here.</p>
          </FilterAccordionItem>

          <FilterAccordionItem value="price" title="Price">
             <p className="text-sm text-muted-foreground">Price range filters will be listed here.</p>
          </FilterAccordionItem>

        </Accordion>

        <Separator />

        <Button variant="outline" className="w-full border-primary text-primary hover:bg-secondary hover:text-primary">
          Browse by Venues
        </Button>
      </div>
    </aside>
  );
};

export default SidebarFilters;
