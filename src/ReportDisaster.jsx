
import { useState } from "react";
import "./ReportDisaster.css";

function ReportDisaster() {
  const [type, setType] = useState("Flood");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const report = {
      id: Date.now(),
      type,
      location,
      description,
      date,
      status: "Pending",
    };

    const reports = JSON.parse(
      localStorage.getItem("disasterReports") || "[]"
    );

    reports.push(report);

    localStorage.setItem(
      "disasterReports",
      JSON.stringify(reports)
    );

    alert("Disaster Report Submitted Successfully!");

    setLocation("");
    setDescription("");
    setDate("");
    setType("Flood");
  }

  return (
    <div className="report-container">

      <div className="report-banner">
        <h1>🚨 Report a Disaster</h1>
        <p>
          Help us respond quickly. Your report can make a difference!
        </p>
      </div>

      <h2 className="disaster-heading">
        Types of Disasters
      </h2>

      <div className="disaster-images">

        <div className="disaster-image-card">
          <img
            src="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=500"
            alt="Flood"
          />
          <h3>🌊 Flood</h3>
        </div>

        <div className="disaster-image-card">
          <img
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=500"
            alt="Earthquake"
          />
          <h3>🌍 Earthquake</h3>
        </div>

        <div className="disaster-image-card">
          <img
            src="https://images.unsplash.com/photo-1475738198235-f686c993aae5?w=500"
            alt="Fire"
            onError={(e) => {
              e.currentTarget.src =
                "https://qz.com/cdn-cgi/image/width%3D1920%2Cquality%3D85%2Cformat%3Dauto/https%3A/assets.qz.com/media/5766f59560b5322faefab3f9f7ee6eee.jpg";
            }}
          />
          <h3>🔥 Fire</h3>
        </div>

        <div className="disaster-image-card">
          <img
            src="https://images.unsplash.com/photo-1527489377706-f5bf97e608852?w=500"
            alt="Cyclone"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500";
            }}
          />
          <h3>🌪️ Cyclone</h3>
        </div>

      </div>

      <div className="report-form-card">

        <h2>Submit Disaster Details</h2>

        <p className="form-description">
          Please provide accurate information about the incident.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Disaster Type</label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Flood</option>
            <option>Earthquake</option>
            <option>Fire</option>
            <option>Cyclone</option>
            <option>Landslide</option>
          </select>

          <label>Location</label>

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter disaster location"
            required
          />

          <label>Description</label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the disaster..."
            required
          />

          <label>Date</label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button type="submit" className="submit-report-btn">
            Submit Report →
          </button>

        </form>
      </div>

    </div>
  );
}

export default ReportDisaster;
