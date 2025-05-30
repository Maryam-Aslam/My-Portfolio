import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
<a href="https://sparkmarvels.com" target="_blank" rel="noopener noreferrer">
  <img src="/images/first-project.PNG" alt="Spark Marvels project" />
</a>
            </div>
            <div className="text-content">
              <h2>
                Spark Marvels – Tech Blog Website Focused on Gadgets, Laptops & Gaming Gear
              </h2>
              <p className="text-white-50 md:text-xl">
                A fully responsive and visually engaging WordPress website for tech enthusiasts.
                Features organized categories, recent posts, and a smooth user experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project"  ref={project2Ref}>
              <div>
                <a href="https://sparkmarvels.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/project-sec.PNG" alt="Facebook Clone" /> </a>

              </div>
              <h2>Facebook Clone</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div>
              
                <img src="/images/threeproject.PNG" alt="One Youth Project" />
              </div>
              <h2>One Youth – Empowerment Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
