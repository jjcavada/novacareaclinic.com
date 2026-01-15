import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface SuccessStory {
  id: string;
  patientInitials: string;
  age: number;
  condition: string;
  treatment: string;
  outcome: string;
  timeframe: string;
  image: string;
  alt: string;
  quote: string;
}

interface SuccessStoriesProps {
  stories: SuccessStory[];
}

const SuccessStories = ({ stories }: SuccessStoriesProps) => {
  return (
    <section className="bg-bg-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline font-bold text-3xl text-foreground mb-4">
            Recovery Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from patients who found healing and hope through our integrated care approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <AppImage
                    src={story.image}
                    alt={story.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-foreground">
                    {story.patientInitials}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Age {story.age} • {story.timeframe}
                  </p>
                </div>
              </div>

              <blockquote className="text-foreground mb-4 italic">
                "{story.quote}"
              </blockquote>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="HeartIcon" size={16} className="text-primary" />
                  <span className="text-muted-foreground">
                    <strong>Condition:</strong> {story.condition}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="SparklesIcon" size={16} className="text-success" />
                  <span className="text-muted-foreground">
                    <strong>Treatment:</strong> {story.treatment}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircleIcon" size={16} className="text-success" />
                  <span className="text-muted-foreground">
                    <strong>Outcome:</strong> {story.outcome}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            *Stories shared with patient permission. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;