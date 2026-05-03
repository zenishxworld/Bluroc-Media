import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import aboutCenter from '../assets/demo-iamges/August Events/about_center_1.jpg';
import aboutRight from '../assets/demo-iamges/August Events/about_right.jpg';
import photoImg from '../assets/demo-iamges/August Events/photo.jpg';
import rect137 from '../assets/demo-iamges/August Events/Rectangle_137.jpg';
import rect138 from '../assets/demo-iamges/August Events/Rectangle_138.jpg';
import rect139 from '../assets/demo-iamges/August Events/Rectangle_139.jpg';
import rect140 from '../assets/demo-iamges/August Events/Rectangle_140.jpg';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.about-hero h1', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      });

      // Intro text
      gsap.from('.about-intro-text', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-intro',
          start: 'top 70%',
        },
      });

      gsap.from('.about-intro-desc', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.about-intro',
          start: 'top 70%',
        },
      });

      // Images parallax
      gsap.utils.toArray('.about-img-tall img, .about-img-item img').forEach((img) => {
        gsap.from(img, {
          scale: 1.15,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
          },
        });
      });

      // Gallery images fade in
      gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        });
      });

      // Process steps
      gsap.utils.toArray('.process-step').forEach((step, i) => {
        gsap.from(step, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.08,
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          },
        });
      });

      // Process green line draw
      gsap.from('.process-timeline::before', {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: {
          trigger: '.process-timeline',
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: true,
        },
      });

      // Footer
      gsap.utils.toArray('.footer-section .reveal-up').forEach((elem) => {
        gsap.from(elem, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
          },
        });
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* ===== ABOUT HERO ===== */}
      <section className="about-hero">
        <h1>about us</h1>
      </section>

      {/* ===== INTRO ===== */}
      <section className="about-intro">
        <div className="about-intro-grid">
          <div className="about-intro-text">
            We are a London-based, full-service digital marketing agency, specialising in creating impactful brand experiences and driving measurable growth.
          </div>
          <div className="about-intro-desc">
            <p>
              Our team brings together strategic thinkers, creative minds, and technical experts 
              who are passionate about helping brands succeed in the digital landscape. We believe 
              that every brand has a unique story to tell, and we're here to help you tell it in 
              the most compelling way possible.
            </p>
            <br />
            <p>
              We take a personalised approach to each project, ensuring we not only meet, but 
              exceed your expectations. Our attention to detail, from design to execution, ensures 
              the highest quality results. The talent we work with is carefully chosen, nurtured, 
              and fully supported to ensure their success in every campaign and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ABOUT IMAGES ===== */}
      <section className="about-images">
        <div className="about-images-grid">
          <div className="about-img-tall" style={{ height: '600px' }}>
            <img src={aboutCenter} alt="Team at work" style={{ height: '100%' }} />
          </div>
          <div className="about-img-right">
            <div className="about-img-item" style={{ height: '290px' }}>
              <img src={aboutRight} alt="Creative workspace" style={{ height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="about-img-item" style={{ height: '290px' }}>
              <img src={photoImg} alt="Live performance" style={{ height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section style={{ padding: '0 3rem 8rem', background: 'var(--black)' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 4rem)', 
          marginBottom: '3rem',
          fontWeight: 800
        }}>
          our portfolio
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }}>
          <div className="gallery-item" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src={rect137} alt="Neon sign" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="gallery-item" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src={rect138} alt="Venue interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="gallery-item" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src={rect139} alt="Blue lights" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="gallery-item" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src={rect140} alt="Neon installation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process-section">
        <h2>how we work</h2>

        <div className="process-timeline">
          <div className="process-step">
            <div className="process-step-number">01</div>
            <div className="process-step-content">
              <h3>Discovery & Research</h3>
              <p>We start by understanding your brand, audience, and goals. Through in-depth research and analysis, we uncover insights that form the foundation of our strategy.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-step-number">02</div>
            <div className="process-step-content">
              <h3>Strategy Development</h3>
              <p>We craft a tailored digital strategy that aligns with your objectives, identifying the right channels, messaging, and tactics to maximise impact and ROI.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-step-number">03</div>
            <div className="process-step-content">
              <h3>Creative Design</h3>
              <p>Our design team brings the strategy to life through compelling visuals, brand assets, and creative concepts that resonate with your target audience.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-step-number">04</div>
            <div className="process-step-content">
              <h3>Content Production</h3>
              <p>From photography and video to copywriting and social content, we produce high-quality assets that tell your brand story across every touchpoint.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-step-number">05</div>
            <div className="process-step-content">
              <h3>Campaign Execution</h3>
              <p>We launch and manage campaigns with precision, monitoring performance in real-time and making data-driven optimisations to ensure success.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-step-number">06</div>
            <div className="process-step-content">
              <h3>Analysis & Growth</h3>
              <p>Post-campaign, we deliver comprehensive reports and insights, identifying opportunities for continuous improvement and sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
