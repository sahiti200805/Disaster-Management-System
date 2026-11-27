
import { useEffect, useState } from "react";
import "./TrackReports.css";

function TrackReports() {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    function loadReports() {
      const savedReports = JSON.parse(
        localStorage.getItem("disasterReports") || "[]"
      );
      setReports(savedReports);
    }

    loadReports();

    // Refresh reports when Admin updates them
    window.addEventListener("storage", loadReports);

    return () => {
      window.removeEventListener("storage", loadReports);
    };
  }, []);

  const filteredReports = reports.filter((report) => {
    const matchesSearch = (report.location || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || report.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="track-container">

      <h1>📋 Track Disaster Reports</h1>

      <p className="track-subtitle">
        Search and track the status of your submitted disaster reports.
      </p>

      <div className="track-controls">

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

      <div className="track-summary">

        <div>
          <h2>{reports.length}</h2>
          <p>Total Reports</p>
        </div>

        <div>
          <h2>{reports.filter(r => (r.status || "Pending") === "Pending").length}</h2>
          <p>Pending</p>
        </div>

        <div>
          <h2>{reports.filter(r => r.status === "Approved").length}</h2>
          <p>Approved</p>
        </div>

        <div>
          <h2>{reports.filter(r => r.status === "Resolved").length}</h2>
          <p>Resolved</p>
        </div>

      </div>

      <div className="track-report-list">

        {filteredReports.length === 0 ? (
          <p className="no-reports">
            No matching disaster reports found.
          </p>
        ) : (

          filteredReports.map((report) => (

            <div className="track-card" key={report.id}>

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
                <span className={`status-${(report.status || "Pending").toLowerCase()}`}>
                  {report.status || "Pending"}
                </span>
              </p>

              <p className="user-status-note">
                ℹ️ Only the administrator can update report status.
              </p>

            </div>

          ))
        )}

      </div>

    </div>
  );
}

export default TrackReports;
