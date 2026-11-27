
import "./Home.css";

function Home({ onLoginClick }) {
  return (
    <div className="home-page">

      <header className="navbar">
        <div className="logo">
          🛡️ Disaster Management
          <span>System</span>
        </div>

        <nav>
          <a href="#home">🏠 Home</a>
          <a href="#report">📢 Report Disaster</a>
          <a href="#track">📍 Track Reports</a>
          <a href="#resources">📦 Resources</a>
          <a href="#about">About Us</a>
        </nav>

        <div className="nav-buttons">
          <button onClick={onLoginClick}>Login</button>
          <button className="signup" onClick={onLoginClick}>
            Signup
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            Together for a
            <span>Safer Tomorrow</span>
          </h1>

          <h2>Report • Respond • Recover</h2>

          <p>
            Disaster Management System helps you report
            incidents, track relief efforts and get help
            during emergencies.
          </p>

          <button className="report-btn" onClick={onLoginClick}>
            📢 Report a Disaster →
          </button>
        </div>
      </section>

      <section className="alert">
        ⚠️ Emergency Alert:
        Heavy rains expected in coastal areas.
        Stay alert and follow official updates.
      </section>

      <section className="services">
        <div className="service-card pink" id="report">
          <h2>📢</h2>
          <h3>Report Disaster</h3>
          <p>Inform about affected areas quickly.</p>
          <button onClick={onLoginClick}>Report Now →</button>
        </div>

        <div className="service-card green" id="track">
          <h2>📍</h2>
          <h3>Track Reports</h3>
          <p>Check the status of your reports.</p>
          <button onClick={onLoginClick}>Track Now →</button>
        </div>

        <div className="service-card orange" id="resources">
          <h2>📦</h2>
          <h3>Manage Resources</h3>
          <p>Allocate resources efficiently.</p>
          <button onClick={onLoginClick}>Manage →</button>
        </div>

        <div className="service-card purple">
          <h2>👥</h2>
          <h3>Volunteer Support</h3>
          <p>Join hands to help others.</p>
          <button onClick={onLoginClick}>Volunteer →</button>
        </div>
      </section>

      <footer id="about">
        <div>🤝 Save Lives <p>Be Prepared</p></div>
        <div>🛡️ Reduce Damage <p>Stay Alert</p></div>
        <div>🌍 Build a Safer Community <p>Together We Can</p></div>
      </footer>

    </div>
  );
}

export default Home;
