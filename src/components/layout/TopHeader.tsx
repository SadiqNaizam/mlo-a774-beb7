import React from 'react';
import { Ticket, Search, MapPin, ChevronDown, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

const mainNavItems: readonly NavItemProps[] = [
  { href: '#', label: 'Movies' },
  { href: '#', label: 'Stream' },
  { href: '#', label: 'Events' },
  { href: '#', label: 'Plays' },
  { href: '#', label: 'Sports' },
  { href: '#', label: 'Activities', isActive: true },
] as const;

const secondaryNavItems: readonly NavItemProps[] = [
    { href: '#', label: 'ListYourShow' },
    { href: '#', label: 'Corporates' },
    { href: '#', label: 'Offers' },
    { href: '#', label: 'Gift Cards' },
] as const;


const NavLink: React.FC<NavItemProps> = ({ href, label, isActive }) => (
  <a
    href={href}
    className={cn(
      'text-sm font-medium text-foreground/80 hover:text-foreground transition-colors',
      isActive && 'text-primary font-semibold'
    )}
  >
    {label}
  </a>
);

const TopHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <Ticket className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">book<span className="text-primary">my</span>show</span>
          </a>
          <div className="relative hidden lg:block w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="pl-10 h-10 w-full rounded-md border border-input bg-card"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="hidden md:flex items-center gap-1">
                        <span>Chennai</span>
                        <ChevronDown className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Mumbai</DropdownMenuItem>
                    <DropdownMenuItem>Delhi-NCR</DropdownMenuItem>
                    <DropdownMenuItem>Bengaluru</DropdownMenuItem>
                    <DropdownMenuItem>Hyderabad</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

          <Button variant="default" className="bg-primary hover:bg-primary/90 hidden sm:inline-flex">Sign In</Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-between bg-card/80 px-6 py-3 border-t">
            <nav className="flex items-center gap-6">
                {mainNavItems.map(item => <NavLink key={item.label} {...item} />)}
            </nav>
            <nav className="flex items-center gap-6">
                 {secondaryNavItems.map(item => <NavLink key={item.label} {...item} />)}
            </nav>
      </div>
    </header>
  );
};

export default TopHeader;
