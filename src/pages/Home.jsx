import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Images
import heroImg from '../assets/demo-iamges/August Events/33333.jpg';
import eventsImg from '../assets/demo-iamges/August Events/our_services_events_.jpg';
import marketingImg from '../assets/demo-iamges/August Events/our_services_marketi.jpg';
import work1 from '../assets/demo-iamges/August Events/Screenshot_2026-03-1.png';
import work2 from '../assets/demo-iamges/August Events/Screenshot_2026-03-2.png';
import work3 from '../assets/demo-iamges/August Events/evoplay_cover.jpg';
import work4 from '../assets/demo-iamges/August Events/DSC05229_2024-02-09T.jpg';
import work5 from '../assets/demo-iamges/August Events/Rectangle_85_1.jpg';
import work6 from '../assets/demo-iamges/August Events/Rectangle_86.jpg';
import work7 from '../assets/demo-iamges/August Events/Rectangle_87.jpg';
import work8 from '../assets/demo-iamges/August Events/telegram-cloud-photo.jpg';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation on load
      gsap.from('.hero-huge-text', {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      });

      gsap.from('.hero-tagline', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      });

      gsap.from('.hero-image-float', {
        scale: 0.8,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        delay: 0.5,
      });

      gsap.from('.hero-cta-row', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1,
      });

      // Hero parallax on scroll
      gsap.to('.hero-huge-text', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.hero-image-float', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // About text word-by-word reveal
      gsap.from('.about-home-text span', {
        opacity: 0.08,
        stagger: 0.04,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-home',
          start: 'top 65%',
          end: 'center 50%',
          scrub: true,
        },
      });

      gsap.from('.about-home-link', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-home-link',
          start: 'top 90%',
        },
      });

      // Service cards parallax
      gsap.utils.toArray('.service-card-bg img').forEach((img) => {
        gsap.to(img, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: img.closest('.service-card'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      gsap.utils.toArray('.service-card-content').forEach((content) => {
        gsap.from(content, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content.closest('.service-card'),
            start: 'top 70%',
          },
        });
      });

      // Works section
      gsap.from('.works-header', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.works-section',
          start: 'top 75%',
        },
      });

      gsap.utils.toArray('.work-item').forEach((item, i) => {
        gsap.from(item, {
          y: 80,
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

      // Approach cards
      gsap.utils.toArray('.approach-card').forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });

      // Footer CTA
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

  const aboutWords = "We are a London-based, full-service digital marketing agency, specialising in creating impactful brand experiences. We take a personalised approach to each project, ensuring we not only meet, but exceed your expectations.".split(' ');

  return (
    <div ref={pageRef}>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-registered">®</div>
        <div className="hero-image-float">
          <img src={heroImg} alt="Creative event experience" />
        </div>
        <div className="hero-huge-text">Bluroc</div>
        <div className="hero-subtitle-row">
          <div className="hero-tagline">
            <span className="dot"></span>
            digital & marketing
            <br />
            immersive experiences
          </div>
          <div className="hero-subtitle">
            From ideation,
            <br />to activation,
            <br />to amplification
          </div>
        </div>
        <div className="hero-cta-row">
          <a href="mailto:hello@blurocmedia.com" className="btn-outline">get in touch</a>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="marquee-section">
        <div className="marquee-track">
          <span>Digital Strategy</span>
          <span>•</span>
          <span>Brand Design</span>
          <span>•</span>
          <span>SEO & Analytics</span>
          <span>•</span>
          <span>Content Marketing</span>
          <span>•</span>
          <span>Social Media</span>
          <span>•</span>
          <span>Web Development</span>
          <span>•</span>
          <span>Digital Strategy</span>
          <span>•</span>
          <span>Brand Design</span>
          <span>•</span>
          <span>SEO & Analytics</span>
          <span>•</span>
          <span>Content Marketing</span>
          <span>•</span>
          <span>Social Media</span>
          <span>•</span>
          <span>Web Development</span>
          <span>•</span>
        </div>
      </div>

      {/* ===== ABOUT (Home) ===== */}
      <section className="about-home">
        <div className="about-home-text">
          {aboutWords.map((word, i) => (
            <span key={i}>{word} </span>
          ))}
        </div>
        <Link to="/about" className="about-home-link">
          more about us →
        </Link>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className="services-section">
        <div className="service-card">
          <div className="service-card-bg">
            <img src={eventsImg} alt="Events services" />
          </div>
          <div className="service-card-content">
            <div className="service-card-label">Our Services</div>
            <h2>digital strategy</h2>
            <p>
              From intimate brand launches to large-scale digital campaigns, we help brands
              shape their identity through data-driven digital strategies and creative execution.
            </p>
            <Link to="/services" className="btn-outline">explore →</Link>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-bg">
            <img src={marketingImg} alt="Marketing services" />
          </div>
          <div className="service-card-content">
            <div className="service-card-label">Our Services</div>
            <h2>marketing services</h2>
            <p>
              Our attention to detail, from design to execution, ensures the highest quality results.
              The talent we work with is carefully chosen, nurtured, and fully supported.
            </p>
            <Link to="/services" className="btn-outline">explore →</Link>
          </div>
        </div>
      </section>

      {/* ===== WORKS ===== */}
      <section id="works" className="works-section">
        <div className="works-header">
          <h2>selected works</h2>
        </div>

        <div className="works-grid">
          <div className="work-item featured">
            <img src={work1} alt="N1 Partners — Brand activation" />
            <div className="work-item-overlay">
              <div className="work-item-title">N1 Partners</div>
              <div className="work-item-desc">Brand Activation & Booth Design</div>
            </div>
          </div>

          <div className="work-item">
            <img src={work5} alt="GGATE — Night Out Event" />
            <div className="work-item-overlay">
              <div className="work-item-title">GGATE</div>
              <div className="work-item-desc">Night Out Event Experience</div>
            </div>
          </div>

          <div className="work-item">
            <img src={work6} alt="Club Event — Immersive Experience" />
            <div className="work-item-overlay">
              <div className="work-item-title">Club Experience</div>
              <div className="work-item-desc">Immersive Night Event</div>
            </div>
          </div>

          <div className="work-item">
            <img src={work3} alt="Evoplay — Racing Event" />
            <div className="work-item-overlay">
              <div className="work-item-title">Evoplay</div>
              <div className="work-item-desc">Racing Event Activation</div>
            </div>
          </div>

          <div className="work-item">
            <img src={work4} alt="Growo Partners — Art Installation" />
            <div className="work-item-overlay">
              <div className="work-item-title">Growo Partners</div>
              <div className="work-item-desc">Art Installation & Branding</div>
            </div>
          </div>

          <div className="work-item featured">
            <img src={work2} alt="Because We Can — LED Ring" />
            <div className="work-item-overlay">
              <div className="work-item-title">Because We Can</div>
              <div className="work-item-desc">LED Ring Installation</div>
            </div>
          </div>

          <div className="work-item">
            <img src={work7} alt="Creative Workshop" />
            <div className="work-item-overlay">
              <div className="work-item-title">Creative Workshop</div>
              <div className="work-item-desc">Brand Collaboration</div>
            </div>
          </div>

          <div className="work-item">
            <img src={work8} alt="Betwinner — Booth Design" />
            <div className="work-item-overlay">
              <div className="work-item-title">Betwinner</div>
              <div className="work-item-desc">Exhibition Booth Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section className="approach-section">
        <div className="approach-text reveal-up">
          Our attention to detail, from design to execution, ensures the highest quality results.
          The talent we work with is carefully chosen, nurtured, and fully supported to ensure their
          success in every campaign and collaboration.
        </div>

        <div className="approach-grid">
          <div className="approach-card">
            <h3>Strategic Planning</h3>
            <p>We dive deep into your brand's DNA to develop strategies that align with your business objectives and resonate with your target audience.</p>
          </div>
          <div className="approach-card">
            <h3>Creative Execution</h3>
            <p>From concept to delivery, our creative team crafts compelling visual narratives that captivate audiences and drive measurable engagement.</p>
          </div>
          <div className="approach-card">
            <h3>Data-Driven Results</h3>
            <p>We leverage analytics and insights to continuously optimise campaigns, ensuring maximum ROI and sustainable growth for your brand.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
