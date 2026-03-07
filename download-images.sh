#!/usr/bin/env bash
# Downloads one hero image per destination from Unsplash and saves them to
# assets/images/destinations/. Run once from the repo root:
#   bash download-images.sh

set -euo pipefail
OUT="assets/images/destinations"
mkdir -p "$OUT"

BASE="https://images.unsplash.com/photo"
PARAMS="w=800&h=450&fit=crop&auto=format&q=75"

# Format: "filename:unsplash-photo-id"
PHOTOS=(
  "sicilia:1507003211169-0a1dd7228f2d"       # Taormina coastline
  "corea:1534274988757-a28bf1a57c17"          # Seoul skyline
  "costarica:1518259021555-7272c2e73c70"      # Jungle waterfall
  "creta:1533105079780-92b9be482077"          # Greek island coast
  "exuma:1548574505-73f1b2a6a7a8"             # Bahamas turquoise water
  "irlanda:1564507592333-a60657551587"        # Cliffs of Moher
  "islandia:1501854140801-50d01698950b"       # Iceland landscape
  "marruecos:1539020140153-e7e7a6f8fd26"     # Sahara desert
  "noruega:1531299244174-d247dd4e5a66"        # Norwegian fjord
  "oman:1578895101408-1a36b834405b"           # Oman desert/wadis
  "panama:1552083375-1ea51b3e1d23"            # Tropical coast
  "providencia:1542259009477-d625272157b7"    # Caribbean island
  "samana:1508193638397-1c4234db14d8"         # Beach / ocean
  "sanblas:1507525428034-b723cf961d3e"        # Sailing / tropical islands
  "tailandia:1552465011-b4e21bf6e79a"         # Thai islands
  "tanzania:1516026672322-71ab47853fde"       # Africa safari
  "zermatt:1515488035-f52d23da3ef0"           # Matterhorn / Alps
  "azores:1580502304784-8985b7eb7260"         # Volcanic island
  "malta:1555993258105-0b9099b7de88"          # Malta Valletta harbor
  "lanzarote:1548178042536-89d6f61d9e36"      # Lanzarote volcanic landscape
)

for entry in "${PHOTOS[@]}"; do
  dest="${entry%%:*}"
  photo_id="${entry##*:}"
  file="$OUT/${dest}.jpg"

  if [[ -f "$file" && $(wc -c < "$file") -gt 10000 ]]; then
    echo "✓ $dest — already downloaded, skipping"
    continue
  fi

  url="${BASE}-${photo_id}?${PARAMS}"
  echo -n "↓ $dest ... "
  if curl -fsSL --max-time 20 "$url" -o "$file"; then
    size=$(wc -c < "$file")
    echo "done (${size} bytes)"
  else
    echo "FAILED — check photo ID or network"
    rm -f "$file"
  fi
done

echo ""
echo "All done. Now run: git add assets/images && git commit -m 'Add destination hero images'"
