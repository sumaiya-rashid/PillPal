const API_URL = "http://10.201.151.125:8000";  // Django backend host:port

export async function getMedications() {
  const response = await fetch(`${API_URL}/medications/`);
  if (!response.ok) throw new Error("Failed to fetch medications");
  return response.json();
}

export async function addMedication(med) {
  const response = await fetch(`${API_URL}/medications/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(med),
  });
  if (!response.ok) throw new Error("Failed to add medication");
  return response.json();
}

export async function deleteMedication(id) {
  const response = await fetch(`${API_URL}/medications/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete medication");
  return response.json();
}
