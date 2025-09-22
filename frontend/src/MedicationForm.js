import React, { useState } from "react";

export default function MedicationForm({ onAdd }) {
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !dose) return;
    onAdd({ name, dose });
    setName("");
    setDose("");
  };

  return (
    <form onSubmit={handleSubmit} className="med-form">
      <input 
        type="text" 
        placeholder="Medication Name" 
        value={name} 
        onChange={e => setName(e.target.value)} />
      <input 
        type="text" 
        placeholder="Dose" 
        value={dose} 
        onChange={e => setDose(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
