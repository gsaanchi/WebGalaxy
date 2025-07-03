import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

export const getPrediction = async (text) => {
  const response = await axios.post(`${API_URL}/predict`, { text }
  );
  return response.data;
};
