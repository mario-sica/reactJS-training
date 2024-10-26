import { useState } from "react";

function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSuccess = (position) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

    setLoading(false);
  };

  const handleError = (error) => {
    setError(error.message);
    setLoading(false);
  };

  const getLocation = () => {
    if (!"geolocation" in navigator) {
      setError("Geolocation not available");
    }

    setError(null);
    setLoading(true);

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  return {
    location,
    error,
    loading,
    getLocation,
  };
}

export function HookCurrentLocation() {
  const { location, error, loading, getLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getLocation}>Get current location</button>
      <h3>{loading ? "Loading location..." : ""}</h3>
      {location && (
        <div>
          <h3>Current location:</h3>
          <h4>Latitude: {location.latitude}</h4>
          <h4>Longitude: {location.longitude}</h4>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
