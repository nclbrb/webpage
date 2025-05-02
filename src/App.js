import React from 'react';
import { Link } from 'react-scroll';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaReact,
  FaLaravel
} from 'react-icons/fa';
import './App.css';
import "./components/Footer"

const NAV_ITEMS = ['home', 'about', 'education', 'projects'];

function App() {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand text-dark" href="#">Nicole Borabo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-center">
              {NAV_ITEMS.map(sec => (
                <li className="nav-item" key={sec}>
                  <Link
                    to={sec}
                    smooth
                    className="nav-link text-dark text-capitalize mx-2"
                  >
                    {sec}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link to="contact" smooth className="btn btn-success ms-3">
                  <FaEnvelope className="me-1" /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="hero d-flex align-items-center text-dark">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="hero-title">Hi, I’m Nicole S. Borabo</h1>
                <p className="hero-sub">I'm a 21-year-old third-year BSIT student at the University of Cabuyao. I enjoy UI/UX design more than backend development.</p>
                <p className="hero-sub">I believe that modern problems require modern solutions.</p>
                <div className="hero-ctas">
                  <Link to="projects" smooth className="btn btn-outline-success btn-lg me-3">
                    <FaReact className="me-1" /> Projects
                  </Link>
                  <Link to="about" smooth className="btn btn-success btn-lg">
                    About Me
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center mt-4 mt-lg-0">
                <img
                  src="https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-6/429681830_7569758999752206_3267471120401683563_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=endSchVP2mwQ7kNvwGWSWoY&_nc_oc=AdntmcSgt6VWL1YaJK__FEz7A79YoifiMyKSvWxdzrNHAbNAQaMhObUOQv6K3fAl8bc&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&_nc_gid=U-MEff3RYHkWQO8QIhNqFQ&oh=00_AfHnH35EsV3VHC8CpGcKevH0q3--Af3gnLLyva_2OYqt4A&oe=6818B0CA"
                  alt="Nicole Borabo"
                  className="hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-5 bg-light text-dark">
          <div className="container">
            <h2>About Me</h2>
            <p>
              Hello! I’m Nicole S. Borabo, a 21-year-old and a third-year BSIT student at the University of Cabuyao. I have a strong interest in designing websites with a focus on user experience. I believe that modern problems require modern solutions.
            </p>
          <p>
            I'm like UI/UX design and love crafting intuitive and beautiful web pages. I also enjoy listening to music in my free time, it helps me stay creative and inspired.
            My favorite color is green, and I enjoy spending time outdoors and just relaxing at home.
            I believe that modern problems require modern solutions.
          </p>
        </div>
      </section>

        {/* Education Section */}
        <section id="education" className="py-5 bg-white text-dark">
          <div className="container">
            <h2>Education</h2>
            <div className="education-item">
              <div className="project-card">
                <strong>Elementary:</strong> Mamatid Elementary School
              </div>
            </div>
            <div className="education-item">
              <div className="project-card">
                <strong>High School:</strong> Liceo De Mamatid
              </div>
            </div>
            <div className="education-item">
              <div className="project-card">
                <strong>Senior High School:</strong> Cabuyao Institute of Technology
              </div>
            </div>
            <div className="education-item">
              <div className="project-card">
                <strong>College:</strong> University of Cabuyao
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-5 bg-light text-dark">
          <div className="container">
            <h2>Projects</h2>
            <div className="about-card">
              <h5 className="text-success d-flex align-items-center">
                <FaReact /><span className="ms-2">Student-Level Websites</span>
              </h5>
              <p>These projects are about creating interactive and user-friendly websites designed to assist students in their daily academic activities.</p>
            </div>
            <div className="about-card">
              <h5 className="text-success d-flex align-items-center">
                <FaLaravel /><span className="ms-2">Klick Inc Project</span>
              </h5>
              <p>This project involved developing a task management system that allows teams to collaborate efficiently on tasks.</p>
            </div>
            <div className="about-card">
              <h5 className="text-success d-flex align-items-center">
                <FaLaravel /><span className="ms-2">E-commerce Shop</span>
              </h5>
              <p>For this project, I worked on an e-commerce website prototype where users can browse and buy products.</p>
            </div>
            <div className="about-card">
              <h5 className="text-success d-flex align-items-center">
                <FaLaravel /><span className="ms-2">Task Management</span>
              </h5>
              <p>A web app I developed to help users manage their tasks and stay organized.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5 bg-white text-dark">
          <div className="container">
            <h2>Contact</h2>
            <div className="contact-info">
              <div className="contact-card">
                <FaPhoneAlt className="text-success" />
                <span><strong>Phone:</strong> 123-457-896</span>
              </div>
              <div className="contact-card">
                <FaEnvelope className="text-success" />
                <span>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:borabonicole19@gmail.com" className="text-success">borabonicole19@gmail.com</a>
                </span>
              </div>
              <div className="contact-card">
                <FaFacebook className="text-success" />
                <span>
                  <strong>Facebook:</strong>{' '}
                  <a href="https://www.facebook.com/nikki.borabo" target="_blank" rel="noopener noreferrer" className="text-success">/nikki.borabo</a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 Nicole S. Borabo. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
