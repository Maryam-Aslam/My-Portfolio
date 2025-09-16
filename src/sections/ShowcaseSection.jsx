import React, { useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Categories to mirror the reference section
const CATEGORIES = ['All', 'AI', 'Web 3.0', 'MERN', 'Other'];

// Sample projects (thumbnails exist in /public/images)
const PROJECTS = [
  {
    id: 'ai-avatars',
    title: 'AI Companion Avatars',
    categories: ['AI'],
    image: '/images/project1.png',
    demoUrl: 'https://example.com/demo/ai-avatars',
  },
  {
    id: 'ecommerce-store',
    title: 'Ecommerce Store',
    categories: ['MERN'],
    image: '/images/project2.png',
    demoUrl: 'https://example.com/demo/ecommerce',
  },
  {
    id: 'ai-image-gen',
    title: 'AI Image Generation App',
    categories: ['AI', 'MERN'],
    image: '/images/project3.png',
    demoUrl: 'https://example.com/demo/ai-image-gen',
  },
  {
    id: 'yariga-dashboard',
    title: 'Yariga Dashboard',
    categories: ['MERN'],
    image: '/images/project-sec.PNG',
    demoUrl: 'https://facebook-clone-frontend-project.vercel.app/',
  },
  {
    id: 'crowd-funding',
    title: 'Crowd Funding Web3.0',
    categories: ['Web 3.0'],
    image: '/images/threeproject.PNG',
    demoUrl: 'https://example.com/demo/crowd-funding',
  },
  {
    id: 'krypt-transfer',
    title: 'Krypt - Transfer Crypto Funds',
    categories: ['Web 3.0'],
    image: '/images/project1.png',
    demoUrl: 'https://example.com/demo/krypt',
  },
  {
    id: 'tech-blog',
    title: 'Spark Marvels – Tech Blog',
    categories: ['Other'],
    image: '/images/first-project.PNG',
    demoUrl: 'https://sparkmarvels.com',
  },
  {
    id: 'movie-site',
    title: 'Ceniflix Movie Website',
    categories: ['Other'],
    image: '/images/project2.png',
    demoUrl: 'https://example.com/demo/ceniflix',
  },
  {
    id: 'home-selling',
    title: 'Home Selling Website',
    categories: ['Other'],
    image: '/images/project3.png',
    demoUrl: 'https://example.com/demo/home-selling',
  },
  {
    id: 'nft-marketplace',
    title: 'Crypto Ket - NFT Marketplace',
    categories: ['Web 3.0'],
    image: '/images/project-sec.PNG',
    demoUrl: 'https://example.com/demo/nft-marketplace',
  },
  {
    id: 'portfolio-3d',
    title: '3D Portfolio',
    categories: ['Other'],
    image: '/images/threeproject.PNG',
    demoUrl: 'https://example.com/demo/3d-portfolio',
  },
  {
    id: 'shopi',
    title: 'Shopi - Commerce',
    categories: ['MERN'],
    image: '/images/project1.png',
    demoUrl: 'https://example.com/demo/shopi',
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
