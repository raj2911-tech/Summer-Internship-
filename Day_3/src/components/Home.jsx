import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Home.css';

const Home = () => {
  return (
    <main className="home">
      <section className="home-landing">
        <div className="home-content">
          <p className="home-title">Welcome to My Website</p>
          <p className="home-text">
            I am Raj Ghoniya
          </p>

          <div className="home-buttons">
            <div className="about-btn">
              <Link to="/about" className="btn btn-primary">About Me</Link>
            </div>

            <div className="contact-btn">
              <Link to="/contact" className="btn btn-secondary">Contact</Link>
            </div>
          </div>
        </div>

        <div className="home-card">
          <h2>Connect With Me</h2>
          <div className='connect-btns'>
            <a href="https://linkedin.com/in/raj-ghoniya-106506283" target="_blank">LinkedIn</a>
            <a href="https://github.com/raj2911-tech" target="_blank">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;