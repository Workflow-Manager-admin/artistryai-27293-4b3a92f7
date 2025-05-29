import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * Skeleton for Progress Tracking component.
 * Minimalist, styled with accent gradient headline and placeholder text.
 */
function ProgressTracking() {
  return (
    <div className="feature-card" id="progress-tracking">
      <h2>Progress Tracking</h2>
      <p className="feature-description">
        Your learning stats and recommendations will be shown here.
      </p>
    </div>
  );
}

export default ProgressTracking;
