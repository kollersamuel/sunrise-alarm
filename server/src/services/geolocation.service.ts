export async function getGeolocation() {
  // If allowed, gets the user's geolocation.
  if ("geolocation" in navigator) {
    // Geolocation is available
    navigator.geolocation.getCurrentPosition(
      (position) => {
        return {
          status: 200,
          data: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitude: position.coords.altitude,
          },
        };
      },
      () => {
        return {
          status: 400,
          errMsg: "Unable to determine user's geolocation.",
        };
      }
    );
  } else {
    // Geolocation is not available
    return {
        status: 400,
        errMsg: "Geolocation unavailable.",
      };
  }
}
