import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import servicesBg from '../assets/demo-iamges/August Events/wb_our_services_back.jpg';
import img1 from '../assets/demo-iamges/August Events/image_1.jpg';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from('.services-hero h1', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      });

      gsap.from('.services-hero-desc', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });

      // Service list items
      gsap.utils.toArray('.service-list-item').forEach((item, i) => {
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: i * 0.08,
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
          },
        });
      });

      // Image parallax
      gsap.utils.toArray('.services-image-block img').forEach((img) => {
        gsap.to(img, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
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

  const services = [
    {
      title: 'Digital Strategy',
      desc: 'We develop comprehensive digital strategies tailored to your business goals, ensuring every campaign drives measurable results.',
    },
    {
      title: 'SEO & Search Marketing',
      desc: 'From technical SEO audits to content-driven strategies, we help your brand rank higher and attract qualified organic traffic.',
    },
    {
      title: 'Social Media Management',
      desc: 'We create and manage engaging social media content across all platforms, building communities and driving brand awareness.',
    },
    {
      title: 'Content Marketing',
      desc: 'Compelling storytelling through blogs, video, and multimedia content that resonates with your audience and drives conversions.',
    },
    {
      title: 'Paid Advertising',
      desc: 'Data-driven PPC campaigns across Google, Meta, LinkedIn and more, optimised for maximum ROI and audience reach.',
    },
    {
      title: 'Brand Identity & Design',
      desc: 'From logo design to complete brand guidelines, we create visual identities that stand out and connect with your audience.',
    },
    {
      title: 'Web Design & Development',
      desc: 'Custom websites built for performance, conversion, and user experience — from landing pages to full e-commerce solutions.',
    },
    {
      title: 'Email Marketing & Automation',
      desc: 'Strategic email campaigns and automated workflows that nurture leads, retain customers, and drive repeat business.',
    },
  ];

  return (
    <div ref={pageRef}>
      {/* ===== SERVICES HERO ===== */}
      <section className="services-hero" style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 3rem 6rem',
        background: 'var(--blue)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <h1 style={{
          fontSize: 'clamp(3.5rem, 10vw, 10rem)',
          color: 'var(--white)',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '-0.03em',
        }}>
          marketing<br />services
        </h1>
        <p className="services-hero-desc" style={{
          fontSize: '1.2rem',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.8)',
          maxWidth: '550px',
          marginTop: '2rem',
        }}>
          We deliver full-service digital marketing solutions that drive growth,
          build brand equity, and create lasting connections with your audience.
        </p>
      </section>

      {/* ===== IMAGE BLOCK ===== */}
      <div className="services-image-block" style={{
        height: '60vh',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img src={servicesBg} alt="Services" style={{
          width: '100%',
          height: '120%',
          objectFit: 'cover',
          position: 'absolute',
          top: '-10%',
        }} />
      </div>

      {/* ===== SERVICE LIST ===== */}
      <section style={{
        padding: '8rem 3rem',
        background: 'var(--black)',
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          marginBottom: '4rem',
          fontWeight: 800,
        }}>
          what we offer
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((service, i) => (
            <div
              key={i}
              className="service-list-item"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '3rem',
                padding: '2.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = '1rem';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = '0';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div style={{ flex: '0 0 50px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', paddingTop: '0.4rem' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  textTransform: 'none',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.5)',
                  maxWidth: '600px',
                }}>
                  {service.desc}
                </p>
              </div>
              <div style={{ 
                fontSize: '1.5rem', 
                color: 'rgba(255,255,255,0.2)', 
                paddingTop: '0.3rem',
                transition: 'color 0.3s ease',
              }}>
                →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA BLOCK ===== */}
      <section style={{
        padding: '8rem 3rem',
        background: 'var(--blue)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 6vw, 5rem)',
          marginBottom: '2rem',
          color: 'var(--white)',
        }}>
          ready to grow?
        </h2>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.8)',
          maxWidth: '600px',
          margin: '0 auto 3rem',
        }}>
          Let's discuss how we can help your brand reach its full potential
          through strategic digital marketing.
        </p>
        <a href="mailto:hello@blurocmedia.com" className="btn-outline" style={{
          borderColor: 'rgba(255,255,255,0.5)',
          fontSize: '1.1rem',
          padding: '1rem 2.5rem',
        }}>
          start a project →
        </a>
      </section>
    </div>
  );
}

export default Services;
