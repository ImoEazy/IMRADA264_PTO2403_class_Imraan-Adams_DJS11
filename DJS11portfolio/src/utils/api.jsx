// utils/api.js

const BASE_URL = "https://podcast-api.netlify.app";

export const fetchPreviews = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching previews:", error);
  }
};

export const fetchShowDetails = async (showId) => {
  try {
    const response = await fetch(`${BASE_URL}/id/${showId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching show details:", error);
  }
};