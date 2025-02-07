import axios from "axios";

const baseURL = "https://api.edamam.com/api/recipes/v2";

function fetchData(url) {
  const instance = axios.create({
    baseURL,
    headers: {
      "Edamam-Account-User": "7d59eb05", // Replace with your actual user ID
    },
  });

  // If the URL already contains https:// or http://, use it directly
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return instance.get(url);
  } else {
    return instance.get(url);
  }
}

export default fetchData;
