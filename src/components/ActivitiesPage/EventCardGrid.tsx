import React from 'react';
import EventCard, { type Event } from './EventCard';
import { cn } from '@/lib/utils';

const eventData: Event[] = [
  {
    id: 'event-1',
    title: 'VGP Wonder World',
    category: 'Theme parks',
    date: 'Sun, 22 Jun onwards',
    imageUrl: 'https://i.imgur.com/WJCa4w8.jpeg',
    isPromoted: true,
  },
  {
    id: 'event-2',
    title: 'Ideal Beach Resort Day Outing',
    category: 'Resorts',
    date: 'Mon, 23 Jun onwards',
    imageUrl: 'https://i.imgur.com/u7yT2w5.jpeg',
    isPromoted: true,
  },
  {
    id: 'event-3',
    title: 'Casagrand Sundance',
    category: 'Immersive Experience',
    date: 'Sun, 22 Jun onwards',
    imageUrl: 'https://i.imgur.com/9P3s5uD.jpeg',
  },
  {
    id: 'event-4',
    title: 'VGP Marine Kingdom - Chennai',
    category: 'Aquarium',
    date: 'Sun, 22 Jun onwards',
    imageUrl: 'https://i.imgur.com/L12sE0o.jpeg',
  },
  {
    id: 'event-5',
    title: 'Black Thunder Theme Park',
    category: 'Theme parks',
    date: 'Sat, 21 Jun onwards',
    imageUrl: 'https://i.imgur.com/H1tLPhM.jpeg',
  },
  {
    id: 'event-6',
    title: 'Gokarting at ECR Speedway',
    category: 'Adventure',
    date: 'Every Day',
    imageUrl: 'https://i.imgur.com/R3v8aN3.jpeg',
    isPromoted: true,
  },
  {
    id: 'event-7',
    title: 'MGM Dizzee World',
    category: 'Theme parks',
    date: 'Until 30 Jun',
    imageUrl: 'https://i.imgur.com/FwYf8Zk.jpeg',
  },
  {
    id: 'event-8',
    title: 'Mystery Rooms - Real Escape Game',
    category: 'Escape Rooms',
    date: 'Tue, 24 Jun onwards',
    imageUrl: 'https://i.imgur.com/iY9jT9S.jpeg',
  },
];

interface EventCardGridProps {
  className?: string;
}

const EventCardGrid: React.FC<EventCardGridProps> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8", className)}>
      {eventData.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventCardGrid;
