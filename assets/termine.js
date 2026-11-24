/*
 * ===========================================================
 *  TERMINE – hier werden alle Veranstaltungen eingetragen
 * ===========================================================
 *
 *  Einfach einen neuen Block nach diesem Muster hinzufügen:
 *
 *  {
 *    datum: "2026-12-05",          // Format JJJJ-MM-TT
 *    beginn: "21:00",
 *    ende: "02:00",                // optional
 *    art: "salsa",                 // "salsa" | "fiesta" | "kurs" | "extern"
 *    titel: "Salsa Abend",
 *    ort: "Ort, Straße, Stadt",
 *    ablauf: [                     // optional: Ablaufplan (Uhrzeit, Programmpunkt)
 *      ["21:00", "Einlass"],
 *      ["21:15", "Kostenloser Workshop"]
 *    ],
 *    beschreibung: "Kurzer Text"   // optional, z. B. für externe Veranstaltungen
 *  },
 *
 *  Die Reihenfolge ist egal – der Kalender sortiert automatisch.
 *  Hinweis: Die folgenden Einträge sind BEISPIELTERMINE.
 */

// Standard-Ablauf für Salsa Abende und Fiestas – kann pro Termin überschrieben werden
const ABLAUF_STANDARD = [
  ["21:00", "Einlass"],
  ["21:15", "Kostenloser Workshop – ohne Vorkenntnisse"],
  ["22:00–24:00", "Freies Tanzen (Salsa, Bachata, Merengue)"],
  ["ab 24:00", "Zeit für Songwünsche & Latin Party"]
];

const TERMINE = [
  {
    datum: "2026-11-27", beginn: "21:00", art: "salsa",
    titel: "Salsa Abend", ort: "Bayreuth Innenstadt",
    ablauf: ABLAUF_STANDARD
  },
  {
    datum: "2026-12-05", beginn: "21:00", ende: "02:00", art: "fiesta",
    titel: "Fiesta Latina", ort: "Bayreuth",
    ablauf: ABLAUF_STANDARD
  },
  {
    datum: "2026-12-11", beginn: "21:00", art: "salsa",
    titel: "Salsa Abend", ort: "Kulmbach",
    ablauf: ABLAUF_STANDARD
  },
  {
    datum: "2026-12-13", beginn: "20:00", art: "extern",
    titel: "Beispiel: Externe Tanzveranstaltung", ort: "Bamberg",
    beschreibung: "Veranstaltung eines anderen Veranstalters – Infos beim Veranstalter."
  },
  {
    datum: "2026-12-19", beginn: "21:00", ende: "02:00", art: "fiesta",
    titel: "Fiesta Latina – Weihnachtsspecial", ort: "Bayreuth",
    ablauf: ABLAUF_STANDARD
  },
  {
    datum: "2026-12-31", beginn: "21:00", ende: "03:00", art: "fiesta",
    titel: "Silvester Fiesta Latina", ort: "Bayreuth",
    ablauf: [
      ["21:00", "Einlass"],
      ["21:15", "Kostenloser Workshop – ohne Vorkenntnisse"],
      ["22:00–24:00", "Freies Tanzen (Salsa, Bachata, Merengue)"],
      ["24:00", "Anstoßen aufs neue Jahr"],
      ["ab 00:15", "Songwünsche & Latin Party"]
    ]
  },
  {
    datum: "2027-01-08", beginn: "21:00", art: "salsa",
    titel: "Salsa Abend", ort: "Bayreuth Innenstadt",
    ablauf: ABLAUF_STANDARD
  },
  {
    datum: "2027-01-23", beginn: "21:00", ende: "02:00", art: "fiesta",
    titel: "Fiesta Latina", ort: "Bayreuth",
    ablauf: ABLAUF_STANDARD
  }
];
