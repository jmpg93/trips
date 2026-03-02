# 🌋 Azores, Portugal (Plan Estratégico)

**Estado:** 🔄 Planificando (Semana Santa 2026)

---

## 💰 Presupuesto Global Estimado

| Categoría | Estimación | Notas |
|-----------|------------|-------|
| Vuelos | €200 - €450 | Madrid - Ponta Delgada (PDL) - Directo/Lisboa |
| Transportes | €350 - €550 | Alquiler coche SUV + Vuelo interno a Pico |
| Alojamiento | €1,200 - €1,800 | Mix Eco-Design (Furnas) + Casas Piedra (Pico) |
| Actividades | €600 - €900 | Canyoning + Subida al Pico + Ballenas |
| Comida/Extras | €500 - €800 | Gastronomía local (Cozido) + Cenas nivel medio |
| **Total** | **€2,850 - €4,500** | **Presupuesto por pareja / 9 días** |

---

## 🚀 Highlights de Actividades
- **UNESCO World Heritage:** Paisaje de los viñedos de la Isla de Pico.
- **Canyoning Técnico:** Descenso de cascadas en bosques de laurisilva.
- **Mt. Pico (2.351m):** Ascenso a la montaña más alta de Portugal.
- **Termas de Furnas:** Baños en aguas calientes naturales en mitad de la selva.
- **Avistamiento de Ballenas:** Salidas en lancha rápida para ver cachalotes.

---

## 🗓️ Itinerario Detallado (Logística)

| Fecha | Día | Ciudad/Zona | Transporte | Actividades | Notas |
|:---:|:---:|:---|:---|:---|:---|
| 28 Mar | 1 | Ponta Delgada | Vuelo (3h) | Llegada y Coche | Recogida coche. Cena en el puerto. |
| 29 Mar | 2 | Sete Cidades | Coche (30m) | Trekking Miradores | Vista de la Lagoa Azul y Verde. |
| 30 Mar | 3 | Ribeira Grande | Coche (40m) | **Canyoning Técnico** | Hito Aventura: Saltos y rápeles. |
| 31 Mar | 4 | Furnas / Lagos | Coche (30m) | Termas y Lagoa Fogo | Baño nocturno en Poça da Dona Beija. |
| 01 Abr | 5 | PDL / Pico | Vuelo (50m) | Salto a Isla de Pico | Recogida SUV en aeropuerto de PIX. |
| 02 Abr | 6 | Mt. Pico | Trekking (8h) | **Subida al Pico** | Hito Aventura: 2.351m. |
| 03 Abr | 7 | Lajes do Pico | Coche (25m) | Ballenas y UNESCO | Avistamiento fauna + Viñedos UNESCO. |
| 04 Abr | 8 | Madalena | Coche | Costa Norte Pico | Atardecer entre piedras volcánicas. |
| 05 Abr | 9 | Madrid | Vuelo (3h) | Regreso | Vuelo Pico -> PDL -> Madrid. |

---

## 🗺️ Estrategia por Fases
- **Fase 1 (São Miguel):** Inmersión en la geología más exuberante. Foco en el agua y el vapor. Alojamiento: **Octant Furnas**.
- **Fase 2 (Isla de Pico):** El desafío físico. Foco en la roca desnuda, el volcán y la cultura del vino en piedra.

---

## 🔥 Hito de Aventura Real: Canyoning y Subida al Pico
Azores ofrece vuestro reto técnico europeo: rápeles de 30m en mitad de la selva atlántica y una ascensión vertical de 8 horas al Mt. Pico sobre roca volcánica suelta. No es senderismo, es expedición pura.

---

## 📅 Hoja de Ruta Narrativa (Experiencia)

### Día 1 y 2: Lagos de leyenda y el borde del cráter
- **Logística:** **30 min de coche** desde PDL. El trekking dura **4h**.
- **Valor Diferencial:** **Sete Cidades** es necesaria por su escala visual masiva. Ver los dos lagos de colores diferentes desde el borde del volcán es el hito paisajístico que define la isla.

### Día 3 y 4: La fuerza del agua y el vapor
- **Logística:** **40 min de coche** al punto de inicio. El canyoning dura **4h**.
- **Valor Diferencial:** El **Canyoning** en Azores es obligatorio por ser de los mejores del mundo. **Furnas** aporta el valor del "Cozido" bajo tierra y el baño termal nocturno, una experiencia geotérmica única en el Mediterráneo.

### Día 5 y 6: El gigante del Atlántico
- **Logística:** **50 min de vuelo** (única forma eficiente). El ascenso al Pico requiere **8h** de actividad física alta.
- **Valor Diferencial:** **Mt. Pico** es el hito de aventura real. Estar por encima de las nubes en una isla en mitad del océano es una sensación de aislamiento que iguala vuestros retos en Vietnam.

---

## ⚖️ Justificación de Decisiones (Lógica Atómica)
- **Transporte (Coche vs Bus):** El coche es vital para llegar a los inicios de los senderos de canyoning que el transporte público ignora.
- **Ruta (São Miguel + Pico):** Se elige Pico descartando otras islas porque ofrece el hito físico más potente de Portugal y los **Viñedos UNESCO**, un valor cultural inigualable.
- **Logística (Vuelo Interno):** Se justifica el vuelo PDL-PIX para evitar 6h de ferry movido, maximizando el tiempo de trekking.
- **Alojamiento (Furnas vs PDL):** Se elige dormir en las montañas (Furnas) para evitar el ruido comercial de la capital y estar a pie de termas.

---

## 🗺️ Mapa Interactivo
<div id="map" style="height: 400px;"></div>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  var map = L.map('map').setView([38.0, -27.0], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);
  L.circleMarker([37.74, -25.67], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Ponta Delgada');
  L.circleMarker([37.77, -25.32], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Furnas (Termas)');
  L.circleMarker([38.47, -28.40], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Mt. Pico (Hito)');
  L.circleMarker([38.53, -28.53], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Viñedos Pico (UNESCO)');
</script>

---

## ⚠️ Check de Supervivencia (Agente)
- **Factor "Ni de Coña":** No subir al Pico sin GPS o guía si hay nubes bajas; la visibilidad desaparece en segundos y el terreno es idéntico en todas direcciones.
- **Equipo:** Botas con suela Vibram real (la roca de Pico es abrasiva) y ropa Gore-Tex para las cuatro estaciones en un día.

---

## ✈️ Logística Crítica
- **Vuelos:** [✈️ Buscar MAD -> Ponta Delgada](https://www.skyscanner.es/transport/flights/mad/pdl/260328/260405/?adults=2&currency=EUR)
- **Internos:** [✈️ SATA Air Açores](https://www.azoresairlines.pt/en)
