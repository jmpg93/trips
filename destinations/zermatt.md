# 🏔️ Zermatt (Plan Estratégico)

**Estado:** 🔄 Planificando (Semana Santa 2026)

---

## 💰 Presupuesto Global Estimado

| Categoría | Estimación | Notas |
|-----------|------------|-------|
| Vuelos | €200 - €450 | Madrid - Ginebra (GVA) / Zúrich (ZRH) |
| Transportes | €350 - €500 | Tren SBB (Half Fare Card) + Taxis Eléctricos |
| Alojamiento | €2,500 - €4,500 | Riffelalp Resort / The Omnia |
| Actividades | €1,200 - €1,800 | Ski Pass Int. + Gorge Adventure + Breithorn |
| Extras | €1,000 - €1,500 | Mix Fondue Suiza + Pasta en Cervinia |
| **Total** | **€5,250 - €8,750** | **Presupuesto por pareja / 8-9 días** |

---

## 🚀 Highlights de Actividades
- **Esquí Internacional:** Cruce de fronteras Suiza-Italia por el glaciar.
- **Breithorn Ascent:** Cumbre de 4,164m sobre terreno glaciar técnico.
- **Gornergrat Railway:** El tren de cremallera más alto de Europa al aire libre.
- **Gorge Adventure:** Circuito técnico sobre el desfiladero del Gorner.
- **The Omnia / Riffelalp:** Experiencias de diseño y spa de máxima categoría.

---

## 🗓️ Itinerario Detallado (Logística)

| Fecha | Día | Ciudad/Zona | Transporte | Actividades | Notas |
|:---:|:---:|:---|:---|:---|:---|
| 28 Mar | 1 | GVA / Zermatt | Tren SBB (3.5h) | Traslado Alpes | Comprar Half Fare Card al llegar. |
| 29 Mar | 2 | Matterhorn Ski | Ski Int. | Esquí Internacional | Cruzar a Italia (Cervinia) para comer. |
| 30 Mar | 3 | Gornergrat | Tren Cremallera | Vistas / Esquí | Subida a 3,089m. Fotos Matterhorn. |
| 31 Mar | 4 | Gorner Gorge | Guía Técnico | **Gorge Adventure** | Hito Aventura: Tirolinas sobre río. |
| 01 Abr | 5 | Glacier Paradise | Teleférico | Breithorn Ascent | Hito Aventura: Cumbre 4,164m (Glaciar). |
| 02 Abr | 6 | Matterhorn Ski | Ski Int. | Sunnegga / Rothorn | Esquí en cara norte. |
| 03 Abr | 7 | Zermatt Village | Parapente | Vuelo Térmico | Tandem Rothorn -> Zermatt. |
| 04 Abr | 8 | Zermatt | Spa / Relax | Recuperación Lujo | Tarde en spa de The Omnia o Riffelalp. |
| 05 Abr | 9 | GVA / Madrid | Tren SBB (3.5h) | Vuelo de regreso | Traslado tren al aeropuerto. |

---

## 🗺️ Estrategia por Fases
- **Fase 1 (Adrenalina y Cumbres):** Aprovechar la altitud extrema (3,883m) para actividades técnicas sobre hielo y cumbre de 4,000m.
- **Fase 2 (Lifestyle y Relax):** Cultura del "Après-ski" sofisticado y gastronomía alpina.

---

## 🔥 Hito de Aventura Real: Breithorn Ascent y Gorge Adventure
- **Breithorn (4,164m):** Expedición con crampones para alcanzar una cumbre de 4,000m. El valor diferencial es la sensación de alta montaña real.
- **Gorge Adventure:** Recorrido técnico por desfiladero con saltos y tirolinas sobre aguas glaciares.

---

## 📅 Hoja de Ruta Narrativa (Experiencia)

