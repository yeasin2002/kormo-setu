import { Button } from '@/components/ui/button';

import { Clock, DollarSign, Heart, MapPin } from 'lucide-react';
import Link from 'next/link';

const savedJobs = [
  {
    company: 'Google',
    position: 'Senior Frontend Engineer',
    location: 'Mountain View, CA',
    salary: '$150k - $200k',
    posted: '2 days ago',
  },
  {
    company: 'Meta',
    position: 'React Developer',
    location: 'Menlo Park, CA',
    salary: '$140k - $180k',
    posted: '1 week ago',
  },
  {
    company: 'Netflix',
    position: 'UI Engineer',
    location: 'Los Gatos, CA',
    salary: '$160k - $210k',
    posted: '3 days ago',
  },
];

export const SavedJobs = () => {
  return (
    <div className="bg-card border-border rounded-2xl border-2 p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold">Saved Jobs</h3>
        <Link href="/jobs" className="text-sm font-medium text-purple-500 hover:text-purple-600">
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {savedJobs.map((job, index) => (
          <div
            key={index}
            className="bg-background border-border rounded-lg border p-4 transition-shadow hover:shadow-md"
          >
            <div className="mb-2 flex items-start justify-between">
              <div>
                <h4 className="text-lg font-bold">{job.position}</h4>
                <p className="font-medium text-purple-600">{job.company}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 fill-current text-red-500" />
              </Button>
            </div>
            <div className="text-muted-foreground mb-3 flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-3 w-3" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{job.posted}</span>
              </div>
            </div>
            <Button
              size="sm"
              className="border-2 border-black bg-purple-500 text-white hover:bg-purple-600"
            >
              Apply Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
