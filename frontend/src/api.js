const BASE_URL = "http://127.0.0.1:8000/api/";

export const getMedications = async () => {
  const res = await fetch(BASE_URL + "medications/");
  return await res.json();
};

export const addMedication = async (med) => {
  const res = await fetch(BASE_URL + "medications/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(med)
  });
  return await res.json();
};

export const deleteMedication = async (id) => {
  await fetch(BASE_URL + `medications/${id}/`, { method: "DELETE" });
};