### Día 1 y 2: El pueblo sin coches y la frontera invisible
- **Logística:** **3.5h de tren SBB** desde Ginebra. El día 2, cruce esquiando a Italia vía **Plateau Rosa**.
- **Valor Diferencial:** Zermatt es necesaria por su pureza. El valor diferencial es comer en **Cervinia** (Italia); es el único sitio de los Alpes donde puedes desayunar una fondue suiza y almorzar pasta italiana artesana bajando la misma montaña.



### Día 3 y 4: Hierro, Hielo y Vértigo
- **Logística:** **33 min en tren de cremallera**. El día 4, traslado corto a pie hasta Furi.
- **Valor Diferencial:** **Gornergrat** ofrece la panorámica más icónica de los Alpes. El **Gorge Adventure** es el valor diferencial técnico: sentir el deshielo bajo tus pies mientras te cuelgas de una tirolina entre paredes heladas.



### Día 5 y 6: El techo de Europa
- **Logística:** **40 min de teleférico**. Ascenso al Breithorn de **4h**.
- **Valor Diferencial:** El **Breithorn** es vuestro hito de 4,000m. Caminar encordados sobre el glaciar es la experiencia de equipo definitiva. La tarde del día 6 en la cara norte asegura la mejor nieve de primavera de Europa.



### Día 7, 8 y 9: Vuelo térmico y el reset de lujo
- **Logística:** **20 min de vuelo**. Día 8: relax total.
- **Valor Diferencial:** El **parapente** desde Rothorn es necesario para ver la cara norte del Matterhorn a la altura de los ojos. El spa final es el valor diferencial del lujo suizo para recuperar el cuerpo antes del regreso.



---

## ⚖️ Justificación de Decisiones (Lógica Atómica)
- **Transporte (Half Fare Card):** Se elige sobre el Swiss Pass porque descuenta el 50% en los carísimos remontes de Zermatt, ahorrando +€100 por persona.
- **Logística (Comer en Italia):** Justificado por el 40% de ahorro en restauración y la calidad gastronómica superior.
- **Actividad (Breithorn):** Se prioriza para añadir un hito de montañismo técnico a un viaje de esquí comercial.

---

## 🗺️ Mapa Interactivo
<div id="map" style="height: 400px;"></div>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  var map = L.map('map').setView([45.97, 7.70], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  var points = [
    [46.23, 6.10], // 1. Ginebra (Aeropuerto)
    [46.02, 7.74], // 2. Zermatt Village
    [45.93, 7.71], // 3. Matterhorn Glacier Paradise
    [45.93, 7.63], // 4. Breithorn
    [45.92, 7.62], // 5. Cervinia (Italia)
    [45.98, 7.78], // 6. Gornergrat
    [46.02, 7.74]  // 7. Regreso Zermatt
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

  createLabel(1, points[0]).addTo(map).bindPopup('1. Ginebra');
  createLabel(2, points[1]).addTo(map).bindPopup('2. Zermatt Village');
  createLabel(3, points[2]).addTo(map).bindPopup('3. Glacier Paradise');
  createLabel(4, points[3]).addTo(map).bindPopup('4. Breithorn (4,164m)');
  createLabel(5, points[4]).addTo(map).bindPopup('5. Cervinia (Italia)');
  createLabel(6, points[5]).addTo(map).bindPopup('6. Gornergrat');

  L.polyline(points, {color: '#ff3333', weight: 3, opacity: 0.6, dashArray: '10, 10'}).addTo(map);
</script>

---

## ⚠️ Check de Supervivencia (Agente)
- **Factor "Ni de Coña":** No cruzar a Italia con viento fuerte. No esquiar fuera de pista sin guía.
- **Logística:** Comprar la **Half Fare Card**.

---

## ✈️ Logística Crítica
- **Vuelos:** [✈️ Buscar MAD -> Ginebra](https://www.skyscanner.es/transport/flights/mad/gva/260328/260405/?adults=2&currency=EUR)
- **Trenes:** [🚆 SBB.ch](https://www.sbb.ch/en)
- **Guías:** [🏔️ Zermatters](https://www.zermatters.ch/en)
