import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Programmer Analyst Trainee',
    company: 'Cognizant Technology Solutions Corporation',
    location: 'Chennai, Tamil Nadu',
    period: 'May 2025 – July 2025',
    highlights: [
      'Built data-driven web features using ASP.NET Core, and SQL Server, improving data retrieval efficiency by 30%.',
      'Collaborated on reporting modules and dashboards for internal applications.',
      'Gained exposure to data pipelines, ETL workflows, and visualization tools.',
    ],
  },
  {
    title: 'AI Research Intern',
    company: 'UL Research (ULCCS Group)',
    location: 'Kozhikode, Kerala',
    period: 'Jun 2024 – Oct 2024',
    highlights: [
      'Analyzed molecular datasets with 708K+ entries to identify candidate drug molecules.',
      'Worked together with researchers to deliver data-backed insights improving candidate molecule selection.',
      'Applied statistical techniques and developed models to identify meaningful molecular patterns.',
    ],
  },
  {
    title: 'AI/ML Agritech Intern',
    company: 'The VeganHUT',
    location: 'Netherlands',
    period: 'Nov 2023 – Apr 2025',
    highlights: [
      'Collected and analyzed sensor datasets from hydroponic systems to optimize plant growth.',
      'Designed Python scripts for cleaning/visualizing time-series data, reducing preprocessing time by 40%.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-16">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-200 dark:bg-neutral-800 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-100 transition-colors duration-300" />

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 mb-1">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-neutral-600 dark:text-neutral-400 pl-6 relative before:content-['•'] before:absolute before:left-0">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
