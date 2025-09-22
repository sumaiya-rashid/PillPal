import React from "react";

export default function MedicationItem({ med, onDelete }) {
  return (
    <div className="med-item">
      <span>{med.name} - {med.dose}</span>
      <button onClick={() => onDelete(med.id)}>Delete</button>
    </div>
  );
}
