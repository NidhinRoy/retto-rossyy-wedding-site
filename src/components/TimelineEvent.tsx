
import React from 'react';
import { Clock } from 'lucide-react';

interface TimelineEventProps {
  time: string;
  title: string;
  description?: string;
}

const TimelineEvent = ({ time, title, description }: TimelineEventProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="ml-4">
        <div className="flex items-center gap-2 text-wedding-gold font-medium">
          <Clock size={16} />
          <span>{time}</span>
        </div>
        <h3 className="text-xl font-medium mt-1">{title}</h3>
        {description && <p className="text-gray-600 mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default TimelineEvent;
