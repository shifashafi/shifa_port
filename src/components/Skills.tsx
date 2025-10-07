import { Code2, Database, TrendingUp, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['Python', 'C', 'HTML5', 'CSS', 'C#', 'JavaScript'],
  },
  {
    icon: TrendingUp,
    title: 'Data & Machine Learning',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'RDKit'],
  },
  {
    icon: TrendingUp,
    title: 'Data Visualization',
    skills: ['Matplotlib', 'Seaborn'],
  },
  {
    icon: Database,
    title: 'Web & Software Development',
    skills: ['ASP.NET', 'React', 'Next.js', 'Tailwind CSS', 'Entity Framework', 'Dapper'],
  },
  {
    icon: Wrench,
    title: 'DevOps & Tools',
    skills: ['Docker', 'Microservices', 'Git', 'GitHub', 'Google Workspace', 'Jira', 'Figma', 'Canva'],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Leadership', 'Time Management', 'Communication'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-neutral-900 dark:hover:border-neutral-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
