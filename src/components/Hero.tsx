import { Mail, Linkedin, MapPin, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-4xl w-full">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              Hi, I'm
            </p>
            <h1 className="text-6xl md:text-8xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Shifa Shafi
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300 font-light">
              AI/ML Researcher & Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-6 text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kerala, India</span>
            </div>
          </div>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            AI/ML researcher with expertise in full-stack development, data analysis, and molecular modeling.
            Passionate about building intelligent systems and data-driven applications.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="mailto:iamshifashafi@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-full hover:scale-105 transition-transform duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              Let's Talk
            </a>
            <a
              href="https://linkedin.com/in/shifa-shafi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 rounded-full hover:scale-105 transition-transform duration-300 font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
      </div>
    </section>
  );
}
