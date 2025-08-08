
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 flex items-center gap-1">
              &copy; {currentYear} Akinepelli Saiteja. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <p className="text-foreground/70 flex items-center">
              Crafted with 
              <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
              and Machine Learning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
