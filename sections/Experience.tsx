import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the companies I&apos;ve had the pleasure to work with.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-px bg-border" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-background border border-border rounded-xl p-6">
                      <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-3">
                        {job.period}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {job.role}
                      </h3>
                      <p className="text-muted-foreground mb-3">{job.company}</p>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
