import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonList,
  IonItem,
  IonButton
} from '@ionic/react';

import './Home.css';

const sections = ['About', 'Services', 'Resources', 'News', 'Contact'];

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSmoothScroll = (id: string) => {
    requestAnimationFrame(() => {
      if (id === 'main-content') {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  };

  return (
    <IonPage id="main-content">
      {isMobile && (
        <IonMenu side="start" contentId="main-content">
          <IonContent>
            <IonList>
              {sections.map((item) => (
                <IonItem button key={item} onClick={() => handleSmoothScroll(item.toLowerCase())}>{item}</IonItem>
              ))}
            </IonList>
          </IonContent>
        </IonMenu>
      )}

      <IonHeader className="header">
        <IonToolbar className="toolbar">
          <div className="header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div
              onClick={() => handleSmoothScroll('main-content')}
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              role="button"
              aria-label="Go to top"
            >
              <img
                src="https://storage.googleapis.com/a1aa/image/b0e1c785-fba5-43c9-9f4d-bbb857120f83.jpg"
                alt="BHWS Logo"
                style={{ height: '40px', marginRight: '10px' }}
              />
              <span style={{ color: '#1E40AF', fontWeight: 'bold', fontSize: '1.5rem' }}>BHWS</span>
            </div>

            <IonButtons slot="end">
              {!isMobile && (
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => handleSmoothScroll(section.toLowerCase())}
                      style={{ background: 'none', border: 'none', fontWeight: 600, color: '#1f2937', cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#2563EB')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#1f2937')}
                    >
                      {section}
                    </button>
                  ))}
                </div>
              )}
              {isMobile && <IonMenuButton />}
            </IonButtons>
          </div>
        </IonToolbar>
      </IonHeader>


      <IonContent className="main-content">
        <section className="hero" aria-label="Hero section">
          <div className="hero-inner">
            <div className="hero-text">
              <h1 className="hero-title">
                Better Health for Women and Children
              </h1>
              <p className="hero-subtitle">
                BHWS is dedicated to improving maternal health through education, support, and quality care. Join us in empowering mothers and families for a healthier tomorrow.
              </p>
              <a href="#services" className="hero-button">
                Explore Our Services
              </a>
            </div>
            <div className="hero-image">
              <img
                src="https://storage.googleapis.com/a1aa/image/d0b6f8ba-8258-426c-760c-75fb8988deab.jpg"
                alt="Maternal care hero image"
                className="hero-img"
                width="600"
                height="400"
              />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <h2 className="section-title">About BHWS</h2>
            <p className="section-text">
              BHWS (Better Health for Women and Children) is a community-driven organization focused on enhancing maternal health outcomes through comprehensive healthcare services, education, and advocacy. We believe every mother deserves access to quality care and support during pregnancy, childbirth, and beyond.
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <img src="https://storage.googleapis.com/a1aa/image/c1c4dd36-578a-4080-031c-0abe4c5e54cb.jpg" alt="Prenatal care icon" className="card-icon" width="100" height="100" />
              <h3 className="card-title">Prenatal Care</h3>
              <p className="card-text">Comprehensive checkups and guidance to ensure a healthy pregnancy for mother and baby.</p>
            </div>
            <div className="card">
              <img src="https://storage.googleapis.com/a1aa/image/3ef130b0-abeb-4db0-ea7b-6d93c5636783.jpg" alt="Nutrition support icon" className="card-icon" width="100" height="100" />
              <h3 className="card-title">Nutrition Support</h3>
              <p className="card-text">Personalized nutrition plans and counseling to promote maternal and infant health.</p>
            </div>
            <div className="card">
              <img src="https://storage.googleapis.com/a1aa/image/87b78c2f-84bc-4710-c58b-c7347a1fcecb.jpg" alt="Postnatal care icon" className="card-icon" width="100" height="100" />
              <h3 className="card-title">Postnatal Care</h3>
              <p className="card-text">Support and resources for mothers and newborns during the critical postpartum period.</p>
            </div>
          </div>
        </section>

        <section id="services" className="section-alt">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <img src="https://storage.googleapis.com/a1aa/image/6e7f48ef-cfb1-4a6e-e9d8-335d81555305.jpg" alt="Consultation" className="card-img" />
              <h3 className="card-title">Maternal Health Consultations</h3>
              <p className="card-text">Expert medical consultations to monitor and support your pregnancy journey.</p>
            </div>
            <div className="card">
              <img src="https://storage.googleapis.com/a1aa/image/bbe74762-920c-4753-4d9d-3c4c7b19b71b.jpg" alt="Childbirth class" className="card-img" />
              <h3 className="card-title">Childbirth Preparation Classes</h3>
              <p className="card-text">Classes designed to prepare mothers and families for a safe and confident delivery.</p>
            </div>
            <div className="card">
              <img src="https://storage.googleapis.com/a1aa/image/1e32e697-a16f-4fe3-ff90-a85284395063.jpg" alt="Breastfeeding support" className="card-img" />
              <h3 className="card-title">Breastfeeding Support</h3>
              <p className="card-text">Guidance and assistance to help mothers successfully breastfeed their babies.</p>
            </div>
          </div>
        </section>

        <section id="resources" className="section">
          <div className="section-header">
            <h2 className="section-title">Resources</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <h3 className="card-title">Educational Articles</h3>
              <ul className="list">
                <li><a href="#">Nutrition Tips for Expecting Mothers</a></li>
                <li><a href="#">Understanding Prenatal Screening Tests</a></li>
                <li><a href="#">Postpartum Mental Health Awareness</a></li>
                <li><a href="#">Safe Exercise During Pregnancy</a></li>
                <li><a href="#">Breastfeeding Benefits and Techniques</a></li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">Downloadable Guides</h3>
              <ul className="list">
                <li><a href="#">Pregnancy Week-by-Week Guide (PDF)</a></li>
                <li><a href="#">Newborn Care Essentials (PDF)</a></li>
                <li><a href="#">Breastfeeding Handbook (PDF)</a></li>
                <li><a href="#">Postpartum Recovery Tips (PDF)</a></li>
                <li><a href="#">Emergency Contact List (PDF)</a></li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">Video Tutorials</h3>
              <ul className="list">
                <li><a href="#">Prenatal Yoga for Beginners</a></li>
                <li><a href="#">How to Prepare for Labor</a></li>
                <li><a href="#">Breastfeeding Positions and Tips</a></li>
                <li><a href="#">Newborn Bathing Techniques</a></li>
                <li><a href="#">Postpartum Exercises</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="news" className="section-alt">
          <div className="section-header">
            <h2 className="section-title">Latest News</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <img src="https://storage.googleapis.com/a1aa/image/d468206a-7cd2-406c-7c13-056e2759a7fa.jpg" alt="Conference" className="card-img" />
              <h3 className="card-title">BHWS Hosts Annual Maternal Health Conference</h3>
              <p className="card-text">Bringing together experts and community leaders to discuss innovations in maternal care.</p>
              <time className="card-time">May 10, 2024</time>
            </div>
            <div className="card">
              <img src="https://storage.googleapis.com/a1aa/image/8d3fbca9-cc0c-4282-81e7-bf0fcdda5028.jpg" alt="Prenatal care" className="card-img" />
              <h3 className="card-title">Launch of New Prenatal Care Program</h3>
              <p className="card-text">BHWS introduces a comprehensive prenatal program to support expecting mothers.</p>
              <time className="card-time">April 22, 2024</time>
            </div>
            <div className="card">
              <img src="https://storage.googleapis.com/a1aa/image/35e33dc6-5f8c-4840-e637-6fbe6749f08a.jpg" alt="Breastfeeding awareness" className="card-img" />
              <h3 className="card-title">Breastfeeding Awareness Campaign Success</h3>
              <p className="card-text">Community outreach efforts have increased breastfeeding rates by 20% this year.</p>
              <time className="card-time">March 15, 2024</time>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-header">
            <h2 className="section-title">Contact Us</h2>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" name="name" placeholder="Your full name" required />
              <input type="email" name="email" placeholder="you@example.com" required />
              <textarea name="message" rows={5} placeholder="Write your message here" required></textarea>
              <button type="submit" className="hero-button">Send Message</button>
            </form>
            <div className="contact-info">
              <p><i className="fas fa-phone-alt"></i> +1 (555) 123-4567</p>
              <p><i className="fas fa-envelope"></i> contact@bhws.org</p>
              <p><i className="fas fa-map-marker-alt"></i> 123 Health St, Wellness City, USA</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© 2024 BHWS. All rights reserved.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default Home;
