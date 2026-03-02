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

## ⚖️ Justificación de Decisiones (Lógica Atómica)
- **Temporada (Abril vs Julio):** Se elige **Abril** para evitar las multitudes y acceder a lodges de lujo a precio reducido, priorizando la exclusividad sobre el clima seco.
- **Logística (Vuelo vs Ferry):** Se justifica el **vuelo interno a ZNZ** para evitar 6h de trayecto penoso por carretera y mar movido.
- **Actividad (Empakaai vs Ngorongoro estándar):** Se prioriza el trekking a pie para añadir el componente físico que define vuestro estilo.

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
| 05 Abr | 9 | Madrid | Transfer + Vuelo | Regreso | Salir con 4h de margen por tráfico. |

---

## 🚀 Highlights de Actividades
- **UNESCO World Heritage:** Parque Nacional Serengeti y Zona de Conservación Ngorongoro.
- **UNESCO World Heritage:** Stone Town en Zanzíbar.
- **The Great Migration:** Seguimiento de las manadas en la "Green Season".
- **Trekking Empakaai:** Descenso a pie a un cráter virgen con rangers.
- **Buceo Mnemba Atoll:** Visibilidad récord (hasta 60m) en abril.

---

## 🔥 Hito de Aventura Real: Empakaai Crater Hike y Migration Tracking
Tanzania ofrece vuestro "Hang Va" africano: bajar a pie 300m por una pared selvática hasta el fondo de una caldera volcánica virgen. Navegar el Serengeti central en abril es una expedición táctica en 4x4 por terrenos impracticables para turistas estándar.

---

## 📅 Hoja de Ruta Narrativa (Experiencia)

### Día 1 y 2: Del Baobab al Cráter Perdido
- **Logística:** **1h de transfer** al llegar. El día 2, **3h de 4x4** hasta Tarangire.
- **Valor Diferencial:** **Tarangire** es necesario por sus baobabs gigantes. **Empakaai** aporta el valor de la conexión física; es el único lugar donde dejarás el coche para sentir el pulso de la tierra volcánica entre flamencos en un trekking salvaje escoltado.



### Día 3 y 4: La Gran Migración en el lodo
- **Logística:** **4-5h de conducción técnica** diaria buscando las manadas.
- **Valor Diferencial:** El **Serengeti (UNESCO)** en abril es vuestro hito de exclusividad. Verás a los depredadores activos en un entorno vibrante sin las caravanas de jeeps del verano. Navegar el lodo es una expedición táctica que requiere un 4x4 real y pericia.



### Día 5 y 6: El salto al Índico
- **Logística:** **1.5h de vuelo interno** desde Seronera a Zanzíbar (ZNZ).
- **Valor Diferencial:** **Stone Town (UNESCO)** es necesaria por su carga histórica. El valor diferencial es el laberinto de coral que huele a especias, un reset cultural antes del buceo profundo en el Índico.



### Día 7, 8 y 9: El espejo del Índico y el Abismo
- **Logística:** **45 min de lancha rápida** desde Nungwi. El día 8, **1h** a mar abierto.
- **Valor Diferencial:** **Mnemba Atoll** en abril ofrece una visibilidad récord (hasta 60m) porque no hay viento. **Leven Bank** es el hito técnico para buceadores avanzados: una montaña submarina con corrientes fuertes y bancos masivos de pelágicos. Es el cierre de alta intensidad.



---

## 🗺️ Mapa Interactivo
<div id="map" style="height: 400px;"></div>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  var map = L.map('map').setView([-4.5, 37.5], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  var points = [
    [-3.37, 36.68], // 1. Arusha
    [-3.85, 35.95], // 2. Tarangire
    [-2.95, 35.82], // 3. Empakaai
    [-2.33, 34.83], // 4. Serengeti
    [-6.16, 39.20], // 5. Stone Town
    [-5.72, 39.30], // 6. Nungwi / Mnemba
    [-6.22, 39.22]  // 7. Regreso ZNZ
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

  createLabel(1, points[0]).addTo(map).bindPopup('1. Arusha');
  createLabel(2, points[1]).addTo(map).bindPopup('2. Tarangire');
  createLabel(3, points[2]).addTo(map).bindPopup('3. Empakaai (Trekking)');
  createLabel(4, points[3]).addTo(map).bindPopup('4. Serengeti (UNESCO)');
  createLabel(5, points[4]).addTo(map).bindPopup('5. Stone Town (UNESCO)');
  createLabel(6, points[5]).addTo(map).bindPopup('6. Nungwi / Mnemba');

  L.polyline(points, {color: '#ff3333', weight: 3, opacity: 0.6, dashArray: '10, 10'}).addTo(map);
</script>

---

## ⚠️ Check de Supervivencia (Agente)
- **Factor "Ni de Coña":** No escatimar en el 4x4. No beber agua no embotellada.
- **Salud:** Vacuna Fiebre Amarilla obligatoria. Malarone recomendado.

---

## ✈️ Logística Crítica
- **Vuelos:** [✈️ Buscar MAD -> Kilimanjaro](https://www.skyscanner.es/transport/flights/mad/jro/260328/260405/?adults=2&currency=EUR)
- **Visa:** [🛂 eVisa Tanzania](https://visa.immigration.go.tz/)
