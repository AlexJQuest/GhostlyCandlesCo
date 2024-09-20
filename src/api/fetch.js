// api/fetch.js

const API_URL = 'http://localhost:5000/api/products.js'; // Update if your server runs on a different port

// Function to fetch products from the API
export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the JSON data
  } catch (error) {
    console.error('Error loading products:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};
