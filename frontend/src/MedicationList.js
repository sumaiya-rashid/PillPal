import React from "react";
import MedicationItem from "./MedicationItem";

export default function MedicationList({ medications, onDelete }) {
  return (
    <div>
      {medications.length === 0 && <p>No medications yet.</p>}
      {medications.map(med => (
        <MedicationItem key={med.id} med={med} onDelete={onDelete} />
      ))}
    </div>
  );
}
