import React from 'react';
import { cn } from '@/lib/utils';

export interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  isPromoted?: boolean;
}

interface EventCardProps {
  event: Event;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, className }) => {
  return (
    <div className={cn("group cursor-pointer", className)}>
      <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {event.isPromoted && (
          <div 
            className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold py-1 px-3 rounded pointer-events-none"
          >
            PROMOTED
          </div>
        )}
        <div className="absolute bottom-0 w-full bg-black bg-opacity-75 p-2.5">
            <p className="text-white text-sm font-semibold">{event.date}</p>
        </div>
      </div>
      <div className="pt-3">
        <h3 className="font-bold text-base md:text-lg text-foreground truncate">{event.title}</h3>
        <p className="text-sm text-muted-foreground">{event.category}</p>
      </div>
    </div>
  );
};

export default EventCard;
