import React, { useState } from "react";

function MedicationForm({ onAdd }) {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !dosage) return;
    onAdd({ name, dosage });
    setName("");
    setDosage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Medication Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dosage"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
      />
      <button type="submit">Add Medication</button>
    </form>
  );
}

export default MedicationForm;
