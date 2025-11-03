import {  } from 'lucide-react';

const projects = [
  {
    title: 'QuickBill – Expense Tracker',
    description: 'Built a full-stack expense tracking application with Next.js frontend and ASP.NET Core Web API backend. Implemented monthly filtering and visual summaries with charts. Managed PostgreSQL database using Docker for development and deployment.',
    tech: ['Next.js', 'ASP.NET Core Web API 8', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Seq2SMILES: Molecular Generation',
    description: 'Improved a neural network that generates new chemical structures from existing molecules and their SMILES values, advancing research in bioinformatics.',
    tech: ['Python', 'RDKit', 'TensorFlow'],
  },
  {
    title: 'License Plate Detection System',
    description: 'Collaborated with Thrissur city police to enhance the ANPR system. Expanded defense against adversarial attacks and environmental disruptions.',
    tech: ['YOLO', 'OCR', 'Computer Vision'],
  },
  {
    title: 'Advanced Multi-Agent RAG System',
    description: 'A production-grade Retrieval-Augmented Generation (RAG) system with hybrid search, multi-agent architecture, self-reflection capabilities, and web search fallback.',
    tech: ['Arduino (C)', 'Arduino IDE', 'Python', 'OpenCV'],
  },
  {
    title: 'Culprit identification and lie detection system using ARDUINO UNO and RASPBERRY PI',
    description: 'Utilized Arduino UNO to gather physiological data (heart rate, skin conductivity).\n Implemented a facial recognition system using Raspberry Pi. \n Used OpenCV for real-time facial detection and matching against a database.',
    tech: ['Python','ChromaDB','Ollama','Streamlit','Sentence-Transformers','LangChain'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-neutral-900 dark:hover:border-neutral-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
