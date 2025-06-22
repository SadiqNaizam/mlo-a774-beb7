import React, { useState, useCallback } from 'react';
import TopHeader from '../components/layout/TopHeader';
import SidebarFilters from '../components/layout/SidebarFilters';
import QuickFilterTags from '../components/ActivitiesPage/QuickFilterTags';
import EventCardGrid from '../components/ActivitiesPage/EventCardGrid';

/**
 * IndexPage serves as the main entry point for the activities listing.
 * It composes the page layout by combining the header, filters, and event grid.
 */
const IndexPage: React.FC = () => {
  // State to hold the currently selected quick filter category.
  // This would be used to filter the event data in a real application.
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  /**
   * Callback function passed to QuickFilterTags to update the active category.
   * In a production environment, this would likely trigger an API call to refetch
   * filtered data.
   */
  const handleFilterChange = useCallback((filter: string | null) => {
    setActiveCategory(filter);
    // Example: fetchEvents({ category: filter });
  }, []);

  return (
    <div className="bg-background min-h-screen font-sans text-foreground">
      <TopHeader />
      {/* 
        Main content area layout. 
        - 'container', 'max-w-screen-2xl', and 'mx-auto' match the header's container for alignment.
        - 'px-6' provides horizontal padding consistent with the header.
        - 'flex' layout arranges the sidebar and main content side-by-side.
      */}
      <div className="container max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-row items-start gap-x-8 py-6">
          {/* Sidebar for filtering. It self-manages its visibility on different screen sizes (hidden below lg). */}
          <SidebarFilters />
          {/* 
            Main content section for event listings.
            - 'flex-1' allows it to take up the remaining space.
            - 'min-w-0' is a flexbox fix to prevent content overflow.
          */}
          <main className="flex-1 min-w-0">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight">
                Activities in Chennai
              </h1>
              <QuickFilterTags onFilterChange={handleFilterChange} />
              <EventCardGrid />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
