
import { useState } from "react";
import ReportDisaster from "./ReportDisaster";
import TrackReports from "./TrackReports";
import "./UserDashboard.css";

function UserDashboard({ onLogout }) {
  const [page, setPage] = useState("home");

  return (
    <div className="user-dashboard">

      <header className="user-header">
        <div className="user-logo">
          🛡️ Disaster Management
          <span>System</span>
        </div>

        <nav className="user-nav">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("report")}>Report Disaster</button>
          <button onClick={() => setPage("track")}>Track Reports</button>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </nav>
      </header>

      {page === "home" && (
        <>
          <section className="user-hero">
            <div className="user-hero-content">
              <h1>Welcome to User Dashboard</h1>
              <h2>Together for a Safer Tomorrow</h2>
              <p>
                Report disasters, track your reports and
                stay informed during emergencies.
              </p>

              <button onClick={() => setPage("report")}>
                Report a Disaster →
              </button>
            </div>
          </section>

          <section className="user-alert">
            ⚠️ Emergency Awareness: Stay alert and follow
            official disaster management updates.
          </section>

          <h2 className="section-heading">
            Disaster Management Services
          </h2>

          <section className="user-cards">

            <div className="user-card card-red">
              <img
                src="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600"
                alt="Flood disaster"
              />
              <h3>🌊 Report Disaster</h3>
              <p>Report floods and other emergency incidents.</p>
              <button onClick={() => setPage("report")}>
                Report Now →
              </button>
            </div>

            <div className="user-card card-green">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600"
                alt="Landscape"
              />
              <h3>📍 Track Reports</h3>
              <p>Check the status of your submitted reports.</p>
              <button onClick={() => setPage("track")}>
                Track Now →
              </button>
            </div>

            <div className="user-card card-orange">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600"
                alt="Relief supplies"
              />
              <h3>📦 Relief Support</h3>
              <p>Learn about emergency relief and resources.</p>
              <button onClick={() => setPage("track")}>
                View Reports →
              </button>
            </div>

            <div className="user-card card-purple">
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600"
                alt="Community support"
              />
              <h3>👥 Community Support</h3>
              <p>Work together to support affected people.</p>
              <button onClick={() => setPage("report")}>
                Get Started →
              </button>
            </div>

          </section>

          <footer className="user-footer">
            <div>🤝 Save Lives <p>Be Prepared</p></div>
            <div>🛡️ Reduce Damage <p>Stay Alert</p></div>
            <div>🌍 Build a Safer Community <p>Together We Can</p></div>
          </footer>
        </>
      )}

      {page === "report" && (
        <div className="dashboard-content">
          <ReportDisaster />
        </div>
      )}

      {page === "track" && (
        <div className="dashboard-content">
          <TrackReports />
        </div>
      )}

    </div>
  );
}

export default UserDashboard;
