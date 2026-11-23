/*
 * ===========================================================
 *  TERMINE – hier werden alle Veranstaltungen eingetragen
 * ===========================================================
 *
 *  Einfach einen neuen Block nach diesem Muster hinzufügen:
 *
 *  {
 *    datum: "2026-12-05",          // Format JJJJ-MM-TT
 *    beginn: "20:00",
 *    ende: "01:00",                // optional
 *    art: "salsa",                 // "salsa" | "fiesta" | "kurs"
 *    titel: "Salsa Abend",
 *    ort: "Ort, Straße, Stadt",
 *    beschreibung: "Kurzer Text"   // optional
 *  },
 *
 *  Die Reihenfolge ist egal – der Kalender sortiert automatisch.
 *  Hinweis: Die folgenden Einträge sind BEISPIELTERMINE.
 */

const TERMINE = [
  {
    datum: "2026-11-27", beginn: "20:00", ende: "00:30", art: "salsa",
    titel: "Salsa Abend", ort: "Bayreuth Innenstadt",
    beschreibung: "Freies Tanzen zu Salsa, Bachata & Kizomba. Ab 19:30 kurzer Schnupper-Workshop."
  },
  {
    datum: "2026-11-30", beginn: "19:00", ende: "20:30", art: "kurs",
    titel: "Salsa Grundkurs – Start", ort: "Tanzstudio Bayreuth",
    beschreibung: "6 Abende, jeweils montags. Ohne Vorkenntnisse, auch ohne Partner:in."
  },
  {
    datum: "2026-12-05", beginn: "21:00", ende: "02:00", art: "fiesta",
    titel: "Fiesta Latina", ort: "Bayreuth",
    beschreibung: "Die große Latin-Party mit DJ, Animation und Cocktails."
  },
  {
    datum: "2026-12-11", beginn: "20:00", ende: "00:30", art: "salsa",
    titel: "Salsa Abend", ort: "Kulmbach",
    beschreibung: "Salsa Abend in der Umgebung – gemütlich und familiär."
  },
  {
    datum: "2026-12-14", beginn: "20:30", ende: "22:00", art: "kurs",
    titel: "Bachata Workshop", ort: "Tanzstudio Bayreuth",
    beschreibung: "Workshop für Einsteiger:innen und Leicht-Fortgeschrittene."
  },
  {
    datum: "2026-12-19", beginn: "21:00", ende: "02:00", art: "fiesta",
    titel: "Fiesta Latina – Weihnachtsspecial", ort: "Bayreuth",
    beschreibung: "Letzte Fiesta des Jahres mit Weihnachts-Überraschungen."
  },
  {
    datum: "2026-12-31", beginn: "21:00", ende: "03:00", art: "fiesta",
    titel: "Silvester Fiesta Latina", ort: "Bayreuth",
    beschreibung: "Ins neue Jahr tanzen – mit Mitternachts-Rueda."
  },
  {
    datum: "2027-01-08", beginn: "20:00", ende: "00:30", art: "salsa",
    titel: "Salsa Abend", ort: "Bayreuth Innenstadt",
    beschreibung: "Der erste Salsa Abend im neuen Jahr."
  },
  {
    datum: "2027-01-11", beginn: "19:00", ende: "20:30", art: "kurs",
    titel: "Salsa Grundkurs – Neuer Kurs", ort: "Tanzstudio Bayreuth",
    beschreibung: "Neuer 6-Wochen-Kurs für Anfänger:innen."
  },
  {
    datum: "2027-01-23", beginn: "21:00", ende: "02:00", art: "fiesta",
    titel: "Fiesta Latina", ort: "Bayreuth",
    beschreibung: "Salsa, Bachata, Reggaeton & Merengue bis tief in die Nacht."
  }
];
