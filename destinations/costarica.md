# 🇨🇷 Costa Rica (Plan Estratégico)

**Estado:** 🔄 Planificando (Semana Santa 2026)

---

## 💰 Presupuesto Global Estimado

| Categoría | Estimación | Notas |
|-----------|------------|-------|
| Vuelos | €900 - €1,300 | Madrid - San José (SJO) - Directo Iberia |
| Transportes | €600 - €900 | Alquiler SUV 4x4 (Imprescindible) + Fuel |
| Alojamiento | €1,800 - €3,000 | Mix Eco-Luxe (Nayara) + Santa Teresa |
| Actividades | €700 - €1,000 | Rafting Pacuare + Canopy + Tortuguero |
| Comida/Extras | €600 - €900 | Sodas locales + Cenas Autor |
| **Total** | **€4,600 - €7,100** | **Presupuesto por pareja / 9 días** |

---

## 🚀 Highlights de Actividades
- **Biodiversidad Única:** Tortuguero y el desove de tortugas (según fechas).
- **Rafting Río Pacuare:** Clase IV en uno de los ríos más bellos del mundo.
- **Volcán Arenal:** Trekking por coladas de lava y aguas termales volcánicas.
- **Monteverde:** Canopy y puentes colgantes sobre el bosque nuboso.
- **Santa Teresa:** Surf y "hippy-luxe" vibe en el Pacífico.

---

## 🗓️ Itinerario Detallado (Logística)

| Fecha | Día | Ciudad/Zona | Transporte | Actividades | Notas |
|:---:|:---:|:---|:---|:---|:---|
| 28 Mar | 1 | San José | Vuelo (11h) | Llegada y SUV 4x4 | Recogida de coche. Noche en la capital. |
| 29 Mar | 2 | Tortuguero | 4x4 (3h) + Bote (1h)| Canales de Tortuguero | Bote desde La Pavona. Avistamiento fauna. |
| 30 Mar | 3 | La Fortuna | Bote + 4x4 (4h) | Volcán Arenal | Aguas termales en Nayara. |
| 31 Mar | 4 | Río Pacuare | 4x4 (2h) | **Rafting Clase IV** | Descenso de 30km por cañón virgen. |
| 01 Abr | 5 | Monteverde | 4x4 (3.5h) | Bosque Nuboso | Carretera panorámica bordeando el lago. |
| 02 Abr | 6 | Monteverde | 4x4 | Canopy / Puentes | Adrenalina a 50m de altura. |
| 03 Abr | 7 | Santa Teresa | 4x4 (4h) + Ferry | Pacífico Salvaje | Ferry Puntarenas (1.5h). Surf sunset. |
| 04 Abr | 8 | Santa Teresa | 4x4 / Relax | Playa y Desconexión | Fogatas en la playa y villas privadas. |
| 05 Abr | 9 | Madrid | 4x4 (5h) + Vuelo | Regreso | Tráfico Semana Santa. Salir con margen. |

---

## 🗺️ Estrategia por Fases
- **Fase 1 (Selva y Volcanes):** Inmersión profunda en la biodiversidad. Alojamiento: **Nayara Tented Camp**.
- **Fase 2 (Altura y Adrenalina):** Verticalidad en Monteverde y Pacuare.
- **Fase 3 (Pura Vida):** Cierre exclusivo en Santa Teresa, lejos de las masas.

---

## 🔥 Hito de Aventura Real: Rafting Clase IV en Río Pacuare
No es una actividad turística suave. Es una expedición por un cañón tropical inaccesible por tierra. El valor diferencial es la pureza del entorno y la exigencia física de los rápidos.

---

## 📅 Hoja de Ruta Narrativa (Experiencia)

### Día 1 y 2: El Amazonas de Centroamérica
- **Logística:** **3h de conducción** a La Pavona + **1h de lancha rápida**.
- **Valor Diferencial:** **Tortuguero** es necesario por su aislamiento; no hay carreteras. El valor diferencial es recorrer los canales en kayak al amanecer, donde el sonido de los monos aulladores define el vibe de Costa Rica.

### Día 3 y 4: El Pacuare y el Coloso
- **Logística:** Traslados en 4x4. El rafting del día 4 dura **5h**.
- **Valor Diferencial:** El **Pacuare** es obligatorio; es el hito de adrenalina del viaje. Sus paredes de roca de 100m con cascadas cayendo al río lo hacen visualmente imbatible.

### Día 5 y 6: El dosel del mundo
- **Logística:** **3.5h de 4x4** por pistas de lastre.
- **Valor Diferencial:** **Monteverde** aporta la perspectiva vertical. El valor diferencial es caminar sobre puentes colgantes envueltos en la niebla del bosque nuboso, un ecosistema místico que contrasta con el calor de la costa.

---

## ⚖️ Justificación de Decisiones (Lógica Atómica)
- **Ruta (Santa Teresa vs Manuel Antonio):** Se ha **descartado Manuel Antonio** por el colapso masivo de Semana Santa (colas de 4h). Se elige Santa Teresa por su vibe más joven y fluido.
- **Actividad (Pacuare vs Balsa):** Se prioriza **Pacuare** porque ofrece un cañón virgen, mientras que el río Balsa es demasiado comercial para vuestro perfil.
- **Transporte (SUV 4x4 vs Sedán):** El **4x4 es obligatorio** para Nicoya; el lastre y las pendientes de Santa Teresa destrozarían un coche normal.
- **Utilidad:** Se ha eliminado la parada en centros comerciales de San José para ganar un día extra en el Pacífico.

---

## 🗺️ Mapa Interactivo
<div id="map" style="height: 400px;"></div>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  var map = L.map('map').setView([10.0, -84.5], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);
  L.circleMarker([10.54, -83.50], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Tortuguero');
  L.circleMarker([10.47, -84.64], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Volcán Arenal');
  L.circleMarker([9.93, -83.53], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Río Pacuare (Rafting)');
  L.circleMarker([10.30, -84.81], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Monteverde');
  L.circleMarker([9.64, -85.17], {radius: 8, fillColor: "#ff3333", color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map).bindPopup('Santa Teresa');
</script>

---

## ⚠️ Check de Supervivencia (Agente)
- **Factor "Ni de Coña":** No dejar nada de valor en el coche. Reservar el ferry online con semanas de antelación (**Naviera Tambor**).
- **Logística:** El tráfico el domingo de regreso a SJO es infernal; salir con 7h de antelación.

---

## ✈️ Logística Crítica
- **Vuelos:** [✈️ Buscar MAD -> San José](https://www.skyscanner.es/transport/flights/mad/sjo/260328/260405/?adults=2&currency=EUR)
- **Ferry:** [🚢 Reserva Online (Naviera Tambor)](https://www.navieratambor.com/)
