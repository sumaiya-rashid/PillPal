import React, { useState, useEffect } from "react";
import "./App.css";
import MedicationList from "./components/MedicationList";
import MedicationForm from "./components/MedicationForm";
import { getMedications, addMedication, deleteMedication } from "./api";

function App() {
  const [medications, setMedications] = useState([]);

  // Fetch medications on component mount
  useEffect(() => {
    const fetchMeds = async () => {
      const data = await getMedications();
      setMedications(data);
    };
    fetchMeds();
  }, []);

  // Add a new medication
  const handleAdd = async (med) => {
    const newMed = await addMedication(med);
    setMedications([...medications, newMed]);
  };

  // Delete a medication
  const handleDelete = async (id) => {
    await deleteMedication(id);
    setMedications(medications.filter((m) => m.id !== id));
  };

  return (
    <div className="App">
      <h1>PillPal</h1>
      <MedicationForm onAdd={handleAdd} />
      <MedicationList medications={medications} onDelete={handleDelete} />
    </div>
  );
}

export default App;
