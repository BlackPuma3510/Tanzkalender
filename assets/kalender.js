(function () {
  "use strict";

  const ARTEN = {
    salsa:  { name: "Salsa Abend" },
    fiesta: { name: "Fiesta Latina" },
    kurs:   { name: "Tanzkurs" },
    extern: { name: "Externe Veranstaltung" }
  };

  const MONATE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli",
    "August", "September", "Oktober", "November", "Dezember"];
  const MONATE_KURZ = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
  const TAGE = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const TAGE_LANG = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

  const pad = (n) => String(n).padStart(2, "0");
  const key = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parse = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const termine = (typeof TERMINE !== "undefined" ? TERMINE : [])
    .filter((t) => ARTEN[t.art])
    .map((t, i) => ({ ...t, id: "termin-" + i, date: parse(t.datum) }))
    .sort((a, b) => a.date - b.date || (a.beginn || "").localeCompare(b.beginn || ""));

  const aktiv = new Set(Object.keys(ARTEN));
  const heute = new Date(); heute.setHours(0, 0, 0, 0);

  // Startmonat: aktueller Monat, oder Monat des nächsten Termins falls im aktuellen nichts ansteht
  let ansicht = new Date(heute.getFullYear(), heute.getMonth(), 1);

  const grid = document.getElementById("cal-grid");
  const titel = document.getElementById("cal-title");
  const liste = document.getElementById("event-list");
  const legende = document.getElementById("legend");

  // ---------- Legende / Filter ----------
  Object.entries(ARTEN).forEach(([id, art]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip type-" + id;
    b.setAttribute("aria-pressed", "true");
    b.innerHTML = `<span class="dot"></span>${esc(art.name)}`;
    b.addEventListener("click", () => {
      if (aktiv.has(id)) aktiv.delete(id); else aktiv.add(id);
      b.setAttribute("aria-pressed", aktiv.has(id) ? "true" : "false");
      render();
    });
    legende.appendChild(b);
  });

  // ---------- Monatsansicht ----------
  function renderKalender() {
    titel.textContent = `${MONATE[ansicht.getMonth()]} ${ansicht.getFullYear()}`;
    grid.innerHTML = TAGE.map((t) => `<div class="cal-dow">${t}</div>`).join("");

    const ersterWochentag = (ansicht.getDay() + 6) % 7; // Montag = 0
    const start = new Date(ansicht);
    start.setDate(1 - ersterWochentag);

    const proTag = {};
    termine.filter((t) => aktiv.has(t.art)).forEach((t) => {
      (proTag[t.datum] = proTag[t.datum] || []).push(t);
    });

    for (let i = 0; i < 42; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      if (i === 35 && d.getMonth() !== ansicht.getMonth()) break;

      const zelle = document.createElement("div");
      zelle.className = "cal-day";
      if (d.getMonth() !== ansicht.getMonth()) zelle.classList.add("other");
      if (d.getTime() === heute.getTime()) zelle.classList.add("today");
      zelle.innerHTML = `<span class="num">${d.getDate()}</span>`;

      (proTag[key(d)] || []).forEach((t) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "cal-event type-" + t.art;
        b.title = `${t.titel} · ${t.beginn} Uhr · ${t.ort}`;
        b.textContent = `${t.beginn} ${t.titel}`;
        b.addEventListener("click", () => zeige(t.id));
        zelle.appendChild(b);
      });
      grid.appendChild(zelle);
    }
  }

  // ---------- Liste der kommenden Termine ----------
  function renderListe() {
    const kommend = termine.filter((t) => aktiv.has(t.art) && t.date >= heute);
    if (!kommend.length) {
      liste.innerHTML = `<li class="empty">Aktuell sind keine Termine eingetragen.</li>`;
      return;
    }
    liste.innerHTML = kommend.map((t) => `
      <li class="event-item type-${t.art}" id="${t.id}">
        <div class="event-date">
          <span class="d">${t.date.getDate()}</span>
          <span class="m">${MONATE_KURZ[t.date.getMonth()]}</span>
        </div>
        <div>
          <span class="badge">${esc(ARTEN[t.art].name)}</span>
          <h3>${esc(t.titel)}</h3>
          <div class="event-meta">
            ${TAGE_LANG[t.date.getDay()]}, ${t.date.getDate()}. ${MONATE[t.date.getMonth()]} ·
            ${t.ende ? esc(t.beginn) + "–" + esc(t.ende) : "ab " + esc(t.beginn)} Uhr · ${esc(t.ort)}
          </div>
          ${Array.isArray(t.ablauf) && t.ablauf.length ? `<ul class="ablauf">${t.ablauf.map(([zeit, was]) =>
            `<li><span class="zeit">${esc(zeit)}</span><span>${esc(was)}</span></li>`).join("")}</ul>` : ""}
          ${t.beschreibung ? `<p>${esc(t.beschreibung)}</p>` : ""}
        </div>
      </li>`).join("");
  }

  function zeige(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.remove("highlight");
    void el.offsetWidth;
    el.classList.add("highlight");
  }

  function render() { renderKalender(); renderListe(); }

  document.getElementById("cal-prev").addEventListener("click", () => {
    ansicht = new Date(ansicht.getFullYear(), ansicht.getMonth() - 1, 1); renderKalender();
  });
  document.getElementById("cal-next").addEventListener("click", () => {
    ansicht = new Date(ansicht.getFullYear(), ansicht.getMonth() + 1, 1); renderKalender();
  });
  document.getElementById("cal-today").addEventListener("click", () => {
    ansicht = new Date(heute.getFullYear(), heute.getMonth(), 1); renderKalender();
  });

  render();
})();
