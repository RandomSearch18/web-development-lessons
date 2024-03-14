/**
 * @param {string} id
 * @param {number[]} position
 * @param {number} zoom
 * @returns {L.Map}
 */

function setupMap(id, position, zoom) {
  const map = L.map(id).setView(position, zoom)
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  }).addTo(map)
}

console.log("Loading maps", L)
setupMap("school-map", [51.27299, -0.39486], 17)
setupMap("london-map", [51.505, -0.09], 10)
console.log("Maps ready!")
