# 🛶 Panamá (Plan Estratégico)

**Estado:** 🔄 Planificando (Semana Santa 2026)

---

## 💰 Presupuesto Global Estimado

| Categoría | Estimación | Notas |
|-----------|------------|-------|
| Vuelos | €800 - €1,200 | Madrid - Ciudad de Panamá (PTY) - Directo Iberia |
| Transportes | €400 - €700 | Vuelo interno a David + Lanchas rápidas |
| Alojamiento | €1,500 - €2,500 | Mix Casco Viejo + Cabañas Guna + Lodge Coiba |
| Actividades | €700 - €1,000 | Buceo en Coiba + Expedición San Blas |
| Comida/Extras | €500 - €800 | Mix mariscos locales + Restaurantes Autor |
| **Total** | **€3,900 - €6,200** | **Presupuesto por pareja / 9 días** |

---

## 🚀 Highlights de Actividades
- **UNESCO World Heritage:** Distrito Histórico de Panamá (Casco Viejo).
- **UNESCO World Heritage:** Parque Nacional Coiba (Santuario Marino).
- **Expedición San Blas:** Inmersión cultural con la comunidad Guna.
- **Buceo con Pelágicos:** Tiburones y mantas en el Pacífico salvaje.
- **Canal de Panamá:** Visita técnica a las esclusas de Miraflores.

---

## 🗓️ Itinerario Detallado (Logística)

| Fecha | Día | Ciudad/Zona | Transporte | Actividades | Notas |
|:---:|:---:|:---|:---|:---|:---|
| 28 Mar | 1 | Panamá City | Vuelo (11h) | Llegada y UNESCO Casco | Cena en el Casco Antiguo. |
| 29 Mar | 2 | San Blas | 4x4 (3h) + Lancha | Expedición Guna Yala | Traslado al archipiélago Caribe. |
| 30 Mar | 3 | San Blas | Lancha Rápida | Island Hopping | Snorkel en barcos hundidos y cayos. |
| 31 Mar | 4 | Panamá City | Lancha + 4x4 | Regreso y Canal | Visita a esclusas de Miraflores. |
| 01 Abr | 5 | David / Sta Cat. | Vuelo (1h) + SUV | Rumbo a Coiba | Traslado al Pacífico. |
| 02 Abr | 6 | Isla Coiba | Lancha (1.5h) | **UNESCO Buceo Coiba** | Hito Aventura: Tiburones y pelágicos. |
| 03 Abr | 7 | Isla Coiba | Lancha | Exploración Marina | Segundo día de buceo técnico. |
| 04 Abr | 8 | Panamá City | SUV / Vuelo | Regreso y Cena Autor | Última noche en el hub de las Américas. |
| 05 Abr | 9 | Madrid | Vuelo (11h) | Regreso | Vuelo directo PTY -> MAD. |

---

## 🗺️ Estrategia por Fases
- **Fase 1 (San Blas):** Desconexión tecnológica total. Autonomía en islas autogestionadas en el Caribe.
- **Fase 2 (Coiba):** El "Galápagos" de Centroamérica en el Pacífico. Aventura técnica marina.

---

## 🔥 Hito de Aventura Real: Buceo en Coiba y Vida Guna
El buceo en Coiba es vuestro hito técnico; sus corrientes y la escala de sus bancos de peces exigen compromiso real. San Blas representa el reto logístico: vivir en una isla sin electricidad, conectando con la cultura nativa pura.

---

## 📅 Hoja de Ruta Narrativa (Experiencia)

### Día 1: El contraste del Casco Viejo
- **Logística:** **30 min de taxi** desde PTY.
- **Valor Diferencial:** El **Casco Viejo (UNESCO)** es necesario por su contraste; ver rascacielos del siglo XXI desde una calle colonial define la personalidad de Panamá. Es el hito cultural de bienvenida.

### Día 2 y 3: El archipiélago prohibido (San Blas)
- **Logística:** **3h de 4x4** por selva + **30 min de lancha rápida** saltando olas.
- **Valor Diferencial:** **Guna Yala** es obligatorio por su exclusividad cultural. El valor diferencial es dormir en una cabaña de paja sin luz gestionada por indígenas, algo imposible de replicar en otros destinos.

### Día 5 y 6: El santuario de pelágicos (Coiba)
- **Logística:** **1h de vuelo** a David + **1.5h de lancha rápida** a mar abierto.
- **Valor Diferencial:** **Isla Coiba (UNESCO)** es el hito de aventura real. El buceo técnico aquí es obligatorio por la densidad de fauna: es el único sitio de la región donde verás tiburones punta blanca en cada inmersión.

---

## ⚖️ Justificación de Decisiones (Lógica Atómica)
- **Ruta (Coiba vs Bocas):** Se ha **descartado Bocas del Toro** por ser demasiado fiestero. Se elige Coiba por su buceo técnico y naturaleza virgen protegida.
- **Transporte (Vuelo vs Bus):** Se justifica el **vuelo interno a David** para ahorrar 7h de bus, ganando un día completo de buceo real.
- **Utilidad:** Se ha eliminado cualquier tiempo de "shopping" en la capital para maximizar el tiempo en las islas.
- **UNESCO:** Se ha integrado **Coiba y Casco Viejo** como ejes fundamentales del viaje.

---

## 🗺️ Mapa Interactivo
<div id="map" style="height: 400px;"></div>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  var map = L.map('map').setView([8.5, -80.0], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  var points = [
    [8.98, -79.52], // 1. Panamá City
    [9.55, -78.95], // 2. San Blas (Guna Yala)
    [8.98, -79.52], // 3. Regreso Capital
    [8.24, -82.43], // 4. David / Coiba Access
    [7.43, -81.78], // 5. Isla Coiba
    [8.98, -79.52]  // 6. Regreso PTY
  ];

  function createLabel(number, label) {
    var icon = L.divIcon({
      className: 'custom-div-icon',
      html: "<div style='background-color:#ff3333; color:white; border-radius:50%; width:24px; height:24px; display:flex; justify-content:center; align-items:center; font-size:12px; font-weight:bold; border:2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.5);'>" + number + "</div>",
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
    return L.marker(label, {icon: icon});
  }

  createLabel(1, points[0]).addTo(map).bindPopup('1. Panamá City (Casco Viejo)');
  createLabel(2, points[1]).addTo(map).bindPopup('2. San Blas (Archipiélago)');
  createLabel(3, points[3]).addTo(map).bindPopup('3. David (Salto Pacífico)');
  createLabel(4, points[4]).addTo(map).bindPopup('4. Isla Coiba (UNESCO)');

  L.polyline(points, {color: '#ff3333', weight: 3, opacity: 0.6, dashArray: '10, 10'}).addTo(map);
</script>

---

## ⚠️ Check de Supervivencia (Agente)
- **Factor "Ni de Coña":** No vayas a San Blas esperando resorts; es supervivencia básica. Llevar dólares americanos en billetes pequeños ($1 y $5) innegociable.
- **Buceo:** Coiba tiene termoclinas bruscas; traje de 3mm o 5mm recomendado.

---

## ✈️ Logística Crítica
- **Vuelos:** [✈️ Buscar MAD -> Panamá](https://www.skyscanner.es/transport/flights/mad/pty/260328/260405/?adults=2&currency=EUR)
- **Buceo:** [🤿 Scuba Coiba](https://scubacoiba.com/)
