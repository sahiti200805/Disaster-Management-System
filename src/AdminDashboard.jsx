
import { useEffect, useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard({ onLogout }) {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  function loadReports() {
    const saved = JSON.parse(
      localStorage.getItem("disasterReports") || "[]"
    );
    setReports(saved);
  }

  useEffect(() => {
    loadReports();
  }, []);

  function updateStatus(id, newStatus) {
    const updated = reports.map((r) =>
      r.id === id ? { ...r, status: newStatus } : r
    );

    localStorage.setItem("disasterReports", JSON.stringify(updated));
    setReports(updated);
  }

  function deleteReport(id) {
    if (!window.confirm("Are you sure you want to delete this report?")) {
      return;
    }

    const updated = reports.filter((r) => r.id !== id);

    localStorage.setItem("disasterReports", JSON.stringify(updated));
    setReports(updated);
  }

  const filteredReports = reports.filter((r) => {
    const matchesSearch = (r.location || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || r.type === filter;

    return matchesSearch && matchesFilter;
  });

  const pending = reports.filter(
    (r) => (r.status || "Pending") === "Pending"
  ).length;

  const approved = reports.filter(
    (r) => r.status === "Approved"
  ).length;

  const resolved = reports.filter(
    (r) => r.status === "Resolved"
  ).length;

  return (
    <div className="admin-dashboard">

      <header className="admin-header">
        <h2>🛡️ Disaster Management System</h2>
        <button onClick={onLogout}>Logout</button>
      </header>

      <main className="admin-content">

        <div className="admin-welcome">
          <h1>Welcome Admin 👋</h1>
          <p>Manage and monitor all disaster reports.</p>
        </div>

        <h2 className="admin-section-title">
          Dashboard Overview
        </h2>

        <div className="admin-stats">
          <div className="admin-stat total">
            <h2>{reports.length}</h2>
            <p>Total Reports</p>
          </div>

          <div className="admin-stat pending">
            <h2>{pending}</h2>
            <p>Pending Reports</p>
          </div>

          <div className="admin-stat approved">
            <h2>{approved}</h2>
            <p>Approved Reports</p>
          </div>

          <div className="admin-stat resolved">
            <h2>{resolved}</h2>
            <p>Resolved Reports</p>
          </div>
        </div>

        <h2 className="admin-section-title">
          All Disaster Reports
        </h2>

        <div className="admin-controls">
          <input
            type="text"
            placeholder="🔍 Search by location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Disasters</option>
            <option value="Flood">Flood</option>
            <option value="Earthquake">Earthquake</option>
            <option value="Fire">Fire</option>
            <option value="Cyclone">Cyclone</option>
            <option value="Landslide">Landslide</option>
          </select>
        </div>

        {filteredReports.length === 0 ? (
          <div className="admin-empty">
            <h3>📋 No Reports Found</h3>
            <p>Try another search or filter.</p>
          </div>
        ) : (
          <div className="admin-report-list">
            {filteredReports.map((report) => (
              <div className="admin-report-card" key={report.id}>

                <h3>{report.type}</h3>

                <p>
                  <strong>Location:</strong> {report.location}
                </p>

                <p>
                  <strong>Description:</strong> {report.description}
                </p>

                <p>
                  <strong>Date:</strong> {report.date}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span className={`admin-status ${(report.status || "Pending").toLowerCase()}`}>
                    {report.status || "Pending"}
                  </span>
                </p>

                <label>Update Report Status</label>

                <select
                  value={report.status || "Pending"}
                  onChange={(e) =>
                    updateStatus(report.id, e.target.value)
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Resolved">Resolved</option>
                </select>

                <button
                  className="admin-delete-btn"
                  onClick={() => deleteReport(report.id)}
                >
                  🗑️ Delete Report
                </button>

              </div>
            ))}
          </div>
        )}

      </main>

      <footer className="admin-footer">
        Disaster Management System © 2026
      </footer>

    </div>
  );
}

export default AdminDashboard;
