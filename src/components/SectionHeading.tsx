
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  decorative?: boolean;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  className,
  centered = true,
  decorative = true 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className={cn(
        'font-script text-5xl text-wedding-navy',
        centered && 'mx-auto'
      )}>
        {title}
      </h2>
      
      {decorative && (
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="h-px bg-wedding-gold w-12 md:w-24"></div>
          <div className="h-2 w-2 bg-wedding-gold rounded-full mx-2"></div>
          <div className="h-px bg-wedding-gold w-12 md:w-24"></div>
        </div>
      )}
      
      {subtitle && (
        <p className="text-wedding-navy/80 mt-2 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
