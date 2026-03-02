# 🦁 Tanzania y Zanzíbar (Plan Estratégico)

**Estado:** 🔄 Planificando (Semana Santa 2026)

---

## 💰 Presupuesto Global Estimado

| Categoría | Estimación | Notas |
|-----------|------------|-------|
| Vuelos | €1,100 - €1,600 | Madrid - Kilimanjaro (JRO) / Zanzíbar (ZNZ) |
| Transportes | €800 - €1,200 | Safari 4x4 Privado + Vuelos Internos |
| Alojamiento | €1,500 - €2,500 | Lodges Gran Lujo (Precios Low Season) |
| Actividades | €600 - €900 | Safari Migration + Trekking Empakaai |
| Comida/Extras | €400 - €700 | Pensión completa Safari + Zanzíbar |
| **Total** | **€4,400 - €6,900** | **Presupuesto por pareja / 9-10 días** |

---

## 🚀 Highlights de Actividades
- **UNESCO World Heritage:** Parque Nacional Serengeti y Zona de Conservación Ngorongoro.
- **UNESCO World Heritage:** Stone Town en Zanzíbar.
- **The Great Migration:** Seguimiento de las manadas en la "Green Season".
- **Trekking Empakaai:** Descenso a pie a un cráter virgen con rangers.
- **Buceo Mnemba Atoll:** Visibilidad récord (hasta 60m) en abril.

---

## 🗓️ Itinerario Detallado (Logística)

| Fecha | Día | Ciudad/Zona | Transporte | Actividades | Notas |
|:---:|:---:|:---|:---|:---|:---|
| 28 Mar | 1 | Arusha | Vuelo (12h) | Arribo y Briefing | Transfer JRO -> Arusha (1h). |
| 29 Mar | 2 | Tarangire | 4x4 Privado (2.5h) | Safari Elefantes | Paisaje verde y baobabs. |
| 30 Mar | 3 | Ngorongoro | 4x4 (2h) | **Trekking Empakaai** | Hito Aventura: Bajada a pie al cráter. |
| 31 Mar | 4 | Serengeti Sur | 4x4 (3h) | UNESCO Serengeti | Tracking de la Gran Migración. |
| 01 Abr | 5 | Serengeti Central | 4x4 | Safari de Depredadores | Escenas de caza sin multitudes. |
| 02 Abr | 6 | Zanzíbar | Vuelo Interno (1.5h)| UNESCO Stone Town | Vuelo Seronera -> ZNZ. Paseo histórico. |
| 03 Abr | 7 | Nungwi | Lancha (45m) | **Buceo Mnemba Atoll**| Visibilidad de cristal (hasta 60m). |
| 04 Abr | 8 | Nungwi | Lancha | Buceo Leven Bank | Buceo técnico en corrientes. |
| 05 Abr | 9 | Madrid | Transfer + Vuelo | Regreso | Salida con 4h de margen por tráfico. |

---

## 🗺️ Estrategia por Fases
- **Fase 1 (Safari de Lodo y Verde):** Aprovechar la exclusividad de la "temporada esmeralda". Alojamiento: **Ngorongoro Crater Lodge**.
- **Fase 2 (Zanzíbar Cristalino):** El secreto de los buceadores: mar como un espejo tras cesar los monzones.

---

## 🔥 Hito de Aventura Real: Empakaai Crater Hike y Migration Tracking
Tanzania ofrece vuestro "Hang Va" africano: bajar a pie 300m por una pared selvática hasta el fondo de una caldera volcánica virgen. Navegar el Serengeti central en abril es una expedición táctica en 4x4 por terrenos impracticables para turistas estándar.

---

## 📅 Hoja de Ruta Narrativa (Experiencia)

### Día 1 y 2: Del Baobab al Cráter Perdido
- **Logística:** **3h de 4x4** por pistas de tierra roja.
- **Valor Diferencial:** **Tarangire** es necesario por sus baobabs gigantes. **Empakaai** aporta el valor de la conexión física; es el único lugar donde dejarás el coche para sentir el pulso de la tierra volcánica entre flamencos.

### Día 3 y 4: La Gran Migración en el lodo
- **Logística:** **4-5h de conducción técnica** diaria buscando las manadas.
- **Valor Diferencial:** El **Serengeti (UNESCO)** en abril es vuestro hito de exclusividad. Verás a los depredadores activos en un entorno vibrante, sin el polvo y las caravanas de jeeps del verano. El lodo es el reto logístico que asegura la soledad.

### Día 5 y 6: El laberinto de Stone Town
- **Logística:** **1.5h de vuelo** para ganar un día completo en la isla.
- **Valor Diferencial:** **Stone Town (UNESCO)** es necesaria por su carga histórica. El valor diferencial es el laberinto de coral que huele a especias, un reset cultural antes del buceo profundo en el Índico.

---

## ⚖️ Justificación de Decisiones (Lógica Atómica)
- **Temporada (Abril vs Julio):** Se elige **Abril** para evitar las multitudes y acceder a lodges de lujo a precio reducido, aceptando el riesgo de lluvia por la recompensa de la visibilidad de buceo récord.
- **Logística (Vuelo vs Ferry):** Se justifica el **vuelo interno a ZNZ** para evitar 6h de trayecto penoso por carretera y mar movido, priorizando vuestro tiempo en el agua.
- **UNESCO:** Se ha integrado **Serengeti, Ngorongoro y Stone Town** como hitos obligatorios del itinerario.
- **Utilidad:** Se ha eliminado cualquier parada en centros comerciales de Arusha para maximizar el tiempo de safari real.

---

## 🗺️ Mapa Interactivo
<div id="map" style="height: 400px;"></div>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  var map = L.map('map').setView([-3.0, 37.0], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);
  L.marker([-3.37, 36.68]).addTo(map).bindPopup('Arusha');
  L.marker([-3.24, 35.48]).addTo(map).bindPopup('Ngorongoro (UNESCO)');
  L.marker([-2.33, 34.83]).addTo(map).bindPopup('Serengeti (UNESCO)');
  L.marker([-6.16, 39.20]).addTo(map).bindPopup('Stone Town (UNESCO)');
  L.marker([-5.72, 39.30]).addTo(map).bindPopup('Nungwi / Mnemba');
</script>

---

## ⚠️ Check de Supervivencia (Agente)
- **Factor "Ni de Coña":** No escatimar en el calzado; el barro en Empakaai es traicionero. No beber agua no embotellada (riesgo bacteriano alto en lluvias).
- **Salud:** Vacuna de la Fiebre Amarilla obligatoria. Malarone para la malaria.

---

## ✈️ Logística Crítica
- **Vuelos:** [✈️ Buscar MAD -> Kilimanjaro](https://www.skyscanner.es/transport/flights/mad/jro/260328/260405/?adults=2&currency=EUR)
- **Visa:** [🛂 eVisa Tanzania](https://visa.immigration.go.tz/)
