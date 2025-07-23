export function isWithinGeofence(userLocation, classroomLocation, radiusInMeters) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371e3; // Earth radius in meters

  const φ1 = toRad(userLocation.latitude);
  const φ2 = toRad(classroomLocation.latitude);
  const Δφ = toRad(classroomLocation.latitude - userLocation.latitude);
  const Δλ = toRad(classroomLocation.longitude - userLocation.longitude);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance <= radiusInMeters;
}
