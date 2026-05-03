import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.to('.hero-title', {
        xPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Background Text Parallax
      gsap.utils.toArray('.bg-text').forEach((text) => {
        gsap.to(text, {
          xPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: text.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Fade up elements
      gsap.utils.toArray('.fade-up').forEach((elem) => {
        gsap.from(elem, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
          },
        });
      });

      // About text reveal
      gsap.from('.about-text span', {
        opacity: 0.1,
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: true,
        },
      });

    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <nav>
        <div className="logo">
          <img src="/Logo.png" alt="Logo" style={{ height: '30px', width: 'auto', display: 'block' }} />
        </div>
        <div className="nav-links">
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#cases">Cases</a>
          <a href="#contact">Contact us</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="section hero">
        <div className="bg-text">MARKETING</div>
        <div className="container">
          <h1 className="hero-title">digital & marketing</h1>
          <div className="hero-sub fade-up">
            London-based full-service digital and marketing agency, specialising in creating impactful brand experiences and driving growth.
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (DARK) */}
      <section id="about" className="section section-dark about-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-text">AGENCY</div>
        <div className="container">
          <div className="about-text">
            <span>We </span><span>are </span><span>a </span><span>London-based, </span>
            <span>full-service </span><span>digital </span><span>and </span><span>marketing </span>
            <span>agency, </span><span>specialising </span><span>in </span><span>creating </span>
            <span>impactful </span><span>brand </span><span>experiences. </span><br/><br/>
            <span>We </span><span>take </span><span>a </span><span>personalised </span>
            <span>approach </span><span>to </span><span>each </span><span>project, </span>
            <span>ensuring </span><span>we </span><span>not </span><span>only </span>
            <span>meet, </span><span>but </span><span>exceed </span><span>your </span>
            <span>expectations.</span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section" style={{ minHeight: '100vh' }}>
        <div className="bg-text">SERVICES</div>
        <div className="container">
          <h2 className="fade-up" style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', marginBottom: '4rem' }}>Our Expertise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div className="fade-up">
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Digital Strategy</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>From intimate product launches to large-scale campaigns, we help brands shape their identity through targeted digital strategies.</p>
            </div>
            <div className="fade-up">
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Content Marketing</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>The talent we work with is carefully chosen, nurtured, and fully supported to ensure success in every creative collaboration.</p>
            </div>
            <div className="fade-up">
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>SEO & Analytics</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>Our attention to detail ensures the highest quality results, driving organic growth and measurable ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASES SECTION (BLUE) */}
      <section id="cases" className="section section-blue" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-text">WORK</div>
        <div className="container">
          <h2 className="fade-up" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', marginBottom: '2rem' }}>Selected Cases</h2>
          <div className="fade-up" style={{ fontSize: '1.5rem', maxWidth: '600px' }}>
            We've partnered with leading brands to deliver exceptional digital experiences. Explore our recent collaborations.
          </div>
        </div>
      </section>

      {/* FOOTER (DARK) */}
      <section id="contact" className="section section-dark footer">
        <div className="container">
          <div className="footer-huge fade-up">
            <a href="mailto:hello@digital.agency">Let's talk</a>
          </div>
          <div className="footer-bottom fade-up" style={{ marginTop: '8rem' }}>
            <div>© {new Date().getFullYear()} Digital Marketing Agency</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
            <div>London, UK</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
