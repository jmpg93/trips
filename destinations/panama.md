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
- **Fase 1 (San Blas):** Desconexión tecnológica total. Autonomía en islas autogestionadas.
- **Fase 2 (Coiba):** El "Galápagos" de Centroamérica. Aventura técnica en un ecosistema marino virgen.

---

## 🔥 Hito de Aventura Real: Buceo en Coiba y Vida Guna
El buceo en Coiba no es recreativo suave; sus corrientes y la escala de sus bancos de peces exigen compromiso técnico. San Blas representa el reto logístico: vivir en una isla sin electricidad, conectando con la cultura nativa pura.

---

## 📅 Hoja de Ruta Narrativa (Experiencia)

### Día 1: El contraste del Casco Viejo
- **Logística:** **30 min de taxi** desde PTY.
- **Valor Diferencial:** El **Casco Viejo (UNESCO)** es necesario por su contraste; ver rascacielos del siglo XXI desde una calle del siglo XVII define la personalidad de Panamá.

### Día 2 y 3: El archipiélago prohibido (San Blas)
- **Logística:** **3h de 4x4** por selva + **30 min de lancha rápida**.
- **Valor Diferencial:** **Guna Yala** es obligatorio por su exclusividad cultural. El valor diferencial es dormir en una cabaña de paja sin luz, gestionada al 100% por indígenas, algo imposible de replicar en otros destinos del Caribe.

### Día 5 y 6: El santuario de pelágicos (Coiba)
- **Logística:** **1h de vuelo** a David + **1.5h de lancha rápida** a mar abierto.
- **Valor Diferencial:** **Isla Coiba (UNESCO)** es el hito de aventura real. El buceo técnico aquí es obligatorio por la densidad de fauna: es el único sitio de la región donde verás tiburones punta blanca en cada inmersión garantizado.

---

## ⚖️ Justificación de Decisiones (Lógica Atómica)
- **Ruta (Coiba vs Bocas):** Se ha **descartado Bocas del Toro** por ser demasiado fiestero y comercial. Se elige Coiba por su buceo técnico y naturaleza virgen (fue un penal inaccesible durante décadas).
- **Transporte (Vuelo vs Bus):** Se justifica el **vuelo interno a David** para ahorrar 7h de bus, ganando un día completo de buceo en el Pacífico.
- **Alojamiento (Cabañas vs Velero):** Se eligen las cabañas en tierra en San Blas para priorizar la interacción con los Kunas, valorando más la cultura que la comodidad del barco.
- **Utilidad:** Se ha eliminado la parada en centros comerciales de Albrook para maximizar el tiempo en las islas.

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
  L.circleMarker([8.98, -79.52], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Panamá City (UNESCO)');
  L.circleMarker([9.55, -78.95], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('San Blas (Guna Yala)');
  L.circleMarker([7.43, -81.78], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Isla Coiba (UNESCO)');
</script>

---

## ⚠️ Check de Supervivencia (Agente)
- **Factor "Ni de Coña":** No ir a San Blas esperando resorts; es supervivencia básica. Llevar dólares americanos en efectivo (billetes de $1 y $5) para las comunidades.
- **Buceo:** Coiba tiene termoclinas bruscas en el Pacífico; traje de 3mm o 5mm recomendado incluso con calor.

---

## ✈️ Logística Crítica
- **Vuelos:** [✈️ Buscar MAD -> Panamá](https://www.skyscanner.es/transport/flights/mad/pty/260328/260405/?adults=2&currency=EUR)
- **Buceo:** [🤿 Scuba Coiba](https://scubacoiba.com/)
