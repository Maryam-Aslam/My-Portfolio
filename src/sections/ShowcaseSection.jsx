import React, { useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Categories to mirror the reference section
const CATEGORIES = ['All', 'AI', 'Web 3.0', 'MERN', 'wordpress'];

// Sample projects (thumbnails exist in /public/images)
const PROJECTS = [
  {
    id: 'techlynix-portfolio',
    title: 'Techlynix - Company Portfolio',
    categories: ['Frontend', 'Modern UI'],
    image: '/images/tech-portfolio.PNG', // Ensure you save a screenshot of your first page here
    demoUrl: 'https://techlynix-portfolio-9ueu.vercel.app/',
  },
  {
    id: 'ecommerce-store',
    title: 'Ecommerce Store',
    categories: ['MERN'],
    image: '/images/ecom.PNG',
    demoUrl: 'https://ecom-web-frontend-chi.vercel.app/',
  },
  {
    id: 'osum-logistics',
    title: 'Osum Enterprises - Global Logistics',
    categories: ['WordPress', 'PHP', 'Business'],
    image: '/images/osum.PNG', // Remember to take a screenshot of the Osum home page
    demoUrl: 'https://osumenterprises.com/',
  },
  {
    id: 'sk-ride-frontend',
    title: 'SK-Ride - Ride Booking Platform',
    categories: ['MERN'],
    image: '/images/ridee.PNG', // Ensure you save a screenshot of the SK-Ride landing page here
    demoUrl: 'https://sk-ride-frontend.vercel.app/',
  },
  {
    id: 'youth-one',
    title: 'Youth One - Community Platform',
    categories: ['Frontend', 'Modern UI'],
    image: '/images/youth.PNG', // Take a screenshot of the Youth One landing page
    demoUrl: 'https://youth-one.vercel.app/',
  },
  {
    id: 'facebook-clone',
    title: 'Facebook UI Clone',
    categories: ['Frontend', 'React.js', 'Social UI'],
    image: '/images/FBB.PNG', // Take a screenshot of the Facebook Clone home feed
    demoUrl: 'https://facebook-clone-frontend-project.vercel.app/',
  },
  {
    id: 'tech-blog',
    title: 'Spark Marvels – Tech Blog',
    categories: ['Other'],
    image: '/images/first-project.PNG',
    demoUrl: 'https://sparkmarvels.com',
  },

];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  useGSAP(
    () => {
      // Section fade-in
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: 'power1.out' }
        );
      }

      // Animate project cards on scroll
      const cards = gsap.utils.toArray('.project-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: Math.min(index * 0.08, 0.5),
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    },
    { dependencies: [activeFilter] }
  );

  return (
    <section ref={sectionRef} id="work" className="app-showcase py-16 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
          <p className="text-white-50 md:text-lg mt-2">A selection of sample work across AI, Web3, and MERN.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeFilter;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={
                  `px-4 py-2 rounded-full text-sm md:text-base transition-colors ` +
                  (isActive
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white hover:bg-white/20')
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {project.categories.map((c) => (
                    <span key={c} className="rounded-full bg-black/60 px-2.5 py-1 text-xs text-white">
                      {c}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow"
                  >
                    Demo
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-semibold leading-snug">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
