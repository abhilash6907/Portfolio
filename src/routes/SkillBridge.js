import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import '../components/SkillBridgeStyles.css';
import sbShot from '../assets/WhatsApp Image 2025-10-30 at 4.06.38 PM.jpeg';

const SkillBridge = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="SKILLBRIDGE." text="Volunteer & NGO Matching Platform" />
      <div className="skillbridge-wrapper">
        <div className="sb-badges">
          <span className="sb-badge sb-badge-brand">Infosys Project</span>
        </div>
        <div className="sb-hero-card">
          <img src={sbShot} alt="SkillBridge dashboard screenshot" className="sb-image" />
          <div className="sb-image-caption">Dashboard snapshot (replace image with your real screenshot if needed)</div>
        </div>
        <section className="sb-section">
          <h2>Overview</h2>
          <p>
            SkillBridge is a full‑stack platform designed to connect volunteers with NGOs based on skills, interests, and opportunity metadata.
            The system supports secure multi‑role access, rich opportunity management, and upcoming real‑time communication features.
          </p>
        </section>
        <section className="sb-section">
          <h2>Key Features (Current & In Progress)</h2>
          <ul className="sb-list">
            <li><strong>Dual Roles:</strong> Separate onboarding & dashboards for <em>Volunteers</em> and <em>NGOs</em>.</li>
            <li><strong>Authentication & Profiles:</strong> Secure registration, login, and profile creation for both roles.</li>
            <li><strong>Opportunity CRUD:</strong> NGOs can create, update, categorize by skill, and delete opportunities.</li>
            <li><strong>Smart Filtering (WIP):</strong> Volunteers will filter by skill, location, and duration.</li>
            <li><strong>Data Model:</strong> Core tables: <code>Users</code>, <code>Opportunities</code>, <code>Applications</code>, <code>Messages</code>.</li>
            <li><strong>Real‑Time Chat (Planned):</strong> WebSocket based direct messaging between matched users.</li>
            <li><strong>Delivery Plan:</strong> 8‑week roadmap focusing next on matching logic & application processing workflow.</li>
          </ul>
        </section>
        <section className="sb-section">
          <h2>Upcoming Roadmap</h2>
          <ol className="sb-list">
            <li>Volunteer advanced search & saved filters</li>
            <li>Match scoring & recommendations</li>
            <li>Application review pipeline & status transitions</li>
            <li>Real‑time chat MVP (messages + typing indicators)</li>
            <li>Email / notification triggers</li>
            <li>Analytics dashboard for NGOs</li>
          </ol>
        </section>
        <section className="sb-section">
          <h2>Tech Stack (Planned / Partial)</h2>
          <ul className="sb-list inline">
            <li>React (UI)</li>
            <li>React Router</li>
            <li>REST / (future) GraphQL API</li>
            <li>WebSockets (chat)</li>
            <li>Relational DB (PostgreSQL/MySQL)</li>
            <li>Auth (JWT / Session)</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SkillBridge;
