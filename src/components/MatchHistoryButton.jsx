// src/components/MatchHistoryButton.jsx
import React from "react";
import { Clock } from "lucide-react"; // or any icon you prefer
import "../styles/globals.css";

export default function MatchHistoryButton({ onClick }) {
  return (
    <button className="help-button" onClick={onClick}>
      <Clock size={20} />
      Match History
    </button>
  );
}
