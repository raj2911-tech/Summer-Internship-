import React from 'react';
import '../Css/About.css';

export default function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <section className="about-content">
                <p>
                    Hello! I am <b>Raj Ghoniya</b>, and I am currently doing a summer internship at
                   <b> Prelytix Private Limited</b>. <br/>I am interested in building web applications and
                    improving my development skills through practical projects.
                </p>

                <h2>Skills</h2>
                <ul>
                    <li>Java</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                </ul>

                <h2>Projects</h2>
                <dl>
                    <dt>Real-Time Backend Analytics & Monitoring Service</dt>
                    <dd>A MERN stack SaaS platform that allows developers and companies to monitor backend APIs in real time through a centralized dashboard.</dd>
                    <dd>Github link: <a href="https://github.com/raj2911-tech/Real-Time-Backend-Analytics-Monitoring-Service" target="_blank">Click Here</a></dd>
                    <dt>CampusHire</dt>
                    <dd>A full-stack Campus Placement Management System that connects students, colleges, and companies with role-based dashboards, job workflows, application tracking, and analytics-driven PDF reports.</dd>
                    <dd>Github link: <a href="https://github.com/raj2911-tech/CampusHire" target="_blank">Click Here</a></dd>
                </dl>
            </section>
        </div>
    );
}