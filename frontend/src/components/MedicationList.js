import React from "react";

function MedicationList({ medications = [], onDelete }) {
  if (medications.length === 0) return <p>No medications added yet.</p>;

  return (
    <ul>
      {medications.map((med) => (
        <li key={med.id}>
          {med.name} ({med.dosage})
          <button onClick={() => onDelete(med.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default MedicationList;
