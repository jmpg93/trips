# 🇬🇷 Creta, Grecia (Plan Estratégico)

**Estado:** 🔄 Planificando (Semana Santa 2026)

---

## 💰 Presupuesto Global Estimado

| Categoría | Estimación | Notas |
|-----------|------------|-------|
| Vuelos | €250 - €500 | Madrid - Chania (CHQ) o Heraklion (HER) |
| Transportes | €450 - €700 | Alquiler 4x4 Real (Jimny o SUV High) |
| Alojamiento | €1,200 - €2,000 | Mix Monastery Retreat + Numo Resort |
| Actividades | €600 - €900 | Guía Ha Gorge + Lancha rápida Loutro |
| Comida/Extras | €500 - €800 | Tabernas locales + Cenas Chania |
| **Total** | **€3,000 - €4,900** | **Presupuesto por pareja / 9 días** |

---

## 🚀 Highlights de Actividades
- **Hito Tectónico:** Descenso técnico en el Cañón de Ha (Ha Gorge).
- **Lefka Ori:** Trekking invernal por el "High Desert" nevado.
- **Cañón de Aradena:** El tajo más profundo del sur con escaleras verticales.
- **Loutro:** Desconexión total en un pueblo blanco sin acceso por carretera.
- **Historia Minoica:** Posibilidad de visitar centros palaciales (UNESCO Tentative).

---

## 🗓️ Itinerario Detallado (Logística)

| Fecha | Día | Ciudad/Zona | Transporte | Actividades | Notas |
|:---:|:---:|:---|:---|:---|:---|
| 28 Mar | 1 | Chania | Vuelo (3h 30m) | Llegada y Puerto | Recogida 4x4. Puerto Veneciano. |
| 29 Mar | 2 | Lefka Ori | 4x4 (1.5h) | **Expedición Nieve** | Hito Aventura: High Desert con grampones. |
| 30 Mar | 3 | Anopolis | 4x4 (30m) | Cañón de Aradena | Descenso técnico a Playa Marmara (3h). |
| 31 Mar | 4 | Loutro | Lancha (15m) | Cuevas Marinas | Navegación privada por el Mar de Libia. |
| 01 Abr | 5 | Asterousia | 4x4 Off-road | Raid Montañas Sur | Ruta de 5h por cordillera virgen. |
| 02 Abr | 6 | Ierapetra | 4x4 (1h) | **Ha Gorge (Technical)**| Hito Aventura: 26 rápeles. 6-8h actividad. |
| 03 Abr | 7 | Elounda | 4x4 (1.5h) | Relax / Historia | Isla Spinalonga y hotel lujo. |
| 04 Abr | 8 | Rethymno | 4x4 (2h) | Ciudad Vieja | Exploración veneciana y cena final. |
| 05 Abr | 9 | Madrid | Vuelo (3h 30m) | Regreso | Traslado a CHQ o HER. |

---

## 🗺️ Estrategia por Fases
- **Fase 1 (Oeste - El Desierto de Piedra):** Aventura de alta montaña en las Lefka Ori. Alojamiento: **Monastery Estate Retreat**.
- **Fase 2 (Este - El Tajo Tectónico):** El desafío técnico definitivo en Ha Gorge y la soledad de Asterousia.

---

## 🔥 Hito de Aventura Real: Ha Gorge y el "High Desert"
Ha Gorge es vuestro "Hang Va" mediterráneo: una falla tectónica tan estrecha que puedes tocar ambas paredes, con rápeles constantes y agua de deshielo. El "High Desert" de las Lefka Ori ofrece la soledad absoluta de un paisaje lunar a 2000m.

---

## 📅 Hoja de Ruta Narrativa (Experiencia)

### Día 1 y 2: El puerto veneciano y la nieve eterna
- **Logística:** **20 min de taxi** al puerto. Día 2: **1.5h de 4x4** para subir a la meseta.
- **Valor Diferencial:** Chania es necesaria para el contraste histórico. Las **Lefka Ori** en marzo son el valor diferencial: ver nieve profunda a pocos km del mar azul, cruzando dolinas kársticas en soledad total.

### Día 3 y 4: Abismos y lanchas rápidas
- **Logística:** **3h de trekking** técnico en Aradena. Día 4: lancha rápida privada (**15 min**).
- **Valor Diferencial:** **Aradena** es necesaria por su verticalidad extrema. **Loutro** aporta el valor de la inaccesibilidad; un pueblo donde el tiempo se detuvo porque nunca llegó la carretera.

### Día 5 y 6: Raid Asterousia y el Desafío Ha
- **Logística:** **5h de conducción técnica** off-road. Día 6: **7h de actividad técnica** en cañón.
- **Valor Diferencial:** Las **Asterousia** son el valor diferencial de la Creta más remota y pastoril. **Ha Gorge** es el hito del viaje: no hay otro cañón en Europa con esa configuración tectónica y nivel de compromiso técnico una vez entras.

---

## ⚖️ Justificación de Decisiones (Lógica Atómica)
- **Transporte (4x4 Real):** Se elige un **Suzuki Jimny o SUV con reductora** porque las pistas de Asterousia y el acceso a Ha Gorge son impracticables para un SUV de ciudad.
- **Ruta (Sur vs Norte):** Se **descarta el norte** por ser un modelo turístico masivo. Se elige el sur para asegurar la soledad y la aventura técnica.
- **Actividad (Ha Gorge vs Samaria):** Se prioriza **Ha** porque Samaria en marzo suele estar cerrada o demasiado húmeda para ser disfrutada, mientras que Ha está en su pico de agua espectacular.
- **Utilidad:** Se han eliminado visitas a centros comerciales de Heraklion para ganar horas de luz en el Raid de Asterousia.

---

## 🗺️ Mapa Interactivo
<div id="map" style="height: 400px;"></div>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  var map = L.map('map').setView([35.2, 24.8], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);
  L.marker([35.51, 24.02]).addTo(map).bindPopup('Chania');
  L.marker([35.22, 24.09]).addTo(map).bindPopup('Lefka Ori (Nieve)');
  L.marker([35.20, 24.08]).addTo(map).bindPopup('Loutro (Inaccesible)');
  L.marker([35.08, 25.83]).addTo(map).bindPopup('Ha Gorge (Hito)');
  L.marker([35.37, 24.47]).addTo(map).bindPopup('Rethymno');
</script>

---

## ⚠️ Check de Supervivencia (Agente)
- **Factor "Ni de Coña":** No entrar en Ha Gorge si hay nubes en la meseta de Thripti. No conducir en Asterousia sin rueda de repuesto real y herramientas.
- **Logística:** Las gasolineras en el sur son escasas; llenar siempre que veas una.

---

## ✈️ Logística Crítica
- **Vuelos:** [✈️ Buscar MAD -> Creta](https://www.skyscanner.es/transport/flights/mad/chq/260328/260405/?adults=2&currency=EUR)
- **Guías:** [🧗 Lithos Crete](https://lithoscrete.com/)
