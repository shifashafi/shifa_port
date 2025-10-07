import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Technology',
    field: 'Computer Science and Engineering',
    institution: 'Government Engineering College Thrissur',
    location: 'Kerala',
    period: 'Sept 2023 – June 2025',
    cgpa: '9.33 CGPA',
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Electronics and Communication Engineering',
    institution: 'Government Engineering College Palakkad',
    location: 'Kerala',
    period: 'Aug 2019 – June 2023',
    cgpa: '7.98 CGPA',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-16">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-neutral-900 dark:hover:border-neutral-100 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-neutral-600 dark:text-neutral-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300 font-medium">
                      {edu.field}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pl-9">
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {edu.institution}, {edu.location}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Award className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
