import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
          Let's Connect
        </h2>

        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities, collaborations, and projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="mailto:iamshifashafi@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-full hover:scale-105 transition-transform duration-300 font-medium"
          >
            <Mail className="w-5 h-5" />
            iamshifashafi@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/shifa-shafi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 rounded-full hover:scale-105 transition-transform duration-300 font-medium"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn Profile
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-neutral-500 dark:text-neutral-500">
          <MapPin className="w-4 h-4" />
          <span>Based in Kerala, India</span>
        </div>
      </div>
    </section>
  );
}
