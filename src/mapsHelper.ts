/**
 *
 * @param lat Latitude of the required destation
 * @param long Longitude of the required destation
 */
export const openMapsWithDirection = (lat: number, long: number) => {
  const url = `http://maps.google.com/?daddr=${lat},${long}`;
  window.open(url);
};
