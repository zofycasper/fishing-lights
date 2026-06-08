// netlify/functions/tides.js
// Secure proxy for World Tides API.
// The real API key lives ONLY as Netlify environment variable (WORLD_TIDES_KEY).
// This way the key is never exposed in the frontend source code or GitHub.

exports.handler = async (event, context) => {
  // Get parameters from frontend
  const params = event.queryStringParameters || {};
  const lat = params.lat || "-36.83";
  const lon = params.lon || "174.79";
  const days = params.days || "7";
  const datum = params.datum || "MSL";

  // Secret key from Netlify environment variables (never in code)
  const key = process.env.WORLD_TIDES_KEY;

  if (!key) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server misconfiguration: WORLD_TIDES_KEY not set" }),
    };
  }

  const url = `https://www.worldtides.info/api/v3?lat=${lat}&lon=${lon}&key=${key}&days=${days}&extremes=&datum=${datum}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "World Tides request failed", status: response.status }),
      };
    }

    const data = await response.json();

    // Return the same shape the frontend expects
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        // Optional: cache for a bit to reduce quota usage
        "Cache-Control": "public, max-age=300", // 5 minutes
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("Proxy error:", err);
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Proxy error", message: err.message }),
    };
  }
};
