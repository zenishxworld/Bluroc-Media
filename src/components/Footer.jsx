import React from 'react';

function Footer() {
  return (
    <section id="contact" className="footer-section">
      <div className="footer-cta">
        <h2 className="reveal-up">
          <a href="mailto:hello@blurocmedia.com">start a project</a>
        </h2>
        <div className="footer-contact-row reveal-up">
          <a href="tel:+447555181094">+44 7555 181 094</a>
          <a href="mailto:hello@blurocmedia.com">hello@blurocmedia.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Bluroc Media. All rights reserved.</div>
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div>London, UK</div>
      </div>
    </section>
  );
}

export default Footer;
