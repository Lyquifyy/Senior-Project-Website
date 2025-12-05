import React from 'react'
import webDashboard from '/assets/WebDashboard.png'
import sumoImage from '/assets/SUMOImage.png'
import carlaImage from '/assets/CarlaImage.png'
import semiLanes from '/assets/SemiLanes.png'

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <h1 className="logo">Carbon Weighted Traffic Control</h1>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#team">Team</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div>
              <h2>Reduce congestion. Prioritize low-carbon routes.</h2>
              <p className="lead">A traffic control system that weights signal timing by carbon impact and real-time traffic data.</p>
              <a className="btn" href="#features">Learn more</a>
            </div>
            <div className="media-placeholder">
              <img src={webDashboard} alt="Web Dashboard" />
            </div>
          </div>
        </section>

        <section id="problem" className="container problem">
          <h3>The Problem</h3>
          <p className="section-desc">Urban traffic congestion increases emissions and waste valuable time. Current traffic control systems don't account for environmental impact, missing opportunities to route vehicles through lower-carbon pathways.</p>
          <ul>
            <li>Traditional systems optimize for speed, not emissions</li>
            <li>Peak-hour congestion contributes significantly to city carbon footprint</li>
            <li>Lack of real-time carbon awareness in signal timing decisions</li>
          </ul>
        </section>

        <section id="objectives" className="container objectives">
          <h3>Project Objectives</h3>
          <div className="obj-grid">
            <div className="obj-item">
              <h4>1. Design Carbon-Weighted Algorithm</h4>
              <p>Create a signal timing algorithm that incorporates vehicle emissions data and route optimization.</p>
            </div>
            <div className="obj-item">
              <h4>2. Build Simulation Framework</h4>
              <p>Integrate SUMO and CARLA for traffic simulation and 3D visualization of carbon-optimized routing.</p>
            </div>
            <div className="obj-item">
              <h4>3. Real-time Web Dashboard</h4>
              <p>Display live traffic metrics, emissions data, and system performance analytics.</p>
            </div>
            <div className="obj-item">
              <h4>4. Measure Impact</h4>
              <p>Compare traditional vs. carbon-weighted approaches and quantify environmental benefits.</p>
            </div>
          </div>
        </section>

        <section id="features" className="container features">
          <h3>Key Technologies</h3>
          <div className="feature-grid">
            <div className="feature">
              <h4>SUMO</h4>
              <p>Microscopic traffic flow simulation. Handles vehicle dynamics, traffic patterns, and emissions calculations for large-scale traffic networks.</p>
            </div>
            <div className="feature">
              <h4>CARLA</h4>
              <p>3D autonomous driving simulator. Provides visual representation of traffic scenarios and co-simulates with SUMO for realistic vehicle behavior.</p>
            </div>
            <div className="feature">
              <h4>Web Dashboard</h4>
              <p>Real-time monitoring interface displaying traffic state, emissions metrics, signal timings, and comparative analytics.</p>
            </div>
          </div>
        </section>

        <section id="team" className="container team">
          <h3>Team</h3>
          <div className="team-grid">
            <div className="team-member">
              <strong>Ramses Balderas</strong>
            </div>
            <div className="team-member">
              <strong>Claire Dreher</strong>
            </div>
            <div className="team-member">
              <strong>Cooper Cruzeiro</strong>
            </div>
            <div className="team-member">
              <strong>Zander Erwin</strong>
            </div>
          </div>
        </section>

        <section id="gallery" className="container gallery">
          <h3>System Architecture & Results</h3>

          <div className="media-grid">
            <div className="media-item">
              <img src={sumoImage} alt="SUMO Traffic Simulation" />
              <p className="caption"><strong>SUMO Simulation</strong> — Microscopic traffic flow analysis with carbon-weighted routing optimization</p>
            </div>
            <div className="media-item">
              <img src={carlaImage} alt="CARLA 3D Traffic" />
              <p className="caption"><strong>CARLA 3D Visualization</strong> — Real-time 3D rendering with co-simulation data from SUMO</p>
            </div>
            <div className="media-item">
              <img src={webDashboard} alt="Emission Data Dashboard" />
              <p className="caption"><strong>Live Dashboard</strong> — Real-time emissions, traffic metrics, and signal timing feedback</p>
            </div>
            <div className="media-item">
              <img src={semiLanes} alt="Lane Configuration" />
              <p className="caption"><strong>Signal Optimization</strong> — Lane-level analysis showing carbon-aware timing allocation</p>
            </div>
          </div>
        </section>

        <section id="results" className="container results">
          <h3>Preliminary Results</h3>
          <div className="results-grid">
            <div className="result">
              <h4>Emissions Reduction</h4>
              <p>Carbon-weighted signal timing reduced vehicle emissions by <strong>X%</strong> compared to baseline adaptive signals.</p>
            </div>
            <div className="result">
              <h4>Throughput Maintained</h4>
              <p>System maintained comparable traffic throughput while prioritizing environmentally efficient routes.</p>
            </div>
            <div className="result">
              <h4>Scalability</h4>
              <p>Algorithm scales to handle city-sized networks with thousands of vehicles and intersections in real time.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="container contact">
          <h3>Next Steps & Improvements</h3>
          <ul>
            <li><strong>Machine Learning Integration:</strong> Implement predictive models to forecast traffic patterns and optimize signals proactively</li>
            <li><strong>Multi-city Deployment:</strong> Adapt and test the system in real traffic networks</li>
            <li><strong>Vehicle-to-Infrastructure (V2I):</strong> Integrate with connected vehicles for direct emissions feedback</li>
            <li><strong>Policy Integration:</strong> Work with municipalities to incorporate carbon-weighted objectives into urban planning</li>
          </ul>
        </section>

        <section id="info" className="container info">
          <h3>Project Information</h3>
          <div className="info-grid">
            <div className="info-card">
              <h4>Repository</h4>
              <p><a href="https://github.com/Lyquifyy/Senior-Project.git" target="_blank" rel="noopener noreferrer">GitHub: Senior-Project</a></p>
            </div>
            <div className="info-card">
              <h4>Technologies Used</h4>
              <p>Python • SUMO • CARLA • React • Web APIs • Real-time Data Processing</p>
            </div>
            <div className="info-card">
              <h4>Duration</h4>
              <p>Senior Year Capstone Project | [Academic Year 2024-2025]</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Carbon Weighted Traffic Control</div>
      </footer>
    </div>
  )
}
