import { Trophy, BookOpen, Users } from 'lucide-react';

const achievements = [
  {
    icon: BookOpen,
    title: 'IEEE Publication',
    description: 'Reinforcing License Plate Detection Against Adversarial Attacks and Environmental Disruptions – 4th International Conference on Advances in Computing, Communication, Embedded, and Secure Systems',
  },
  {
    icon: Trophy,
    title: 'AWS AI/ML Scholarship',
    description: 'Recipient of AWS AI/ML Scholarship',
  },
  {
    icon: Users,
    title: 'Fine Arts Secretary',
    description: 'College Union, GEC PALAKKAD',
  },
  {
    icon: Users,
    title: 'ComSoc Chapter Secretary',
    description: 'IEEE SB GEC PALAKKAD',
  },
  
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-16">
          Achievements & Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-8 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-neutral-900 dark:hover:border-neutral-100 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {achievement.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
