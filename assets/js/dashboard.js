// ============================================================
// TRIPS DASHBOARD — Alpine.js Component
// Requires: trips-data.js to be loaded first
// ============================================================

document.addEventListener('alpine:init', () => {
  Alpine.data('dashboard', () => ({

    // ---- STATE ----
    destinations: [],
    selectedDest:  null,
    activeCategories: [],      // [] = show all
    activeBudgetMax: 10000,
    activeMonth: null,         // null = all months
    activeRegion: 'all',
    viewMode: 'grid',          // 'grid' | 'calendar' | 'discovery'
    searchQuery: '',
    darkMode: false,
    detailMap: null,
    detailMapMarkers: [],
    openItineraryDays: {},     // { dayIndex: true/false }

    // ---- STATIC CONFIG ----
    monthNames: MONTH_NAMES,
    monthNamesFull: MONTH_NAMES_FULL,
    currentMonth: new Date().getMonth() + 1,
    currentYear: new Date().getFullYear(),
    categories: CATEGORIES,
    seasonMap: SEASON_MAP,

    // ---- INIT ----
    init() {
      // Load destinations from global data
      this.destinations = TRIPS_DATA;

      // Restore preferences
      const saved = localStorage.getItem('trips-dark');
      if (saved !== null) this.darkMode = saved === 'true';
      else this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

      const savedView = localStorage.getItem('trips-view');
      if (savedView) this.viewMode = savedView;

      const savedBudget = localStorage.getItem('trips-budget');
      if (savedBudget) this.activeBudgetMax = parseInt(savedBudget);

      // Watch preferences
      this.$watch('darkMode', v => localStorage.setItem('trips-dark', v));
      this.$watch('viewMode', v => localStorage.setItem('trips-view', v));
      this.$watch('activeBudgetMax', v => localStorage.setItem('trips-budget', v));
    },

    // ---- COMPUTED ----
    get filteredDestinations() {
      return this.destinations.filter(d => {
        // Category filter (OR logic — destination matches if it has ANY selected cat)
        if (this.activeCategories.length > 0 &&
            !this.activeCategories.some(c => d.categories.includes(c))) return false;
        // Budget filter
        if (d.budget.totalMin > this.activeBudgetMax) return false;
        // Month filter
        if (this.activeMonth !== null && !d.bestMonths.includes(this.activeMonth)) return false;
        // Region filter
        if (this.activeRegion !== 'all' && d.region !== this.activeRegion) return false;
        // Search
        if (this.searchQuery.trim()) {
          const q = this.searchQuery.toLowerCase().trim();
          const match = d.name.toLowerCase().includes(q) ||
                        d.country.toLowerCase().includes(q) ||
                        d.region.toLowerCase().includes(q) ||
                        (d.tags || []).some(t => t.includes(q)) ||
                        (d.description || '').toLowerCase().includes(q);
          if (!match) return false;
        }
        return true;
      });
    },

    get gems() {
      return this.filteredDestinations.filter(d => d.isGem);
    },
    get classics() {
      return this.filteredDestinations.filter(d => !d.isGem);
    },
    get planningTrips() {
      return this.destinations.filter(d => d.status === 'planning');
    },
    get activeFilterCount() {
      let n = this.activeCategories.length;
      if (this.activeBudgetMax < 10000) n++;
      if (this.activeMonth !== null) n++;
      if (this.activeRegion !== 'all') n++;
      if (this.searchQuery.trim()) n++;
      return n;
    },
    get regions() {
      const r = [...new Set(this.destinations.map(d => d.region))].sort();
      return ['all', ...r];
    },
    get budgetRange() {
      if (this.activeBudgetMax >= 10000) return 'Todos';
      return 'Hasta €' + this.activeBudgetMax.toLocaleString('es');
    },

    // ---- METHODS: Filtering ----
    toggleCategory(catId) {
      if (catId === 'all') { this.activeCategories = []; return; }
      const idx = this.activeCategories.indexOf(catId);
      if (idx === -1) this.activeCategories.push(catId);
      else this.activeCategories.splice(idx, 1);
    },
    isCategoryActive(catId) {
      if (catId === 'all') return this.activeCategories.length === 0;
      return this.activeCategories.includes(catId);
    },
    selectMonth(m) {
      this.activeMonth = this.activeMonth === m ? null : m;
    },
    clearFilters() {
      this.activeCategories = [];
      this.activeBudgetMax = 10000;
      this.activeMonth = null;
      this.activeRegion = 'all';
      this.searchQuery = '';
    },

    destinationsForMonth(month) {
      return this.filteredDestinations.filter(d => d.bestMonths.includes(month));
    },

    // ---- METHODS: Detail ----
    openDetail(dest) {
      this.selectedDest = dest;
      this.openItineraryDays = {};
      document.body.style.overflow = 'hidden';
      this.$nextTick(() => this.initDetailMap(dest));
    },
    closeDetail() {
      this.selectedDest = null;
      document.body.style.overflow = '';
      if (this.detailMap) {
        this.detailMap.remove();
        this.detailMap = null;
      }
    },

    initDetailMap(dest) {
      if (!dest.mapWaypoints || dest.mapWaypoints.length === 0) return;
      const mapEl = document.getElementById('detail-map');
      if (!mapEl) return;
      if (this.detailMap) { this.detailMap.remove(); this.detailMap = null; }

      this.detailMap = L.map('detail-map', { zoomControl: true, attributionControl: false })
        .setView(dest.mapCenter, dest.mapZoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(this.detailMap);

      const coords = dest.mapWaypoints.map(w => [w[0], w[1]]);

      dest.mapWaypoints.forEach((w, i) => {
        const icon = L.divIcon({
          className: '',
          html: `<div style="background:#f97316;color:white;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);">${i+1}</div>`,
          iconSize: [22, 22], iconAnchor: [11, 11]
        });
        L.marker([w[0], w[1]], { icon }).addTo(this.detailMap).bindPopup(w[2] || '');
      });

      L.polyline(coords, { color: '#f97316', weight: 2.5, opacity: 0.7, dashArray: '8,8' })
        .addTo(this.detailMap);

      setTimeout(() => { if (this.detailMap) this.detailMap.invalidateSize(); }, 150);
    },

    toggleItineraryDay(i) {
      this.openItineraryDays[i] = !this.openItineraryDays[i];
    },

    // ---- METHODS: Styling helpers ----
    getHeroGradientClass(dest) {
      return 'hero-' + (dest.heroGradient || 'mediterranean');
    },

    getCategoryConfig(catId) {
      return CATEGORIES.find(c => c.id === catId) || {};
    },

    getCategoryBadgeStyle(_catId) {
      return '';  // styling handled by .cat-tag in trips.css
    },

    getCategoryLabel(catId) {
      const cfg = CATEGORIES.find(c => c.id === catId);
      return cfg ? cfg.emoji + ' ' + cfg.label : catId;
    },

    getSeasonIcon(dest, month) {
      const token = dest.seasonalAvailability?.[String(month)] || 'no';
      return SEASON_MAP[token]?.icon || '?';
    },

    getSeasonClass(dest, month) {
      const token = dest.seasonalAvailability?.[String(month)] || 'no';
      return SEASON_MAP[token]?.cls || 'seasonal-no';
    },

    getSeasonLabel(dest, month) {
      const token = dest.seasonalAvailability?.[String(month)] || 'no';
      return SEASON_MAP[token]?.label || '?';
    },

    isGoodMonth(dest, month) {
      const token = dest.seasonalAvailability?.[String(month)] || 'no';
      return !['no', 'rain', 'hot'].includes(token);
    },

    getScoreFill(score) {
      return (score / 10) * 100 + '%';
    },

    getScoreColor(_score) {
      return '#f97316';
    },

    getCardAccent(_dest) {
      return '#f97316';  // single accent — orange
    },

    // ---- METHODS: Formatting ----
    formatPrice(val) {
      if (!val && val !== 0) return '—';
      if (val >= 1000) return '€' + (val / 1000).toFixed(1).replace('.0', '') + 'k';
      return '€' + val;
    },
    formatPriceFull(val) {
      if (!val && val !== 0) return '—';
      return '€' + val.toLocaleString('es');
    },
    formatBudgetRange(dest) {
      return this.formatPriceFull(dest.budget.totalMin) + ' – ' + this.formatPriceFull(dest.budget.totalMax);
    },

    // ---- METHODS: Booking links ----
    getSkyscannerUrl(dest) {
      const iata = (dest.destinationAirport || '').split('/')[0].toLowerCase().replace(/\+.*/, '');
      if (iata && iata.length === 3) {
        return `https://www.skyscanner.es/transport/flights/mad/${iata}/`;
      }
      return 'https://www.skyscanner.es/';
    },
    getKayakUrl(dest) {
      const iata = (dest.destinationAirport || '').split('/')[0].toUpperCase().replace(/\+.*/, '');
      if (iata && iata.length === 3) {
        return `https://www.kayak.es/flights/MAD-${iata}/2adults`;
      }
      return 'https://www.kayak.es/';
    },
    getDetailUrl(dest) {
      return `destination/?id=${dest.id}`;
    },
  }));
});
