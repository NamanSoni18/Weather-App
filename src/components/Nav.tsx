import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ModeToggle } from './mode-toggle';

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-900 shadow-md">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="lg:hidden" onClick={() => setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
          <a href="#home" className="text-lg font-bold">Weather App</a>
        </div>
        <div className={`hidden lg:flex lg:items-center lg:space-x-12 ${open ? 'block' : ''}`}>
          <a href="#home" className="text-gray-600 dark:text-gray-300 font-bold hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </a>
          <a href="#weather" className="text-gray-600 dark:text-gray-300 font-bold hover:text-blue-600 dark:hover:text-blue-400">
            Weather
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </nav>
      {open && (
        <div className="sticky top-0 lg:hidden md:block sm:block bg-white dark:bg-gray-900 shadow-md absolute top-16 left-0 right-0 z-50">
          <div className="flex flex-col items-start px-6 py-4 space-y-2">
            <a href="#home" className="text-gray-600 dark:text-gray-300 font-bold hover:bg-blue-600 hover:text-white px-3 py-2 rounded">
              Home
            </a>
            <a href="#weather" className="text-gray-600 dark:text-gray-300 font-bold hover:bg-blue-600 hover:text-white px-3 py-2 rounded">
              Weather
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
