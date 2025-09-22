import React, { useEffect, useState } from "react";
import "./App.css";
import { getMedications, addMedication, deleteMedication } from "./api";
import MedicationList from "./components/MedicationList";
import MedicationForm from "./components/MedicationForm";

function App() {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMeds();
  }, []);

  const fetchMeds = async () => {
    try {
      setLoading(true);
      const data = await getMedications();
      setMedications(data);
    } catch (err) {
      setError("Could not load medications.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (med) => {
    const newMed = await addMedication(med);
    setMedications([...medications, newMed]);
  };

  const handleDelete = async (id) => {
    await deleteMedication(id);
    setMedications(medications.filter((m) => m.id !== id));
  };

  return (
    <div className="App">
      <h1>PillPal</h1>

      <MedicationForm onAdd={handleAdd} />

      {loading && <p>Loading medications...</p>}
      {error && <p className="error">{error}</p>}

      <MedicationList medications={medications} onDelete={handleDelete} />
    </div>
  );
}

export default App;
